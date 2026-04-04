/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useTheme } from "../../../../hooks";
import * as S from "./styles";
import Dropdown from "react-bootstrap/Dropdown";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { SALES_CONFIG } from "../../config";
import { IoIosSearch } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

export interface ISearchBar {
  categories: any[];
  mode: "outgoing" | "incoming";
  payload: {
    title: string;
    categoryId: string;
    from: string;
    to: string;
  };
  onModeChange: (mode: "outgoing" | "incoming") => void;
  setPayload(payload: any): void;
  onSearchPress: (payloadOverride?: {
    title?: string;
    categoryId?: string;
    from?: string;
    to?: string;
  }) => void;
  onSortPress: (type: string) => void;
}

export const SearchBar = ({
  categories,
  mode,
  payload,
  onModeChange,
  setPayload,
  onSearchPress,
  onSortPress,
}: ISearchBar) => {
  const theme = useTheme();
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategoryName, setSelectedCategoryName] = useState(
    SALES_CONFIG.all,
  );
  const categoriesWithAll = [{ id: "all", name: "All" }, ...categories];
  const selectedCategory = useMemo(
    () =>
      categoriesWithAll.find((category) => category.id === payload.categoryId),
    [categoriesWithAll, payload.categoryId],
  );

  useEffect(() => {
    setSearchValue(payload.title || "");
  }, [payload.title]);

  useEffect(() => {
    setSelectedCategoryName(selectedCategory?.name || SALES_CONFIG.all);
  }, [selectedCategory]);

  const _setSearchData = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setPayload((prev: any) => ({
      ...prev,
      title: e.target.value,
    }));
  };

  const _clearSearch = () => {
    setSearchValue("");
    onSearchPress({ title: "" });
  };

  const _setFromDate = (e: ChangeEvent<HTMLInputElement>) => {
    setPayload((prev: any) => ({
      ...prev,
      from: e.target.value,
    }));
  };

  const _setToDate = (e: ChangeEvent<HTMLInputElement>) => {
    setPayload((prev: any) => ({
      ...prev,
      to: e.target.value,
    }));
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

  const _renderSearchBar = () => {
    return (
      <S.ActionItem>
        <S.InputWrapper $bgColor={theme.colors.backGround}>
          {_showDropDown()}
          <S.Input
            type="input"
            placeholder={SALES_CONFIG.search}
            value={searchValue}
            onChange={(e) => {
              _setSearchData(e);
            }}
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

  const _renderDate = () => {
    return (
      <S.Date>
        <S.FromDateContainer>
          <S.DateTitle>{SALES_CONFIG.from}</S.DateTitle>
          <S.DateInput
            type="date"
            value={payload.from}
            onChange={(e) => {
              _setFromDate(e);
            }}
          />
        </S.FromDateContainer>
        <S.ToDateContainer>
          <S.DateTitle>{SALES_CONFIG.to}</S.DateTitle>
          <S.DateInput
            type="date"
            value={payload.to}
            onChange={(e) => {
              _setToDate(e);
            }}
          />
        </S.ToDateContainer>
      </S.Date>
    );
  };

  const _renderActionItems = () => {
    return (
      <S.ActionContainer>
        {_renderDate()}
        {_renderSearchBar()}
      </S.ActionContainer>
    );
  };

  const _renderModeSwitch = () => {
    return (
      <S.HeaderCard $bgColor={theme.colors.secondaryBackGround}>
        <S.HeaderContent>
          <S.HeaderTitle>{SALES_CONFIG.pageTitle}</S.HeaderTitle>
          <S.HeaderSubtitle>{SALES_CONFIG.pageSubtitle}</S.HeaderSubtitle>
        </S.HeaderContent>
        <S.ChipGroup>
          <S.ChipButton
            type="button"
            $isActive={mode === SALES_CONFIG.modes.outgoing}
            $bgColor={theme.colors.primary}
            onClick={() => {
              onModeChange("outgoing");
            }}
          >
            {SALES_CONFIG.chips.outgoing}
          </S.ChipButton>
          <S.ChipButton
            type="button"
            $isActive={mode === SALES_CONFIG.modes.incoming}
            $bgColor={theme.colors.primary}
            onClick={() => {
              onModeChange("incoming");
            }}
          >
            {SALES_CONFIG.chips.incoming}
          </S.ChipButton>
        </S.ChipGroup>
      </S.HeaderCard>
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
        {SALES_CONFIG.sortedOptions.map((item, id) => (
          <div key={id}>
            <S.SortedDropdownItem
              $bgColor={theme.colors.primary}
              eventKey={item}
            >
              <S.SortedIconText>{item}</S.SortedIconText>
            </S.SortedDropdownItem>
            {id !== SALES_CONFIG.sortedOptions.length - 1 && <S.Divider />}
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

  return (
    <>
      {_renderModeSwitch()}
      {_renderActionItems()}
    </>
  );
};
