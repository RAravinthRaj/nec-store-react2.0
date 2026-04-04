/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import styled from "styled-components";

export const OrderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin: 30px 0;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 834px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 5px;
  }
`;

export const Divider = styled.div`
  border-top: 0.2px solid rgba(0, 0, 0, 0.2);
  margin: 4px 10px;
`;

export const OrderTitle = styled.div`
  display: flex;
  align-items: center;
`;

export const DateContainer = styled.div`
  font-size: 20px;
`;

export const Line = styled.div`
  width: 89%;
  margin-left: 20px;
  height: 1.5px;
  background-image: repeating-linear-gradient(
    to right,
    rgba(0, 0, 0, 0.2) 0px 8px,
    transparent 8px 16px
  );
`;

export const SeparateOrder = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  padding: 10px;
`;
