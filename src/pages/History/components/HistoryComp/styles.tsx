/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import styled from "styled-components";

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 18px 0 34px;
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
  padding: 18px 20px;
  border-radius: 22px;
  background: linear-gradient(135deg, rgba(4, 36, 200, 0.05), rgba(255, 255, 255, 0.96));
  border: 1px solid rgba(15, 23, 42, 0.08);
`;

export const DateContainer = styled.div`
  color: #0f172a;
  font-size: 16px;
  font-weight: 800;
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
  gap: 14px;
  margin-top: 10px;
  padding: 6px 4px 12px;
`;
