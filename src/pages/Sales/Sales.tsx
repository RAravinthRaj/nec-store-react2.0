/*
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CustomPagination, Error, Loader } from "../../components";
import { SearchBar, SalesComp, Footer } from "./components";
import {
  useGetSalesStore,
  useGetSalesReportStore,
  useGetIncomingStockStore,
  useGetIncomingStockReportStore,
} from "./stores";
import { checkAccessControl } from "../../utils";
import { useGetAllCategoriesStore } from "../Products/stores";
import { SALES_CONFIG } from "./config";

type ReportMode = "outgoing" | "incoming";

const DEFAULT_PAYLOAD = {
  skip: 0,
  limit: 5,
  orderBy: "ASC",
  categoryId: "",
  from: "",
  to: "",
  title: "",
};

const Sales = () => {
  const navigate = useNavigate();
  const [mode, setMode] = useState<ReportMode>(SALES_CONFIG.modes.outgoing);
  const [payload, setPayload] = useState(DEFAULT_PAYLOAD);
  const [categories, setCategories] = useState([]);

  const {
    getSalesLoading,
    getSalesResponse,
    getSalesError,
    fetchGetSales,
    resetGetSales,
  } = useGetSalesStore();
  const {
    getSalesReportResponse,
    getSalesReportError,
    getSalesReportLoading,
    fetchGetSalesReport,
    resetGetSalesReport,
  } = useGetSalesReportStore();
  const {
    getIncomingStockLoading,
    getIncomingStockResponse,
    getIncomingStockError,
    fetchGetIncomingStock,
    resetGetIncomingStock,
  } = useGetIncomingStockStore();
  const {
    getIncomingStockReportLoading,
    getIncomingStockReportResponse,
    getIncomingStockReportError,
    fetchGetIncomingStockReport,
    resetGetIncomingStockReport,
  } = useGetIncomingStockReportStore();
  const {
    getAllCategoriesResponse,
    fetchGetAllCategories,
    resetGetAllCategories,
  } = useGetAllCategoriesStore();

  const outgoingItems = getSalesResponse?.payload?.sales || [];
  const outgoingTotalCount = getSalesResponse?.payload?.totalCount || 0;
  const outgoingTotalAmount = getSalesResponse?.payload?.totalPrice || 0;
  const outgoingTotalQuantity = getSalesResponse?.payload?.totalSold || 0;
  const incomingItems = getIncomingStockResponse?.payload?.items || [];
  const incomingTotalCount = getIncomingStockResponse?.payload?.totalCount || 0;
  const incomingTotalAmount =
    getIncomingStockResponse?.payload?.totalAmount || 0;
  const incomingTotalQuantity =
    getIncomingStockResponse?.payload?.totalQuantity || 0;

  const activeItems =
    mode === SALES_CONFIG.modes.outgoing ? outgoingItems : incomingItems;
  const activeTotalCount =
    mode === SALES_CONFIG.modes.outgoing
      ? outgoingTotalCount
      : incomingTotalCount;
  const activeTotalAmount =
    mode === SALES_CONFIG.modes.outgoing
      ? outgoingTotalAmount
      : incomingTotalAmount;
  const activeTotalQuantity =
    mode === SALES_CONFIG.modes.outgoing
      ? outgoingTotalQuantity
      : incomingTotalQuantity;
  const activeError =
    mode === SALES_CONFIG.modes.outgoing
      ? getSalesError
      : getIncomingStockError;
  const activeLoading =
    mode === SALES_CONFIG.modes.outgoing
      ? getSalesLoading
      : getIncomingStockLoading;
  const headings =
    mode === SALES_CONFIG.modes.outgoing
      ? SALES_CONFIG.headings.outgoing
      : SALES_CONFIG.headings.incoming;

  const _fetchData = (nextPayload = payload, nextMode = mode) => {
    if (nextMode === SALES_CONFIG.modes.outgoing) {
      resetGetSales();
      fetchGetSales(nextPayload);
      return;
    }

    resetGetIncomingStock();
    fetchGetIncomingStock(nextPayload);
  };

  useEffect(() => {
    resetGetAllCategories();
    fetchGetAllCategories();
  }, [fetchGetAllCategories, resetGetAllCategories]);

  useEffect(() => {
    _fetchData(payload, mode);
  }, [mode, payload.categoryId, payload.from, payload.to]);

  useEffect(() => {
    if (
      getAllCategoriesResponse &&
      Object.keys(getAllCategoriesResponse).length > 0
    ) {
      setCategories(getAllCategoriesResponse.payload.categories || []);
    }
  }, [getAllCategoriesResponse]);

  useEffect(() => {
    if (getSalesReportResponse?.payload?.message) {
      toast.success(getSalesReportResponse.payload.message);
      resetGetSalesReport();
    }
  }, [getSalesReportResponse, resetGetSalesReport]);

  useEffect(() => {
    if (getIncomingStockReportResponse?.payload?.message) {
      toast.success(getIncomingStockReportResponse.payload.message);
      resetGetIncomingStockReport();
    }
  }, [getIncomingStockReportResponse, resetGetIncomingStockReport]);

  useEffect(() => {
    if (getSalesReportError) {
      toast.error(getSalesReportError);
      resetGetSalesReport();
    }
  }, [getSalesReportError, resetGetSalesReport]);

  useEffect(() => {
    if (getIncomingStockReportError) {
      toast.error(getIncomingStockReportError);
      resetGetIncomingStockReport();
    }
  }, [getIncomingStockReportError, resetGetIncomingStockReport]);

  const _onSearchPress = (payloadOverride?: Partial<typeof DEFAULT_PAYLOAD>) => {
    const nextPayload = {
      ...payload,
      ...payloadOverride,
      skip: 0,
    };

    setPayload(nextPayload);
    _fetchData(nextPayload);
  };

  const _onSortPress = (type: string) => {
    const nextPayload = {
      ...payload,
      orderBy: type,
      skip: 0,
    };

    setPayload(nextPayload);
    _fetchData(nextPayload);
  };

  const _onPageChange = (page: number) => {
    const nextPayload = {
      ...payload,
      skip: (page - 1) * 5,
    };

    setPayload(nextPayload);
    _fetchData(nextPayload);
  };

  const _onModeChange = (nextMode: ReportMode) => {
    if (nextMode === mode) {
      return;
    }

    setMode(nextMode);
    setPayload({ ...DEFAULT_PAYLOAD });
  };

  const _getReport = () => {
    const { from, to, categoryId, title } = payload;

    if (from.trim() === "" || to.trim() === "") {
      toast.info("Enter the dates");
      return;
    }

    if (mode === SALES_CONFIG.modes.outgoing) {
      fetchGetSalesReport({ from, to, categoryId, title });
      return;
    }

    fetchGetIncomingStockReport({ from, to, categoryId, title });
  };

  const _renderLoader = () => {
    if (activeLoading) {
      return <Loader />;
    }

    if (getSalesReportLoading || getIncomingStockReportLoading) {
      return <Loader useModalLoader />;
    }

    return null;
  };

  const _renderPage = () => {
    const hasActiveResponse =
      mode === SALES_CONFIG.modes.outgoing
        ? getSalesResponse && Object.keys(getSalesResponse).length > 0
        : getIncomingStockResponse &&
          Object.keys(getIncomingStockResponse).length > 0;

    if (hasActiveResponse) {
      if (activeItems.length === 0) {
        return (
          <Error
            title="Uh Oh !!!"
            subtitle={"No Data Found"}
            buttonTitle="Retry"
            onPress={() => {
              _fetchData(payload);
            }}
          />
        );
      }

      return (
        <>
          <SalesComp
            SalesDetails={activeItems}
            headings={headings}
            mode={mode}
          />
          <CustomPagination
            perPageCount={5}
            totalPageCount={activeTotalCount}
            currentPage={payload.skip / 5 + 1}
            onPageChange={_onPageChange}
          />
          <Footer
            totalLabel={
              mode === SALES_CONFIG.modes.outgoing
                ? SALES_CONFIG.outgoingTotalQuantity
                : SALES_CONFIG.incomingTotalQuantity
            }
            totalQuantity={activeTotalQuantity}
            amountLabel={
              mode === SALES_CONFIG.modes.outgoing
                ? SALES_CONFIG.outgoingTotalAmount
                : SALES_CONFIG.incomingTotalAmount
            }
            totalAmount={activeTotalAmount}
            getReport={_getReport}
          />
        </>
      );
    }

    if (activeError && activeError.length > 0) {
      return (
        <Error
          subtitle={"Something Went Wrong"}
          buttonTitle="Retry"
          onPress={() => {
            _fetchData(payload);
          }}
        />
      );
    }

    return <Loader />;
  };

  if (checkAccessControl("sales")) {
    return (
      <>
        <SearchBar
          categories={categories}
          mode={mode}
          payload={payload}
          onModeChange={_onModeChange}
          setPayload={setPayload}
          onSearchPress={_onSearchPress}
          onSortPress={_onSortPress}
        />
        {_renderPage()}
        {_renderLoader()}
      </>
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

export default Sales;
