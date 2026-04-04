/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useEffect, useState } from "react";
import { CustomPagination, Error, Loader } from "../../components";
import { checkAccessControl } from "../../utils";
import { OrderComp, SearchBar } from "./components";
import {
  useGetAllOrdersStore,
  useCancelOrderStore,
  useUpdateOrderStore,
} from "./stores";
import { GetAllOrdersInput } from "./services/graphql";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as S from "./styles";

const Orders = () => {
  const navigate = useNavigate();

  const {
    getAllOrdersError,
    getAllOrdersResponse,
    getAllOrdersLoading,
    fetchGetAllOrders,
    resetGetAllOrders,
  } = useGetAllOrdersStore();

  const {
    cancelOrderError,
    cancelOrderLoading,
    cancelOrderResponse,
    fetchCancelOrder,
    resetCancelOrder,
  } = useCancelOrderStore();

  const {
    updateOrderError,
    updateOrderLoading,
    updateOrderResponse,
    fetchUpdateOrder,
    resetUpdateOrder,
  } = useUpdateOrderStore();

  const [orders, setOrders] = useState([]);
  const [cancelTriggered, setCancelTriggered] = useState(false);

  const [payload, setPayload] = useState<GetAllOrdersInput>({
    skip: 0,
    limit: 12,
    orderId: "",
    rollNumber: "",
    orderBy: "ASC",
  });

  useEffect(() => {
    if (payload) {
      fetchGetAllOrders(payload);
    }
  }, []);

  useEffect(() => {
    if (getAllOrdersResponse && Object.keys(getAllOrdersResponse).length > 0) {
      setOrders(getAllOrdersResponse?.payload?.orders || []);
    }
  }, [getAllOrdersResponse]);

  useEffect(() => {
    if (
      cancelTriggered &&
      cancelOrderResponse &&
      Object.keys(cancelOrderResponse).length > 0
    ) {
      toast.success("Order Canceled");

      resetGetAllOrders();
      fetchGetAllOrders(payload);

      setCancelTriggered(false);
    }
  }, [cancelTriggered, cancelOrderResponse]);

  useEffect(() => {
    if (updateOrderResponse && Object.keys(updateOrderResponse).length > 0) {
      toast.success("Order Updated");
      fetchGetAllOrders({
        ...payload,
      });
      resetUpdateOrder();
    }
  }, [updateOrderResponse]);

  useEffect(() => {
    if (updateOrderError && Object.keys(updateOrderError).length > 0) {
      toast.error(updateOrderError);

      resetUpdateOrder();
    }
  }, [updateOrderError]);

  useEffect(() => {
    if (cancelOrderError) {
      toast.error(cancelOrderError);
      resetCancelOrder();
    }
  }, [cancelOrderError]);

  const _onSearchPress = (
    payloadOverride?: Partial<GetAllOrdersInput>,
  ) => {
    setPayload((payload: any) => ({
      ...payload,
      ...payloadOverride,
      skip: 0,
    }));

    resetGetAllOrders();
    fetchGetAllOrders({
      ...payload,
      ...payloadOverride,
      skip: 0,
    });
  };

  const _onSortPress = (type: string) => {
    setPayload((payload: any) => ({
      ...payload,
      orderBy: type,
      skip: 0,
    }));

    resetGetAllOrders();
    fetchGetAllOrders({
      ...payload,
      orderBy: type,
      skip: 0,
    });
  };

  const _onPageChange = (page: number) => {
    setPayload((payload: any) => ({
      ...payload,
      skip: (page - 1) * payload.limit,
    }));

    resetGetAllOrders();
    fetchGetAllOrders({
      ...payload,
      skip: (page - 1) * payload.limit,
    });
  };

  const _cancelOrder = (orderId: string) => {
    fetchCancelOrder(orderId);
    setCancelTriggered(true);
  };

  const _updateOrder = (
    orderId: string,
    deliveryStatus?: string,
    paidStatus?: string
  ) => {
    fetchUpdateOrder(orderId, paidStatus, deliveryStatus);
  };

  const _renderLoader = () => {
    if (getAllOrdersLoading || updateOrderLoading) {
      return <Loader />;
    }

    if (cancelOrderLoading) {
      return <Loader useModalLoader />;
    }
  };

  const _renderError = () => {
    if (getAllOrdersError && Object.keys(getAllOrdersError).length > 0) {
      return <Error />;
    }
  };

  const _renderPage = () => {
    if (getAllOrdersResponse?.payload?.orders.length == 0) {
      return (
        <Error
          title="Uh Ohh!!!"
          subtitle="No Data Found"
          buttonTitle="Retry"
          onPress={() => {
            resetGetAllOrders();
            fetchGetAllOrders(payload);
          }}
        />
      );
    }

    if (getAllOrdersResponse && Object.keys(getAllOrdersResponse).length > 0) {
      return (
        <S.ContentCard>
          <OrderComp
            orders={orders}
            cancelOrder={_cancelOrder}
            updateOrder={_updateOrder}
          />
          <S.PaginationWrap>
            <CustomPagination
              perPageCount={payload.limit}
              totalPageCount={getAllOrdersResponse?.payload?.totalCount}
              currentPage={payload?.skip / payload.limit + 1}
              onPageChange={_onPageChange}
            />
          </S.PaginationWrap>
        </S.ContentCard>
      );
    }

    return <Loader />;
  };

  if (checkAccessControl("orders")) {
    return (
      <S.PageShell>
        <SearchBar
          setPayload={setPayload}
          onSortPress={_onSortPress}
          onSearchPress={_onSearchPress}
        />
        {_renderPage()}
        {_renderLoader()}
        {_renderError()}
      </S.PageShell>
    );
  }

  return (
    <Error
      subtitle="Page Not Found"
      buttonTitle="Go to Home"
      onPress={() => {
        navigate("/");
      }}
    />
  );
};

export default Orders;
