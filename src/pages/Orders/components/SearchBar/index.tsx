/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useTheme } from "../../../../hooks";
import * as S from "./styles";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import { ORDERS_CONFIG } from "../../config";
import { IoIosSearch } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

export interface ISearchComp {
  setPayload(payload: any): void;
  onSearchPress(payloadOverride?: {
    orderId?: string;
    rollNumber?: string;
  }): void;
  onSortPress(type: string): void;
}

export const SearchBar = ({
  onSearchPress,
  onSortPress,
  setPayload,
}: ISearchComp) => {
  const theme = useTheme();
  const searchOptions = [
    { label: "Order Id", value: ORDERS_CONFIG.orderId },
    { label: "Purchaser Number", value: ORDERS_CONFIG.rollNumber },
  ];
  const [selectedCategory, setSelectedCategory] = useState(ORDERS_CONFIG.orderId);
  const [searchValue, setSearchValue] = useState("");
  const selectedCategoryLabel =
    searchOptions.find((option) => option.value === selectedCategory)?.label ||
    "Order Id";

  const _setSearchData = (value: string) => {
    setSearchValue(value);
    if (selectedCategory === ORDERS_CONFIG.orderId) {
      setPayload((prev: any) => ({
        ...prev,
        orderId: value,
        rollNumber: "",
      }));
    } else {
      setPayload((prev: any) => ({
        ...prev,
        rollNumber: value,
        orderId: "",
      }));
    }
  };

  const _clearSearch = () => {
    setSearchValue("");
    onSearchPress({
      orderId: "",
      rollNumber: "",
    });
  };

  const _renderCategoryDropDownTitle = () => {
    return (
        <S.CustomToggle $bgColor={theme.colors.backGround}>
          <S.IconText $bgColor={theme.colors.textSecondary}>
            {selectedCategoryLabel.substring(0, 4)}
          </S.IconText>
          <S.DropDownIcon $bgColor={theme.colors.backGround} />
        </S.CustomToggle>
    );
  };

  const _renderCategoryDropDownMenu = () => {
    return (
      <S.CategoryDropDownMenu>
        {searchOptions.map((option, id) => {
          return (
            <div key={id}>
              <Dropdown.Item key={option.value} eventKey={option.value}>
                {option.label}
              </Dropdown.Item>
              {id !== searchOptions.length - 1 && <S.Divider />}
            </div>
          );
        })}
      </S.CategoryDropDownMenu>
    );
  };

  const _showDropDown = () => {
    return (
      <S.CustomDropdown
        onSelect={(eventKey) => {
          if (eventKey !== null) {
            setSelectedCategory(eventKey);
            setSearchValue("");
            setPayload((prev: any) => ({
              ...prev,
              orderId: "",
              rollNumber: "",
              skip: 0,
            }));
          }
        }}
      >
        {_renderCategoryDropDownTitle()}
        {_renderCategoryDropDownMenu()}
      </S.CustomDropdown>
    );
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
            onChange={(e) => _setSearchData(e.target.value)}
          />
          {searchValue.length > 0 && (
            <S.ClearButton title="clear" onClick={_clearSearch}>
              <RxCross2 size={24} color="black" />
            </S.ClearButton>
          )}
          <S.SearchButton
            title="Search"
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
    return <S.ActionContainer>{_renderSearchBar()}</S.ActionContainer>;
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
        {ORDERS_CONFIG.sortedOptions.map((item, id) => (
          <div key={id}>
            <S.SortedDropdownItem
              $bgColor={theme.colors.primary}
              eventKey={item}
            >
              <S.SortedIconText>{item}</S.SortedIconText>
            </S.SortedDropdownItem>
            {id !== ORDERS_CONFIG.sortedOptions.length - 1 && <S.Divider />}
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
