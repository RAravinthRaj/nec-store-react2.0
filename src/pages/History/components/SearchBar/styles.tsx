/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import styled from "styled-components";
import { SlArrowDown } from "react-icons/sl";
import { Dropdown } from "react-bootstrap";
import { PiShoppingCartBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import { ImSortAlphaAsc } from "react-icons/im";
import { IconButton } from "@mui/material";
import Badge from "@mui/material/Badge";

export const ActionItem = styled.div`
  display: flex;
  flex: 1.5;
  justify-content: center;

  @media (max-width: 576px) {
    justify-content: center;
    flex: 1;
    margin-top: 10px;
  }
`;

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  justify-content: space-between;

  @media (max-width: 576px) {
    margin: 0;
    justify-content: center;
    font-size: 12px;
    gap: 8px;
  }
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  outline: none;
  font-size: 16px;
  padding: 0 5px;

  flex: 1;
  width: 100%;

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const ClearButton = styled.button`
  background: transparent;
  border: none;
  color: #64748b;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 6px;
`;

export const InputWrapper = styled.div<{ $bgColor: string }>`
  flex: 8;
  height: 50px;
  border-radius: 7px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  border: solid 1px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex: 1;
    height: 45px;
  }

  @media (max-width: 576px) {
    flex: 1;
    padding: 6px 10px;
    height: 40px;
    border-radius: 5px;
    width: 100%;
    margin: 0;
  }
`;

export const SortContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 0.6;
  margin-left: 30px;

  @media (max-width: 768px) {
    justify-content: flex-end;
    flex: 0;
  }

  @media (max-width: 576px) {
    flex: 0.08;
    justify-content: flex-end;
  }
`;

export const SortIcon = styled(ImSortAlphaAsc)<{
  $bgColor: string;
}>`
  color: black;
  font-size: 30px;

  @media (max-width: 768px) {
    align-self: flex-end;
    font-size: 25px;
  }

  @media (max-width: 576px) {
    align-self: flex-end;
    margin-left: -20px;
    font-size: 30px;
  }
`;

export const SortedDropdownMenu = styled(Dropdown.Menu)<{ $bgColor: string }>`
  background-color: ${(props) => props?.$bgColor};
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.1);
  margin-right: 10px;
`;

export const SortedIconText = styled.div`
  font-size: 16px;

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const SortedDropdownItem = styled(Dropdown.Item)<{ $bgColor: string }>`
  font-size: 17px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  &:hover {
    background: none;
    ${SortedIconText} {
      color: ${(props) => props?.$bgColor};
    }
  }
`;

export const CustomToggle = styled(Dropdown.Toggle)<{ $bgColor: string }>`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 7px;

  padding: 0;
  margin: 0;
  --bs-btn-active-bg: none;
  --bs-btn-hover-bg: none;

  &::after {
    display: none;
  }
`;

export const CustomDropdown = styled(Dropdown)``;

export const DropDownIcon = styled(SlArrowDown)<{
  $bgColor: string;
}>`
  color: black;
  font-size: 13px;
`;

export const IconText = styled.div<{ $bgColor: string }>`
  color: ${(props) => props.$bgColor};

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const CategoryDropDownMenu = styled(Dropdown.Menu)`
  margin-top: 10px;
`;

export const DropdownMenu = styled(Dropdown.Menu)<{ $bgColor: string }>`
  background-color: ${(props) => props?.$bgColor};
  width: 200px;

  @media (max-width: 768px) {
    width: 180px;
  }
`;

export const Divider = styled.div`
  border-top: 0.2px solid rgba(0, 0, 0, 0.2);
  margin: 4px 10px;
`;

export const CartContainer = styled(Link)<{ $bgColor: string }>`
  padding: 10px;
  border-radius: 50%;
  background-color: ${(props) => props?.$bgColor};
  border: solid 2px black;

  @media (max-width: 768px) {
    padding: 13px 9px;
  }

  @media (max-width: 576px) {
    padding: 13px 9px;
  }
`;

export const CartIcon = styled(PiShoppingCartBold)`
  flex: 1;
  color: black;
  font-size: 25px;

  @media (max-width: 576px) {
    flex: 1;
  }
`;

export const CartItemsCount = styled.div<{
  $bgColor: string;
  $isMobile: boolean;
}>`
  background-color: ${(props) => props?.$bgColor};
  position: relative;
  border: solid 1px white;
  top: ${(props) => (!props.$isMobile ? "-21px" : "-43px")};
  left: ${(props) => (!props.$isMobile ? "-20px" : "28px")};
  padding: 4px;
  border-radius: 50%;
  display: flex;
  flex-wrap: wrap;
  width: fit-content;
  align-items: center;
  justify-content: center;

  @media (max-width: 576px) {
    padding: 1px 3px;
  }
`;

export const Count = styled.div<{ $bgColor: string }>`
  color: ${(props) => props?.$bgColor};
  font-size: 12px;
  height: 15px;
  width: 12px;
  margin: 0 2px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 10px;
  }

  @media (max-width: 576px) {
    font-size: 10px;
    margin: 2px;
  }
`;

export const SearchButton = styled.button`
  background-color: white;
  border: none;
`;

export const StyledBadge = styled(Badge)<{ $bgColor: string }>`
  & .MuiBadge-badge {
    right: -3px !important;
    top: -5px !important;
    background: ${(props) => props?.$bgColor};
    color: white;
    font-weight: 600;
    font-size: 12px;
    height: 23px;
    width: 23px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1.5px solid white; /* cleaner than black for contrast */
    box-shadow: 0 2px 6px rgba(0, 86, 210, 0.5),
      inset 0 0 4px rgba(255, 255, 255, 0.4);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
    transition: transform 0.2s ease-in-out;
  }
`;

export const CartButton = styled(IconButton)`
  width: 45px;
  height: 45px;
  background: linear-gradient(145deg, #ffffff, #f5f5f5);
  border: 2px solid #000000 !important;
  border-radius: 50%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.08),
    inset 0 -2px 4px rgba(255, 255, 255, 0.7);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: linear-gradient(145deg, #fdfdfd, #f0f0f0);
    transform: scale(1.1);
    box-shadow: 0 5px 12px rgba(0, 0, 0, 0.15),
      inset 0 -3px 6px rgba(255, 255, 255, 0.8);
  }

  svg {
    font-size: 26px;
    color: #1a1a1a;
    transition: color 0.25s ease, filter 0.25s ease;
  }
`;
