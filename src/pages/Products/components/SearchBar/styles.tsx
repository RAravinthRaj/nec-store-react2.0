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
import { IoIosSearch } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { PiShoppingCart } from "react-icons/pi";

export const ToolbarCard = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0;
  border-radius: 0;
  background: transparent;
  border: none;
  box-shadow: none;

  @media (max-width: 768px) {
    padding: 0;
    border-radius: 0;
    background: transparent;
    border: none;
    box-shadow: none;
  }
`;

export const ToolbarHeader = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(230px, 0.8fr);
  gap: 18px;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const ToolbarCopy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ToolbarEyebrow = styled.span`
  width: fit-content;
  padding: 7px 12px;
  border-radius: 999px;
  background: rgba(4, 36, 200, 0.08);
  color: #0424c8;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const ToolbarTitle = styled.h2`
  margin: 0;
  color: #0f172a;
  font-size: clamp(1.4rem, 2vw, 2rem);
  line-height: 1.08;
  letter-spacing: -0.04em;
`;

export const ToolbarSubtitle = styled.p`
  margin: 0;
  color: #475569;
  font-size: 14px;
  line-height: 1.7;
`;

export const UtilityPanel = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
`;

export const UtilityMetric = styled.div`
  padding: 16px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(15, 23, 42, 0.08);
`;

export const UtilityLabel = styled.div`
  color: #64748b;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const UtilityValue = styled.div`
  margin-top: 10px;
  color: #0f172a;
  font-size: 26px;
  font-weight: 800;
  letter-spacing: -0.05em;
`;

export const ActionItem = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  min-width: 0;

  @media (max-width: 576px) {
    justify-content: center;
    flex: 1;
  }
`;

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 900px) {
    flex-direction: row;
    align-items: center;
  }

  @media (max-width: 576px) {
    gap: 10px;
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
  flex: 1;
  height: 58px;
  border-radius: 18px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  border: 1px solid rgba(15, 23, 42, 0.12);
  background: #ffffff;
  box-shadow: none;

  @media (max-width: 768px) {
    flex: 1;
    height: 52px;
    width: 100%;
  }

  @media (max-width: 576px) {
    flex: 1;
    padding: 6px 10px;
    height: 42px;
    border-radius: 12px;
    width: 100%;
    margin: 0;
  }
`;

export const SortContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  justify-content: center;

  @media (max-width: 900px) {
    justify-content: flex-end;
  }

  @media (max-width: 576px) {
    justify-content: flex-end;
  }
`;

export const SortIcon = styled(ImSortAlphaAsc)<{
  $bgColor: string;
}>`
  color: black;
  font-size: clamp(20px, 2vw, 30px);

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
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  @media (max-width: 900px) {
    width: auto;
    justify-content: flex-end;
  }

  @media (max-width: 576px) {
    display: none;
  }
`;

export const Button = styled.button<{ $bgColor: string }>`
  min-width: 180px;
  display: flex;
  align-items: center;
  padding: 14px 18px;
  justify-content: center;
  border: 1px solid transparent;
  background: ${(props) => props?.$bgColor};
  border-radius: 16px;
  gap: 10px;
  color: white;
  font-size: 14px;
  font-weight: 700;
  box-shadow: none;

  @media (max-width: 900px) {
    flex: 1;
  }

  @media (max-width: 576px) {
    width: 100%;
    min-width: 0;
    padding: 13px 16px;
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
  background: rgba(248, 250, 252, 0.92);
  border: none;
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 10px 12px;
  margin: 0 8px 0 0;
  border-radius: 14px;
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
  font-size: clamp(10px, 0.9vw, 13px);
`;

export const IconText = styled.div<{ $bgColor: string }>`
  color: ${(props) => props.$bgColor};
  font-size: clamp(12px, 0.95vw, 14px);

  @media (max-width: 576px) {
    font-size: 13px;
  }
`;

export const CategoryDropDownMenu = styled(Dropdown.Menu)`
  margin-top: 10px;
  border-radius: 16px;
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 18px 38px rgba(15, 23, 42, 0.08);

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
  width: clamp(32px, 2.8vw, 40px);
  height: clamp(32px, 2.8vw, 40px);
  background: linear-gradient(135deg, #0f172a, #1e293b);
  border: none;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 576px) {
    width: 32px;
    height: 32px;
  }
`;

export const SearchIcon = styled(IoIosSearch)`
  font-size: clamp(17px, 1.45vw, 22px);
`;

export const ClearIcon = styled(RxCross2)`
  color: black;
  font-size: clamp(17px, 1.45vw, 22px);
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
  border: 1px solid rgba(15, 23, 42, 0.12) !important;
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
    font-size: clamp(18px, 1.8vw, 26px);
    color: #1a1a1a;
    transition:
      color 0.25s ease,
      filter 0.25s ease;
  }
`;

export const CartActionIcon = styled(PiShoppingCart)`
  font-size: clamp(18px, 1.8vw, 26px);
`;
