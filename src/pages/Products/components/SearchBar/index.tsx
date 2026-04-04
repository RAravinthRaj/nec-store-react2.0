/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useTheme } from "../../../../hooks";
import * as S from "./styles";
import { useMediaQuery } from "@mui/material";
import Dropdown from "react-bootstrap/Dropdown";
import { ChangeEvent, useEffect, useState } from "react";
import { AddItemModal } from "../AddItem";
import { AddCategoryModal } from "../AddCategory";
import { PRODUCTS_CONFIG } from "../../config";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { IoIosSearch } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { AddProductInput } from "../../services/graphql";
import { getItemInLocalStorage } from "../../../../utils";
import { useNavigate } from "react-router-dom";
import { PiShoppingCart } from "react-icons/pi";
export interface ISearchBarComp {
  categories: any[];
  addCategory(name: string): Promise<boolean>;
  setPayload(payload: any): void;
  onSearchPress(payloadOverride?: Record<string, any>): void;
  onSortPress(type: string): void;
  isRetailer: boolean;
  addProduct(args: AddProductInput): Promise<boolean>;
  showRetailerActions?: boolean;
}

export const SearchBar = ({
  categories,
  addCategory,
  setPayload,
  onSearchPress,
  onSortPress,
  isRetailer,
  addProduct,
  showRetailerActions = true,
}: ISearchBarComp) => {
  const theme = useTheme();
  const isTab = useMediaQuery("(max-width:768px)");

  const [openItem, setOpenItem] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategoryName, setSelectedCategoryName] = useState(
    PRODUCTS_CONFIG.all,
  );

  const [cartItemsCount, setCartItemsCount] = useState(() => {
    const products = getItemInLocalStorage("cartProducts");
    return Array.isArray(products) ? products.length : 0;
  });

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const categoriesWithAll = [{ id: "all", name: "All" }, ...categories];
  const navigate = useNavigate();

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

  const _setSearchData = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setPayload((payload: any) => ({
      ...payload,
      title: e.target.value,
    }));
  };

  const _clearSearch = () => {
    setSearchValue("");
    setPayload((payload: any) => ({
      ...payload,
      title: "",
      skip: 0,
    }));
    onSearchPress({
      title: "",
      skip: 0,
    });
  };

  const _setSearchCategory = (e: string | null) => {
    if (!e) return;

    const selectedCat = categoriesWithAll.find((cat) => cat.id === e);
    if (!selectedCat) {
      console.warn("Selected category not found:", e);
      return;
    }

    setSelectedCategoryName(selectedCat.name);

    setPayload((prev: any) => ({
      ...prev,
      categoryId: e === "all" ? "" : selectedCat.id,
    }));
  };

  const _renderCategoryDropDownTitle = () => {
    return (
      <S.CustomToggle $bgColor={theme.colors.backGround}>
        <S.IconText $bgColor={theme.colors.textSecondary}>
          {selectedCategoryName.substring(0, 4)}
        </S.IconText>
        <S.DropDownIcon $bgColor={theme.colors.backGround} />
      </S.CustomToggle>
    );
  };

  const _renderCategoryDropDownMenu = () => {
    return (
      <S.CategoryDropDownMenu>
        {categoriesWithAll?.map((cat, id) => {
          return (
            <div key={id}>
              <Dropdown.Item key={cat?.id} eventKey={cat?.id}>
                {cat?.name}
              </Dropdown.Item>
              {id != categoriesWithAll.length - 1 && <S.Divider />}
            </div>
          );
        })}
      </S.CategoryDropDownMenu>
    );
  };

  const _showDropDown = () => {
    return (
      <S.CustomDropdown onSelect={_setSearchCategory}>
        {_renderCategoryDropDownTitle()}
        {_renderCategoryDropDownMenu()}
      </S.CustomDropdown>
    );
  };

  const _renderTopButton = () => {
    if (!isTab) {
      if (isRetailer && showRetailerActions) {
        return (
          <S.ButtonContainer>
            <S.Button
              $bgColor={theme.colors.primary}
              onClick={() => {
                setOpenItem(true);
              }}
            >
              <S.AddIcon />
              {PRODUCTS_CONFIG.addItemTitle}
            </S.Button>
            <S.Button
              $bgColor={theme.colors.primary}
              onClick={() => {
                setOpenCategory(true);
              }}
            >
              <S.AddIcon /> {PRODUCTS_CONFIG.addCategoryTitle}
            </S.Button>
          </S.ButtonContainer>
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
    }
  };

  const _renderSearchBar = () => {
    return (
      <S.ActionItem>
        <S.InputWrapper $bgColor={theme.colors.backGround}>
          {_showDropDown()}
          <S.Input
            type="input"
            placeholder="Search"
            value={searchValue}
            onChange={_setSearchData}
          />
          {searchValue.length > 0 && (
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
        {_renderTopButton()}
      </S.ActionContainer>
    );
  };

  const _renderFabButton = () => {
    if (isTab) {
      if (isRetailer && showRetailerActions) {
        return (
          <div>
            <Box sx={{ position: "fixed", bottom: 25, right: 20 }}>
              <IconButton
                onClick={(event) => {
                  setAnchorEl(event.currentTarget);
                }}
              >
                <S.PlusButtonContainer $bgColor={theme.colors.primary} />
              </IconButton>
            </Box>

            <S.FixedMenu
              open={open}
              onClose={() => {
                setAnchorEl(null);
              }}
              onClick={() => {
                setAnchorEl(null);
              }}
              $bgColor={theme.colors.white}
              disableScrollLock={true}
            >
              <S.StyledMenuItem
                onClick={() => {
                  setOpenItem(true);
                }}
              >
                <S.FabAddIcon />
                {PRODUCTS_CONFIG.addItemTitle}
              </S.StyledMenuItem>
              <S.FabDivider />
              <S.StyledMenuItem
                onClick={() => {
                  setOpenCategory(true);
                }}
              >
                <S.FabAddIcon />
                {PRODUCTS_CONFIG.addCategoryTitle}
              </S.StyledMenuItem>
            </S.FixedMenu>
          </div>
        );
      }

      return (
        <Box
          sx={
            isTab
              ? { position: "fixed", bottom: 10, right: 20, zIndex: 2200 }
              : { position: "fixed", bottom: 15, right: 45, zIndex: 2200 }
          }
        >
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
        </Box>
      );
    }
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
        {PRODUCTS_CONFIG.sortedOptions.map((item, id) => (
          <div key={id}>
            <S.SortedDropdownItem
              $bgColor={theme.colors.primary}
              eventKey={item}
            >
              <S.SortedIconText>{item}</S.SortedIconText>
            </S.SortedDropdownItem>
            {id !== PRODUCTS_CONFIG.sortedOptions.length - 1 && <S.Divider />}
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

  const _renderModals = () => {
    return (
      <div>
        <AddItemModal
          modalShow={openItem}
          categories={categories}
          addProduct={addProduct}
          onClose={() => {
            setOpenItem(false);
          }}
        />
        <AddCategoryModal
          modalShow={openCategory}
          addCategory={addCategory}
          onClose={() => {
            setOpenCategory(false);
          }}
        />
      </div>
    );
  };

  return (
    <>
      {_renderActionItems()}
      {_renderModals()}
      {_renderFabButton()}
    </>
  );
};
