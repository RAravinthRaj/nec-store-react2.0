/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/

import { ChangeEvent, useState } from "react";
import { USERS_CONFIG } from "../../config";
import { useTheme } from "../../../../hooks";
import Dropdown from "react-bootstrap/Dropdown";
import * as S from "./styles";
import { IoIosSearch } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

interface SearchBarI {
  setPayload(payload: any): void;
  onSearchPress(): void;
  onSortPress(type: string): void;
}

export const SearchBar = ({
  setPayload,
  onSearchPress,
  onSortPress,
}: SearchBarI) => {
  const [selectedCategory, setSelectedCategory] = useState<any>("Name");
  const [searchValue, setSearchValue] = useState("");
  const theme = useTheme();

  const _setSearchData = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    if (selectedCategory === "Name") {
      setPayload((payload: any) => ({
        ...payload,
        name: e.target.value,
        email: "",
      }));
    } else {
      setPayload((payload: any) => ({
        ...payload,
        email: e.target.value,
        name: "",
      }));
    }
  };

  const _clearSearch = () => {
    setSearchValue("");
    setPayload((payload: any) => ({
      ...payload,
      name: "",
      email: "",
    }));
    onSearchPress();
  };

  const _renderCategoryDropDownTitle = () => {
    return (
      <S.CustomToggle $bgColor={theme.colors.backGround}>
        <S.IconText $bgColor={theme.colors.textSecondary}>
          {selectedCategory}
        </S.IconText>
        <S.DropDownIcon $bgColor={theme.colors.backGround} />
      </S.CustomToggle>
    );
  };

  const _renderCategoryDropDownMenu = () => {
    return (
      <S.CategoryDropDownMenu>
        {USERS_CONFIG.category?.map((item, index) => {
          return (
            <div key={index}>
              <Dropdown.Item key={item} eventKey={item}>
                {item}
              </Dropdown.Item>
              {index != USERS_CONFIG.category.length - 1 && <S.Divider />}
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
            setPayload((payload: any) => ({
              ...payload,
              name: "",
              email: "",
            }));
          }
        }}
      >
        {_renderCategoryDropDownTitle()}
        {_renderCategoryDropDownMenu()}
      </S.CustomDropdown>
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
        {USERS_CONFIG.sortedOptions.map((item, id) => (
          <div key={id}>
            <S.SortedDropdownItem
              $bgColor={theme.colors.primary}
              key={item}
              eventKey={item}
            >
              <S.SortedIconText>{item}</S.SortedIconText>
            </S.SortedDropdownItem>
            {id !== USERS_CONFIG.sortedOptions.length - 1 && <S.Divider />}
          </div>
        ))}
      </S.SortedDropdownMenu>
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
            onChange={_setSearchData}
          />
          {searchValue.length > 0 && (
            <S.ClearButton title="clear" onClick={_clearSearch}>
              <RxCross2 size={24} color="black" />
            </S.ClearButton>
          )}
          <S.SearchButton title="press" onClick={onSearchPress}>
            <IoIosSearch size={25} />
          </S.SearchButton>
        </S.InputWrapper>
        <S.SortContainer>{_renderSortedOptions()}</S.SortContainer>
      </S.ActionItem>
    );
  };

  return <S.ActionContainer>{_renderSearchBar()}</S.ActionContainer>;
};
