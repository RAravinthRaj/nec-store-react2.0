/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import styled from "styled-components";
import { SlArrowDown } from "react-icons/sl";
import { Dropdown } from "react-bootstrap";
import { ImSortAlphaAsc } from "react-icons/im";
import { IoIosSearch } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

export const ToolbarCard = styled.section`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 22px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 16px 34px rgba(15, 23, 42, 0.05);

  @media (max-width: 576px) {
    padding: 0;
    background: transparent;
    border: none;
    box-shadow: none;
  }
`;

export const ToolbarCopy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 576px) {
    display: none;
  }
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
  font-size: clamp(1.35rem, 2vw, 1.9rem);
  line-height: 1.08;
  letter-spacing: -0.04em;
`;

export const ToolbarSubtitle = styled.p`
  margin: 0;
  color: #475569;
  font-size: 14px;
  line-height: 1.7;
`;

export const ActionItem = styled.div`
  display: flex;
  flex: 1;
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
  gap: 16px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: stretch;
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
  height: 56px;
  border-radius: 18px;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  border: 1px solid rgba(15, 23, 42, 0.12);
  background: rgba(255, 255, 255, 0.96);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.8);

  @media (max-width: 768px) {
    flex: 1;
    height: 45px;
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
  flex: 1;
  justify-content: center;

  @media (max-width: 768px) {
    justify-content: flex-end;
    flex: 0.09;
  }

  @media (max-width: 576px) {
    flex: 0.1;
    justify-content: flex-end;
    margin: 0 8px;
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
  font-size: clamp(10px, 0.9vw, 13px);
`;

export const IconText = styled.div<{ $bgColor: string }>`
  color: ${(props) => props.$bgColor};
  font-size: clamp(12px, 0.95vw, 14px);

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const CategoryDropDownMenu = styled(Dropdown.Menu)`
  margin-top: 10px;
`;

export const OrderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  margin-top: 30px;
  padding: 10px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 35px;
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
`;

export const SearchIcon = styled(IoIosSearch)`
  font-size: clamp(17px, 1.45vw, 22px);
`;

export const ClearIcon = styled(RxCross2)`
  color: black;
  font-size: clamp(17px, 1.45vw, 22px);
`;
