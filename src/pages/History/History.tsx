/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useEffect, useState } from "react";
import { CustomPagination, Error, Loader } from "../../components";
import { checkAccessControl, getUserDetails } from "../../utils";
import { HistoryComp } from "./components";
import { useGetAllOrdersStore } from "./stores";
import { GetAllOrdersInput } from "./services/graphql";
import { SearchBar } from "./components";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const History = () => {
  const navigate = useNavigate();

  const {
    getAllOrdersError,
    getAllOrdersResponse,
    getAllOrdersLoading,
    fetchGetAllOrders,
    resetGetAllOrders,
  } = useGetAllOrdersStore();
  const [orders, setOrders] = useState([]);

  const [payload, setPayload] = useState<GetAllOrdersInput>({
    skip: 0,
    limit: 8,
    orderId: "",
    userId: getUserDetails()?.id,
    orderBy: "DESC",
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

  const _renderLoader = () => {
    if (getAllOrdersLoading) {
      return <Loader />;
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
          <HistoryComp orders={orders} />
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

  if (checkAccessControl("history")) {
    return (
      <S.PageShell>
        <SearchBar
          payload={payload}
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

export default History;
