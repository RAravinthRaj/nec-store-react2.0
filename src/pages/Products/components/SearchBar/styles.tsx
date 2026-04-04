/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import styled from "styled-components";
import { FiPlus } from "react-icons/fi";
import { SlArrowDown } from "react-icons/sl";
import { Dropdown } from "react-bootstrap";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { ImSortAlphaAsc } from "react-icons/im";
import Badge from "@mui/material/Badge";

export const ActionItem = styled.div`
  display: flex;
  flex: 1.5;
  justify-content: center;

  @media (max-width: 576px) {
    margin: 0 7px;
    justify-content: center;
    flex: 1;
    margin-top: 10px;
  }
`;

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

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
  padding: 0 15px;

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
    width: 100%;
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
  flex: 1;
  justify-content: center;

  @media (max-width: 768px) {
    justify-content: flex-end;
    flex: 0.09;
  }

  @media (max-width: 576px) {
    flex: 0.1;
    justify-content: flex-end;
    margin-left: 8px;
  }
`;

export const SortIcon = styled(ImSortAlphaAsc)<{
  $bgColor: string;
}>`
  color: black;
  font-size: 30px;

  @media (max-width: 768px) {
    align-self: flex-end;
  }

  @media (max-width: 576px) {
    font-size: 25px;
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
    font-size: 12px;
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

export const ButtonContainer = styled.div`
  flex: 0.8;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-left: 10px;
`;

export const Button = styled.button<{ $bgColor: string }>`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 10px 0;
  justify-content: center;
  border: none;
  background-color: ${(props) => props?.$bgColor};
  border-radius: 5px;
  gap: 10px;
  color: white;

  @media (max-width: 576px) {
    padding: 5px 0;
    gap: 10px;
  }
`;

export const AddIcon = styled(FiPlus)`
  color: white;
  font-size: 18px;
`;

export const FabAddIcon = styled(FiPlus)`
  color: black;
  font-size: 18px;
`;

export const PlusButtonContainer = styled(FiPlus)<{ $bgColor: string }>`
  color: white;
  padding: 5px;
  font-size: 50px;
  height: 40px;
  width: 40px;
  background-color: ${(props) => props?.$bgColor};
  border-radius: 50%;
  position: fixed;
  bottom: 40px;
  right: 40px;
  cursor: pointer;
  z-index: 1000;

  @media (max-width: 768px) {
    height: 45px;
    width: 45px;
    padding: 10px;
    font-size: 40px;
  }

  @media (max-width: 576px) {
    font-size: 30px;
    bottom: 30px;
    right: 30px;
    height: 40px;
    width: 40px;
    padding: 10px;
    font-size: 30px;
  }
`;

export const FabDivider = styled.div`
  border-top: 0.2px solid rgba(0, 0, 0, 0.2);
  margin: 4px 10px;

  @media (max-width: 576px) {
    width: 95%;
    margin-left: 5px;
    margin-top: -7px;
    margin-bottom: 6px;
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
    font-size: 13px;
  }
`;

export const CategoryDropDownMenu = styled(Dropdown.Menu)`
  margin-top: 10px;

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 15px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    margin-top: 20px;
    grid-template-columns: repeat(1, 1fr);
  }
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

export const FixedMenu = styled(Menu)<{ $bgColor: string }>`
  & .MuiPaper-root {
    left: auto !important;
    right: 110px !important;
    top: 85% !important;
    border-radius: 10px;
    transform: none !important;
    overflow: visible;
    filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.32));
    padding: 0 5px;
    background-color: ${(props) => props?.$bgColor};
    color: black;

    &::before {
      content: "";
      position: absolute;
      left: 100%;
    }
  }

  @media (max-width: 576px) {
    & .MuiPaper-root {
      right: 80px !important;
      bottom: 20% !important;
      height: 75px !important;
      width: 150px !important;
      padding: 5px !important;
    }
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  display: flex;
  align-items: center;
  padding: 0 15px;
  font-size: 14px;
  gap: 10px;

  @media (max-width: 576px) {
    margin-top: -15px !important;
    font-size: 13px !important;
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
    box-shadow:
      0 2px 6px rgba(0, 86, 210, 0.5),
      inset 0 0 4px rgba(255, 255, 255, 0.4);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
    transition: transform 0.2s ease-in-out;
  }
`;

export const CartButton = styled(IconButton)`
  position: relative;
  z-index: 10;
  width: 45px;
  height: 45px;
  background: linear-gradient(145deg, #ffffff, #f5f5f5);
  border: 2px solid #000000 !important;
  border-radius: 50%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow:
    0 3px 6px rgba(0, 0, 0, 0.08),
    inset 0 -2px 4px rgba(255, 255, 255, 0.7);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: linear-gradient(145deg, #fdfdfd, #f0f0f0);
    transform: scale(1.1);
    box-shadow:
      0 5px 12px rgba(0, 0, 0, 0.15),
      inset 0 -3px 6px rgba(255, 255, 255, 0.8);
  }

  svg {
    font-size: 26px;
    color: #1a1a1a;
    transition:
      color 0.25s ease,
      filter 0.25s ease;
  }
`;
