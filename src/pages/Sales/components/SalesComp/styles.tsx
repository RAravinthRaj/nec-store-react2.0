/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import styled from "styled-components";

export const Divider = styled.div`
  border-top: 0.2px solid rgba(0, 0, 0, 0.2);
  margin: 4px 10px;
`;

export const TitleBox = styled.div<{ $bgColor: string }>`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: ${(props) => props?.$bgColor};
  padding: 18px 15px;
  border-radius: 10px;
  margin-bottom: 10px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
  min-width: 620px;
  position: sticky;
  top: 0;
  z-index: 1;

  @media (max-width: 576px) {
    min-width: 640px;
    font-size: 13px;
    padding: 13px;
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

export const SalesContainer = styled.div`
  margin-top: 30px;
  overflow-x: auto;
  overflow-y: auto;

  @media (max-width: 768px) {
    max-height: 100vh;
  }

  @media (max-width: 576px) {
    margin-bottom: 40px;
  }
`;

export const SalesDivider = styled.div`
  border: solid 0.5px rgba(0, 0, 0, 0.2);
  transform: scaleY(0.9);
  min-width: 500px;
  margin: 5px;

  @media (max-width: 768px) {
    margin: 10px 20px;
    min-width: 560px;
  }

  @media (max-width: 576px) {
    margin: 7px 7px;
    min-width: 620px;
  }
`;

export const ImageWrap = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 8px;
`;
