/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { styled } from "styled-components";
import { PiClockCounterClockwise } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { LiaCartArrowDownSolid } from "react-icons/lia";

export const RecentIcon = styled(PiClockCounterClockwise)`
  font-size: 28px;
  color: #000000;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    color 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    font-size: 30px;
  }

  @media (max-width: 576px) {
    font-size: 23px;
  }
`;

export const CloseButton = styled(RxCross2)`
  color: #000000;
  border: none;
  font-size: 38px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 576px) {
    font-size: 20px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin: 20px;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 10px;

  @media (max-width: 768px) {
    margin: 15px;
  }

  @media (max-width: 576px) {
    margin: 12px;
    padding: 15px;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 10px;
  background: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    border-radius: inherit;
  }

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }

  @media (max-width: 576px) {
    width: 120px;
    height: 120px;
  }
`;

export const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h3`
  font-size: 20px;
  word-wrap: break-word;

  @media (max-width: 576px) {
    font-size: 18px;
  }
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  font-size: 14px;
  gap: 5px;

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const ActionButton = styled.button`
  margin-top: 12px !important;
  width: 120px;
`;

export const DrawerTitle = styled.div`
  flex-grow: 1;
  text-align: center;
  font-weight: 600;
  font-size: 18px;
  color: #000;
  letter-spacing: 0.5px;
  padding: 0 16px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const Button = styled.button<{ $bgColor: string }>`
  background-color: ${(props) => props?.$bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border: none;
  height: 40px;
  margin: 10px 0 0 0;
  padding: 10px;
  outline: none;
  font-size: 13px;
  letter-spacing: 0.6px;
  text-align: center;
  font-weight: 600;
  border-radius: 7px;
  cursor: pointer;
  gap: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition:
    box-shadow 0.3s ease,
    transform 0.2s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    height: 45px;
    width: 50%;
    margin: 20px 0 0 0;
  }

  @media (max-width: 576px) {
    height: 35px;
    width: 80%;
    margin: 15px 0 0 0;
    font-size: 12px;
  }
`;

export const CategoryContainer = styled.h5<{ $bgColor: string }>`
  color: ${(props) => props.$bgColor};
  font-size: 14px;
  margin: 5px 0 15px 0;

  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

export const CartIcon = styled(LiaCartArrowDownSolid)`
  color: white;
  font-size: 20px;

  @media (max-width: 576px) {
    font-size: 16px;
  }
`;
