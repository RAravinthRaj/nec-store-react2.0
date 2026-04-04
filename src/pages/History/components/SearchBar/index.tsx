/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useEffect } from "react";
import { useTheme } from "../../../../hooks";
import * as S from "./styles";
import { useState } from "react";
import { HISTORY_CONFIG } from "../../config";
import { Box, useMediaQuery } from "@mui/material";
import { getItemInLocalStorage } from "../../../../utils";
import { useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { PiShoppingCart } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";

export interface ISearchBar {
  payload: any;
  setPayload(payload: any): void;
  onSearchPress(payloadOverride?: { orderId?: string }): void;
  onSortPress(type: string): void;
}

export const SearchBar = ({
  setPayload,
  onSearchPress,
  onSortPress,
  payload,
}: ISearchBar) => {
  const theme = useTheme();
  const isTab = useMediaQuery("(max-width:768px)");

  const navigate = useNavigate();

  const [cartItemsCount, setCartItemsCount] = useState(() => {
    const products = getItemInLocalStorage("cartProducts");
    return Array.isArray(products) ? products.length : 0;
  });

  useEffect(() => {
    const updateCartCount = () => {
      const products = getItemInLocalStorage("cartProducts");
      setCartItemsCount(Array.isArray(products) ? products.length : 0);
    };

    updateCartCount();
    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, [navigate]);

  const _setSearchData = (e: string) => {
    setPayload((payload: any) => ({
      ...payload,
      orderId: e,
    }));
  };

  const _clearSearch = () => {
    onSearchPress({ orderId: "" });
  };

  const _renderFabButton = () => {
    if (isTab) {
      return (
        <Box sx={{ position: "fixed", bottom: 8, right: 20 }}>
          <S.CartContainer $bgColor={theme.colors.backGround} to="/carts">
            <S.CartIcon />
          </S.CartContainer>
          <S.CartItemsCount $bgColor={theme.colors.primary} $isMobile={true}>
            <S.Count $bgColor={theme.colors.white}>{cartItemsCount}</S.Count>
          </S.CartItemsCount>
        </Box>
      );
    }

    return (
      <S.CartButton
        aria-label="cart"
        onClick={() => {
          navigate("/carts");
        }}
      >
        <S.StyledBadge
          badgeContent={cartItemsCount}
          $bgColor={theme.colors.primary}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          color="secondary"
        >
          <PiShoppingCart />
        </S.StyledBadge>
      </S.CartButton>
    );
  };

  const _renderSearchBar = () => {
    return (
      <S.ActionItem>
        <S.InputWrapper $bgColor={theme.colors.backGround}>
          <S.Input
            type="text"
            placeholder="Search By Order Number"
            value={payload.orderId || ""}
            onChange={(e) => {
              _setSearchData(e.target.value);
            }}
          />
          {(payload.orderId || "").length > 0 && (
            <S.ClearButton title="clear" onClick={_clearSearch}>
              <RxCross2 size={24} color="black" />
            </S.ClearButton>
          )}

          <S.SearchButton
            title="press"
            onClick={() => {
              onSearchPress();
            }}
          >
            <IoIosSearch size={25} />
          </S.SearchButton>
        </S.InputWrapper>
        <S.SortContainer>{_renderSortedOptions()}</S.SortContainer>
      </S.ActionItem>
    );
  };

  const _renderActionItems = () => {
    return (
      <S.ActionContainer>
        {_renderSearchBar()}
        {_renderFabButton()}
      </S.ActionContainer>
    );
  };

  const _renderSortedOptionsTitle = () => {
    return (
      <S.CustomToggle $bgColor={theme.colors.backGround}>
        <S.SortIcon $bgColor={theme.colors.backGround} />
      </S.CustomToggle>
    );
  };

  const _renderSortedOptionsMenu = () => {
    return (
      <S.SortedDropdownMenu $bgColor={theme.colors.white}>
        {HISTORY_CONFIG.sortedOptions.map((item, id) => (
          <div key={id}>
            <S.SortedDropdownItem
              $bgColor={theme.colors.primary}
              eventKey={item}
            >
              <S.SortedIconText>{item}</S.SortedIconText>
            </S.SortedDropdownItem>
            {id !== HISTORY_CONFIG.sortedOptions.length - 1 && <S.Divider />}
          </div>
        ))}
      </S.SortedDropdownMenu>
    );
  };

  const _renderSortedOptions = () => {
    return (
      <S.CustomDropdown
        onSelect={(eventKey) => {
          if (eventKey !== null) {
            onSortPress(eventKey.includes("Asc") ? "ASC" : "DESC");
          }
        }}
      >
        {_renderSortedOptionsTitle()}
        {_renderSortedOptionsMenu()}
      </S.CustomDropdown>
    );
  };

  return <>{_renderActionItems()}</>;
};
