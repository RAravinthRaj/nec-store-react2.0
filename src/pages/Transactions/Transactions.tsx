import { ChangeEvent, useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { IoIosSearch } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CustomPagination, Error, Loader } from "../../components";
import { useTheme } from "../../hooks";
import { checkAccessControl } from "../../utils";
import { Footer } from "../Sales/components";
import * as SearchStyles from "../Sales/components/SearchBar/styles";
import * as TableStyles from "../Sales/components/SalesComp/styles";
import { TRANSACTIONS_CONFIG } from "./config";
import {
  useGetTransactionsReportStore,
  useGetTransactionsStore,
} from "./stores";

const DEFAULT_PAYLOAD = {
  skip: 0,
  limit: 5,
  orderBy: "DESC",
  from: "",
  to: "",
  status: "",
  search: "",
};

const Transactions = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [payload, setPayload] = useState(DEFAULT_PAYLOAD);
  const [searchValue, setSearchValue] = useState("");
  const [selectedStatus, setSelectedStatus] = useState(
    TRANSACTIONS_CONFIG.allStatuses,
  );

  const {
    getTransactionsLoading,
    getTransactionsResponse,
    getTransactionsError,
    fetchGetTransactions,
    resetGetTransactions,
  } = useGetTransactionsStore();
  const {
    getTransactionsReportLoading,
    getTransactionsReportResponse,
    getTransactionsReportError,
    fetchGetTransactionsReport,
    resetGetTransactionsReport,
  } = useGetTransactionsReportStore();

  const items = getTransactionsResponse?.payload?.transactions || [];
  const totalCount = getTransactionsResponse?.payload?.totalCount || 0;
  const totalAmount = getTransactionsResponse?.payload?.totalAmount || 0;

  const fetchData = (nextPayload = payload) => {
    resetGetTransactions();
    fetchGetTransactions(nextPayload);
  };

  useEffect(() => {
    fetchData(payload);
  }, [payload.from, payload.to, payload.status]);

  useEffect(() => {
    if (getTransactionsReportResponse?.payload?.message) {
      toast.success(getTransactionsReportResponse.payload.message);
      resetGetTransactionsReport();
    }
  }, [getTransactionsReportResponse, resetGetTransactionsReport]);

  useEffect(() => {
    if (getTransactionsReportError) {
      toast.error(getTransactionsReportError);
      resetGetTransactionsReport();
    }
  }, [getTransactionsReportError, resetGetTransactionsReport]);

  const onSearchPress = (payloadOverride?: Partial<typeof DEFAULT_PAYLOAD>) => {
    const nextPayload = {
      ...payload,
      ...payloadOverride,
      skip: 0,
    };

    setPayload(nextPayload);
    fetchData(nextPayload);
  };

  const onSortPress = (type: string) => {
    const nextPayload = {
      ...payload,
      orderBy: type === "Oldest First" ? "ASC" : "DESC",
      skip: 0,
    };

    setPayload(nextPayload);
    fetchData(nextPayload);
  };

  const onPageChange = (page: number) => {
    const nextPayload = {
      ...payload,
      skip: (page - 1) * 5,
    };

    setPayload(nextPayload);
    fetchData(nextPayload);
  };

  const getReport = () => {
    const { from, to, status, search } = payload;

    if (from.trim() === "" || to.trim() === "") {
      toast.info(
        "Please select both From and To dates to generate the transactions report.",
      );
      return;
    }

    if (new Date(from).getTime() > new Date(to).getTime()) {
      toast.info("The From date cannot be later than the To date.");
      return;
    }

    fetchGetTransactionsReport({ from, to, status, search });
  };

  const setFromDate = (e: ChangeEvent<HTMLInputElement>) => {
    setPayload((prev) => ({
      ...prev,
      from: e.target.value,
    }));
  };

  const setToDate = (e: ChangeEvent<HTMLInputElement>) => {
    setPayload((prev) => ({
      ...prev,
      to: e.target.value,
    }));
  };

  const setSearchData = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    setPayload((prev) => ({
      ...prev,
      search: value,
    }));
  };

  const clearSearch = () => {
    setSearchValue("");
    onSearchPress({ search: "" });
  };

  const setStatusFilter = (status: string | null) => {
    if (!status) return;

    setSelectedStatus(status);
    setPayload((prev) => ({
      ...prev,
      status: status === TRANSACTIONS_CONFIG.allStatuses ? "" : status,
    }));
  };

  const formatDate = (value?: string) => {
    if (!value || value === "-") return "-";

    return new Intl.DateTimeFormat("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(new Date(value));
  };

  const renderStatusDropDownTitle = () => {
    return (
      <SearchStyles.CustomToggle $bgColor={theme.colors.backGround}>
        <SearchStyles.IconText $bgColor={theme.colors.textSecondary}>
          {selectedStatus.substring(0, 4)}
        </SearchStyles.IconText>
        <SearchStyles.DropDownIcon $bgColor={theme.colors.backGround} />
      </SearchStyles.CustomToggle>
    );
  };

  const renderStatusDropDownMenu = () => {
    return (
      <SearchStyles.CategoryDropDownMenu>
        {TRANSACTIONS_CONFIG.statuses.map((status, index) => (
          <div key={status}>
            <Dropdown.Item eventKey={status}>{status}</Dropdown.Item>
            {index !== TRANSACTIONS_CONFIG.statuses.length - 1 && (
              <SearchStyles.Divider />
            )}
          </div>
        ))}
      </SearchStyles.CategoryDropDownMenu>
    );
  };

  const renderSearchBar = () => {
    return (
      <SearchStyles.ActionContainer>
        <SearchStyles.Date>
          <SearchStyles.FromDateContainer>
            <SearchStyles.DateTitle>
              {TRANSACTIONS_CONFIG.from}
            </SearchStyles.DateTitle>
            <SearchStyles.DateInput
              type="date"
              value={payload.from}
              onChange={setFromDate}
            />
          </SearchStyles.FromDateContainer>
          <SearchStyles.ToDateContainer>
            <SearchStyles.DateTitle>{TRANSACTIONS_CONFIG.to}</SearchStyles.DateTitle>
            <SearchStyles.DateInput
              type="date"
              value={payload.to}
              onChange={setToDate}
            />
          </SearchStyles.ToDateContainer>
        </SearchStyles.Date>

        <SearchStyles.ActionItem>
          <SearchStyles.InputWrapper $bgColor={theme.colors.backGround}>
            <SearchStyles.CustomDropdown onSelect={setStatusFilter}>
              {renderStatusDropDownTitle()}
              {renderStatusDropDownMenu()}
            </SearchStyles.CustomDropdown>
            <SearchStyles.Input
              type="input"
              placeholder={TRANSACTIONS_CONFIG.search}
              value={searchValue}
              onChange={setSearchData}
            />
            {searchValue.length > 0 && (
              <SearchStyles.ClearButton title="clear" onClick={clearSearch}>
                <RxCross2 size={24} color="black" />
              </SearchStyles.ClearButton>
            )}
            <SearchStyles.SearchButton
              title="search"
              onClick={() => {
                onSearchPress();
              }}
            >
              <IoIosSearch size={25} />
            </SearchStyles.SearchButton>
          </SearchStyles.InputWrapper>
          <SearchStyles.SortContainer>
            <SearchStyles.CustomDropdown onSelect={onSortPress}>
              <SearchStyles.CustomToggle $bgColor={theme.colors.backGround}>
                <SearchStyles.SortIcon $bgColor={theme.colors.backGround} />
              </SearchStyles.CustomToggle>
              <SearchStyles.SortedDropdownMenu $bgColor={theme.colors.white}>
                {TRANSACTIONS_CONFIG.sortedOptions.map((item) => (
                  <SearchStyles.SortedDropdownItem
                    key={item}
                    $bgColor={theme.colors.primary}
                    eventKey={item}
                  >
                    <SearchStyles.SortedIconText>
                      {item}
                    </SearchStyles.SortedIconText>
                  </SearchStyles.SortedDropdownItem>
                ))}
              </SearchStyles.SortedDropdownMenu>
            </SearchStyles.CustomDropdown>
          </SearchStyles.SortContainer>
        </SearchStyles.ActionItem>
      </SearchStyles.ActionContainer>
    );
  };

  const renderHeader = () => {
    return (
      <SearchStyles.HeaderCard $bgColor={theme.colors.secondaryBackGround}>
        <SearchStyles.HeaderContent>
          <SearchStyles.HeaderTitle>
            {TRANSACTIONS_CONFIG.pageTitle}
          </SearchStyles.HeaderTitle>
          <SearchStyles.HeaderSubtitle>
            {TRANSACTIONS_CONFIG.pageSubtitle}
          </SearchStyles.HeaderSubtitle>
        </SearchStyles.HeaderContent>
      </SearchStyles.HeaderCard>
    );
  };

  const renderTable = () => {
    return (
      <TableStyles.SalesContainer>
        <TableStyles.TitleBox $bgColor={theme.colors.secondaryBackGround}>
          {TRANSACTIONS_CONFIG.headings.map((heading) => (
            <TableStyles.TitleComp key={heading}>{heading}</TableStyles.TitleComp>
          ))}
        </TableStyles.TitleBox>
        {items.map((item: any, index: number) => (
          <TableStyles.ItemBox key={item.id || index} isOddIndex={index % 2 !== 0}>
            <TableStyles.TitleComp>
              {item.razorpayPaymentId}
            </TableStyles.TitleComp>
            <TableStyles.TitleComp>{item.rollNumber}</TableStyles.TitleComp>
            <TableStyles.TitleComp>{item.orderId}</TableStyles.TitleComp>
            <TableStyles.TitleComp>
              {Number(item.amount).toFixed(2)}
            </TableStyles.TitleComp>
            <TableStyles.TitleComp>
              {String(item.status).toUpperCase()}
            </TableStyles.TitleComp>
            <TableStyles.TitleComp>
              {formatDate(item.transactionDate)}
            </TableStyles.TitleComp>
          </TableStyles.ItemBox>
        ))}
      </TableStyles.SalesContainer>
    );
  };

  const renderPage = () => {
    if (getTransactionsResponse && Object.keys(getTransactionsResponse).length > 0) {
      if (items.length === 0) {
        return (
          <Error
            title="Uh Oh !!!"
            subtitle="No Data Found"
            buttonTitle="Retry"
            onPress={() => {
              fetchData(payload);
            }}
          />
        );
      }

      return (
        <>
          {renderTable()}
          <CustomPagination
            perPageCount={5}
            totalPageCount={totalCount}
            currentPage={payload.skip / 5 + 1}
            onPageChange={onPageChange}
          />
          <Footer
            totalLabel={TRANSACTIONS_CONFIG.totalTransactions}
            totalQuantity={totalCount}
            amountLabel={TRANSACTIONS_CONFIG.totalAmount}
            totalAmount={totalAmount}
            getReport={getReport}
          />
        </>
      );
    }

    if (getTransactionsError) {
      return (
        <Error
          subtitle="Something Went Wrong"
          buttonTitle="Retry"
          onPress={() => {
            fetchData(payload);
          }}
        />
      );
    }

    return <Loader />;
  };

  if (checkAccessControl("transactions")) {
    return (
      <>
        {renderHeader()}
        {renderSearchBar()}
        {renderPage()}
        {(getTransactionsLoading || getTransactionsReportLoading) && (
          <Loader useModalLoader={getTransactionsReportLoading} />
        )}
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

export default Transactions;
