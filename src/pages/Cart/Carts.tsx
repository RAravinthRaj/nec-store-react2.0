/*
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useEffect, useState } from "react";
import * as S from "../Cart/components/CartComp/styles";
import {
  getItemInLocalStorage,
  getUserDetails,
  removeItemInLocalStorage,
} from "../../utils";
import { CartComp, Footer } from "./components";
import { useGetAllProductsStore } from "./stores";
import { CustomPagination, Error, Loader } from "../../components";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useGetAllOrdersStore } from "../History/stores";
import CartsService from "./services";

declare global {
  interface Window {
    Razorpay?: any;
  }
}

const Carts = () => {
  const [productIDs, setProductIDs] = useState(() => {
    const storedCart = getItemInLocalStorage("cartProducts") || [];
    return storedCart.map((item: { id: any }) => item.id);
  });

  const [payload, setPayload] = useState({
    skip: 0,
    limit: 6,
    productIds: productIDs,
  });
  const [paymentLoading, setPaymentLoading] = useState(false);
  const userId = getUserDetails()?.id;
  const userData = getUserDetails();

  const {
    getAllProductsResponse,
    getAllProductsError,
    getAllProductsLoading,
    resetGetAllProducts,
    fetchGetAllProducts,
  } = useGetAllProductsStore();

  const { fetchGetAllOrders } = useGetAllOrdersStore();

  const navigate = useNavigate();

  useEffect(() => {
    setPayload((prev) => ({
      ...prev,
      productIds: productIDs,
    }));
  }, [productIDs]);

  useEffect(() => {
    if (payload.productIds?.length > 0) {
      fetchGetAllProducts(payload);
    }
  }, [payload.productIds, payload.skip]);

  const _onPageChange = (page: number) => {
    setPayload((payload: any) => ({
      ...payload,
      skip: (page - 1) * 6,
    }));

    resetGetAllProducts();
    fetchGetAllProducts({
      ...payload,
      skip: (page - 1) * 6,
    });
  };

  const _renderLoader = () => {
    if (getAllProductsLoading) {
      return <Loader />;
    }
  };

  const _renderError = () => {
    if (getAllProductsError && Object.keys(getAllProductsError).length > 0) {
      return <Error />;
    }
  };

  const _getCartProductsPayload = () => {
    const data = getItemInLocalStorage("cartProducts");

    return data.map((item: any) => ({
      productId: item.id,
      quantity: item.quantity,
    }));
  };

  const _loadRazorpayScript = () =>
    new Promise<boolean>((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }

      const existingScript = document.querySelector(
        'script[src="https://checkout.razorpay.com/v1/checkout.js"]',
      ) as HTMLScriptElement | null;

      if (existingScript) {
        existingScript.addEventListener("load", () => resolve(true), {
          once: true,
        });
        existingScript.addEventListener("error", () => resolve(false), {
          once: true,
        });
        return;
      }

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });

  const _handlePaymentSuccess = async (response: {
    razorpay_order_id: string;
    razorpay_payment_id: string;
    razorpay_signature: string;
  }) => {
    try {
      const products = _getCartProductsPayload();

      await CartsService.verifyRazorpayPaymentAPI({
        products,
        razorpayOrderId: response.razorpay_order_id,
        razorpayPaymentId: response.razorpay_payment_id,
        razorpaySignature: response.razorpay_signature,
      });

      toast.success("Payment successful");
      removeItemInLocalStorage("cartProducts");
      removeItemInLocalStorage("totalPrice");

      if (userId) {
        fetchGetAllOrders(userId);
      }

      navigate("/products");
    } catch (err: any) {
      toast.error(err?.message || "Payment verification failed.");
    } finally {
      setPaymentLoading(false);
    }
  };

  const _recordFailedPayment = async (input: {
    amount: number;
    currency: string;
    failureReason: string;
    razorpayOrderId?: string;
    razorpayPaymentId?: string;
    razorpaySignature?: string;
    metadata?: string;
  }) => {
    try {
      await CartsService.recordPaymentTransactionAPI({
        amount: Number((input.amount / 100).toFixed(2)),
        currency: input.currency,
        status: "failed",
        failureReason: input.failureReason,
        razorpayOrderId: input.razorpayOrderId,
        razorpayPaymentId: input.razorpayPaymentId,
        razorpaySignature: input.razorpaySignature,
        metadata: input.metadata,
      });
    } catch (err) {
      console.error("Failed to record payment transaction", err);
    }
  };

  const _createOrder = async () => {
    try {
      const products = _getCartProductsPayload();
      const totalAmount = Number(getItemInLocalStorage("totalPrice") || 0);

      setPaymentLoading(true);

      const isRazorpayLoaded = await _loadRazorpayScript();
      if (!isRazorpayLoaded || !window.Razorpay) {
        throw new globalThis.Error(
          "Unable to load payment gateway. Please try again.",
        );
      }

      const orderResponse = await CartsService.createRazorpayOrderAPI(products);
      const paymentOrder = orderResponse?.payload?.paymentOrder;
      console.log("Here", paymentOrder);

      if (!paymentOrder?.id || !paymentOrder?.key) {
        throw new globalThis.Error("Failed to initialize payment.");
      }

      let hasLoggedPaymentOutcome = false;

      const razorpay = new window.Razorpay({
        key: paymentOrder.key,
        amount: paymentOrder.amount,
        currency: paymentOrder.currency,
        name: "NEC Store",
        description: "Complete your NEC Store purchase",
        order_id: paymentOrder.id,
        handler: (response: {
          razorpay_order_id: string;
          razorpay_payment_id: string;
          razorpay_signature: string;
        }) => {
          hasLoggedPaymentOutcome = true;
          void _handlePaymentSuccess(response);
        },
        modal: {
          ondismiss: () => {
            if (hasLoggedPaymentOutcome) {
              setPaymentLoading(false);
              return;
            }
            hasLoggedPaymentOutcome = true;
            void _recordFailedPayment({
              amount: paymentOrder.amount,
              currency: paymentOrder.currency,
              failureReason: "Payment popup dismissed by user.",
              razorpayOrderId: paymentOrder.id,
            });
            setPaymentLoading(false);
          },
        },
        prefill: {
          name: userData?.name || "",
          email: userData?.email || "",
          contact: userData?.rollNumber || "",
        },
        theme: {
          color: "#0424c8",
        },
      });

      razorpay.on("payment.failed", (response: any) => {
        if (hasLoggedPaymentOutcome) {
          return;
        }
        hasLoggedPaymentOutcome = true;
        void _recordFailedPayment({
          amount: paymentOrder.amount,
          currency: paymentOrder.currency,
          failureReason:
            response?.error?.description ||
            response?.error?.reason ||
            "Payment failed.",
          razorpayOrderId:
            response?.error?.metadata?.order_id || paymentOrder.id,
          razorpayPaymentId: response?.error?.metadata?.payment_id,
          metadata: JSON.stringify(response?.error ?? {}),
        });
        setPaymentLoading(false);
        toast.error(
          response?.error?.description || "Payment failed. Please try again.",
        );
      });

      razorpay.open();
    } catch (err: any) {
      setPaymentLoading(false);
      toast.error(err?.message || "Failed to start payment.");
    }
  };

  const _renderPage = () => {
    if (
      productIDs.length > 0 &&
      getAllProductsResponse &&
      Object.keys(getAllProductsResponse).length > 0
    ) {
      return (
        <S.PageShell>
          <S.PageContainer>
            <S.TopBar>
              <S.PreviousPageLink
                onClick={() => {
                  navigate(-1);
                }}
              />
              <S.HeaderContent>
                <S.Eyebrow>Customer Cart</S.Eyebrow>
              </S.HeaderContent>
            </S.TopBar>

            <S.LayoutGrid>
              <S.ItemsColumn>
                <CartComp
                  setProductIDs={setProductIDs}
                  cartProductsDetails={
                    getAllProductsResponse?.payload?.products
                  }
                />
                <CustomPagination
                  perPageCount={6}
                  totalPageCount={getAllProductsResponse?.payload?.totalCount}
                  currentPage={payload?.skip / 6 + 1}
                  onPageChange={_onPageChange}
                />
                <S.MobileSummarySpacer />
              </S.ItemsColumn>

              <S.SummaryColumn>
                <S.DesktopSummary>
                  <Footer
                    createOrder={_createOrder}
                    isProcessing={paymentLoading}
                  />
                </S.DesktopSummary>
              </S.SummaryColumn>
            </S.LayoutGrid>

            <S.MobileSummary>
              <Footer
                createOrder={_createOrder}
                isMobileSheet
                isProcessing={paymentLoading}
              />
            </S.MobileSummary>
          </S.PageContainer>
        </S.PageShell>
      );
    }

    if (productIDs.length <= 0) {
      removeItemInLocalStorage("cartProducts");
      removeItemInLocalStorage("totalPrice");

      return (
        <Error
          title="No Items Found"
          subtitle="Your cart is currently empty."
          buttonTitle="Explore Products"
        />
      );
    }
  };

  return (
    <>
      {getAllProductsLoading
        ? _renderLoader()
        : getAllProductsError && Object.keys(getAllProductsError).length > 0
          ? _renderError()
          : _renderPage()}
    </>
  );
};

export default Carts;
