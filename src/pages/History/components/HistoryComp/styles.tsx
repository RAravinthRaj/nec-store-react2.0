/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import styled from "styled-components";

export const OrderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 24px;
  margin: 16px 0 30px;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 834px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Divider = styled.div`
  border-top: 0.2px solid rgba(0, 0, 0, 0.2);
  margin: 4px 10px;
`;

export const OrderTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 8px;
`;

export const DateContainer = styled.div`
  color: #0f172a;
  font-size: 15px;
  font-weight: 700;
  white-space: nowrap;
`;

export const Line = styled.div`
  flex: 1;
  min-width: 40px;
  height: 1px;
  background: rgba(148, 163, 184, 0.35);
`;

export const SeparateOrder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 24px;
  padding: 6px 4px 12px;
`;
