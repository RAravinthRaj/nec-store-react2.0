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

export const HeaderCard = styled.div<{ $bgColor: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 20px;
  border-radius: 16px;
  margin-bottom: 18px;
  background-color: ${(props) => props.$bgColor};
  box-shadow: 0 4px 18px rgba(15, 23, 42, 0.08);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const HeaderTitle = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: 700;

  @media (max-width: 576px) {
    font-size: 20px;
  }
`;

export const HeaderSubtitle = styled.p`
  margin: 0;
  color: #475569;
  font-size: 14px;
  line-height: 1.5;
`;

export const ChipGroup = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const ChipButton = styled.button<{
  $isActive: boolean;
  $bgColor: string;
}>`
  border: 1px solid
    ${(props) => (props.$isActive ? props.$bgColor : "rgba(15, 23, 42, 0.1)")};
  background: ${(props) => (props.$isActive ? props.$bgColor : "#ffffff")};
  color: ${(props) => (props.$isActive ? "#ffffff" : "#0f172a")};
  border-radius: 999px;
  padding: 10px 18px;
  font-size: 14px;
  font-weight: 600;
`;

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
  gap: 15px;

  @media (max-width: 1024px) {
    flex-direction: column;
    margin-top: 0;

    > * {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 0;
    justify-content: center;
    font-size: 12px;
    gap: 15px;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    margin-top: 0;
    justify-content: center;
    font-size: 12px;
    padding: 0 5px;

    > * {
      width: 100%;
    }
  }
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  outline: none;
  font-size: 16px;
  padding: 0 20px;
  flex: 1;

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
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex: 1;
    width: 100%;
    height: 45px;
  }

  @media (max-width: 576px) {
    padding: 6px;
    height: 40px;
    border-radius: 5px;
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
    padding: 12px;
    gap: 10px;
    font-size: 14px;
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

  @media (max-width: 576px) {
    margin: 0 5px;
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

export const ActionItem = styled.div`
  display: flex;
  flex: 1.5;
  justify-content: center;

  @media (max-width: 576px) {
    flex: 0;
    justify-content: center;
    margin-top: 10px;
  }
`;

export const Date = styled.div`
  flex: 1.5;
  display: flex;
  justify-content: space-between;
  border-radius: 8px;

  @media (max-width: 768px) {
    padding: 0px;
    margin-bottom: 10px;
    gap: 200px;
  }

  @media (max-width: 576px) {
    margin-bottom: 10px;
    gap: 12px;
  }
`;

export const ToDateContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  border-radius: 5px;
  gap: 18px;
  margin: 0 15px;

  @media (max-width: 1024px) {
    margin: 0 15px;
    justify-content: flex-end;
  }

  @media (max-width: 768px) {
    gap: 8px;
    margin: 0;
  }

  @media (max-width: 576px) {
    flex-direction: row;
  }
`;

export const FromDateContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  border-radius: 5px;
  gap: 18px;
  margin: 0 15px;

  @media (max-width: 1024px) {
    margin: 0 15px;
    justify-content: flex-start;
  }

  @media (max-width: 768px) {
    gap: 8px;
    margin: 0;
  }

  @media (max-width: 576px) {
    flex-direction: row;
  }
`;

export const DateTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const DateInput = styled.input`
  background: transparent;
  border: none;
  border-bottom: 1px solid #bdbdbd;
  outline: none;
  padding: 5px 0;
  font-size: 16px;
  transition: all 0.3s ease;
  min-width: 80px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const SearchButton = styled.button`
  background-color: white;
  border: none;
`;
