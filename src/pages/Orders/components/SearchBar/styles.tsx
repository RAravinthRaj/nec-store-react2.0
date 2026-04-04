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
  margin-top: 5px;

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
    margin: 0 8px;
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
  background-color: white;
  border: none;
`;
