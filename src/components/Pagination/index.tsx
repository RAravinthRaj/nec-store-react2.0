/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import * as S from "./styles";
import { BsChevronBarLeft, BsChevronBarRight } from "react-icons/bs";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";

export interface IPagination {
  perPageCount: number;
  totalPageCount: number;
  currentPage: number;
  onPageChange(page: number): void;
}

export const CustomPagination = ({
  perPageCount,
  totalPageCount,
  currentPage,
  onPageChange,
}: IPagination) => {
  const [page, setPage] = useState(currentPage);
  const [count, setCount] = useState(10);

  useEffect(() => {
    setCount(Math.ceil(totalPageCount / perPageCount));
  }, [perPageCount, totalPageCount]);

  const goToPage = (value: number) => {
    setPage(value);
    onPageChange(value);
  };

  const _renderPrev = () => {
    return (
      <>
        <BsChevronBarLeft
          onClick={() => goToPage(1)}
          color={page === 1 ? "lightgray" : "black"}
          style={{
            pointerEvents: page === 1 ? "none" : "auto",
            strokeWidth: 0.8,
            cursor: "pointer",
          }}
        />
        <HiOutlineChevronLeft
          onClick={() => goToPage(page - 1)}
          color={page === 1 ? "lightgray" : "black"}
          style={{
            pointerEvents: page === 1 ? "none" : "auto",
            strokeWidth: 3,
            cursor: "pointer",
          }}
        />
      </>
    );
  };

  const _renderNext = () => {
    return (
      <>
        <HiOutlineChevronRight
          onClick={() => goToPage(page + 1)}
          color={page === count ? "lightgray" : "black"}
          style={{
            pointerEvents: page === count ? "none" : "auto",
            strokeWidth: 3,
            cursor: "pointer",
          }}
        />
        <BsChevronBarRight
          onClick={() => goToPage(count)}
          color={page === count ? "grey" : "black"}
          style={{
            pointerEvents: page === count ? "none" : "auto",
            strokeWidth: 0.8,
            cursor: "pointer",
          }}
        />
      </>
    );
  };

  const _renderPages = () => {
    return (
      <Stack spacing={1} alignItems="center">
        <Pagination
          count={count}
          page={page}
          onChange={(_, value) => goToPage(value)}
          hidePrevButton
          hideNextButton
          shape="rounded"
          siblingCount={0}
          boundaryCount={1}
        />
      </Stack>
    );
  };

  return (
    <S.PaginationContainer>
      <Stack direction="row" spacing={1} alignItems="center">
        {_renderPrev()}
        {_renderPages()}
        {_renderNext()}
      </Stack>
    </S.PaginationContainer>
  );
};
