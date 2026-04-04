/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import styled from "styled-components";
import { RxCrossCircled } from "react-icons/rx";
import { GiShoppingCart } from "react-icons/gi";

export const Button = styled.button<{ $bgColor: string; $canEdit: boolean }>`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 10px 10px;
  justify-content: center;
  border: none;
  background-color: ${(props) => props?.$bgColor};
  opacity: ${(props) => (props.$canEdit ? "1" : "0.4")};
  pointer-events: ${(props) => (props.$canEdit ? "auto" : "none")};
  border-radius: 5px;
  gap: 10px;
  color: white;
  text-decoration: none;

  @media (max-width: 576px) {
    padding: 10px 8px;
    font-size: 12px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;

  @media (max-width: 768px) {
    max-height: 67vh;
  }

  @media (max-width: 576px) {
  }
`;

export const TitleBox = styled.div<{ $bgColor: string }>`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: ${(props) => props.$bgColor};
  padding: 18px 15px;
  border-radius: 5px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
  min-width: 640px;
  position: sticky;
  top: 0;
  z-index: 1;

  @media (max-width: 576px) {
    min-width: 640px;
  }
`;

export const ItemBox = styled.div<{
  isOddIndex: boolean;
}>`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px 10px;
  border-radius: 10px;
  margin: 5px 0px;
  min-width: 600px;
  background-color: ${(props) =>
    props.isOddIndex ? "rgba(160, 196, 255, 0.12)" : ""};

  @media (max-width: 576px) {
    min-width: 640px;
  }
`;

export const TitleComp = styled.div`
  flex: 1;
  text-align: center;
  white-space: normal;
  overflow-wrap: break-word;
  word-break: break-word;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 8px;

  @media (max-width: 576px) {
    font-size: 13px;
  }
`;

export const CancelComp = styled(RxCrossCircled)<{ $bgColor: string }>`
  color: ${(props) => props?.$bgColor};
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  cursor: pointer;
`;

export const Icon = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
  color: #ffffff;

  &:hover {
    background: none;
  }

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const BodyComponent = styled.div``;

export const UserContainer = styled.div`
  margin-top: 28px;
  max-height: 68vh;
  margin-bottom: 20px;
  overflow-x: auto;
  overflow-y: auto;

  @media (max-width: 768px) {
    max-height: 100vh;
    margin-top: 35px;
  }

  @media (max-width: 576px) {
    margin-bottom: 20px;
  }
`;

export const UserDivider = styled.div`
  border: solid 0.5px rgba(0, 0, 0, 0.2);
  transform: scaleY(0.9);
  min-width: 500px;
  margin: 0px 7px;

  @media (max-width: 768px) {
    margin: 0px 20px;
    min-width: 560px;
  }

  @media (max-width: 576px) {
    margin: 0px 7px;
    min-width: 620px;
  }
`;

export const DownloadIcon = styled(GiShoppingCart)`
  color: white;
  font-size: 22px;
`;

export const Circle = styled.div<{
  $bgColor: string;
  $isNotFirst: boolean;
  $textColor: string;
}>`
  height: 40px;
  width: 40px;
  background-color: ${(props) => props?.$bgColor};
  border-radius: 50%;
  margin-left: ${(props) => (props.$isNotFirst ? "-10px" : "0px")};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props?.$textColor};
  font-weight: bold;

  @media (max-width: 576px) {
    height: 30px;
    width: 30px;
    margin-left: ${(props) => (props.$isNotFirst ? "-8px" : "0px")};
  }
`;

export const UserComponent = styled.div<{
  isOddIndex: boolean;
  $bgColor: string;
}>``;
