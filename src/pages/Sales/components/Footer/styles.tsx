/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import styled from "styled-components";
import { LiaDownloadSolid } from "react-icons/lia";

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

export const FooterContent = styled.div`
  flex: 1;

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const FooterBox = styled.div<{ $bgColor: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${(props) => props?.$bgColor};
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 20px;
    margin-bottom: 10px;
  }
`;

export const DownloadIcon = styled(LiaDownloadSolid)`
  color: white;
  font-size: 21px;
`;
