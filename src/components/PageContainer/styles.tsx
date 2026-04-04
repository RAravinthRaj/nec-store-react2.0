/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import styled from "styled-components";
import { Box } from "@mui/material";

export const StyledPageBox = styled(Box)<{
  $hasSidebar?: boolean;
  $sidebarOpen?: boolean;
}>`
  margin-top: 84px;
  padding: 20px 20px 0;
  padding-bottom: 0;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
  transition:
    width 0.24s ease,
    padding 0.24s ease;

  @media (max-width: 768px) {
    margin-top: 78px;
    padding: 14px 12px 0;
  }

  @media (max-width: 576px) {
    padding: 10px 10px 0;
    margin-top: 64px;
  }
`;

export const MainContainer = styled(Box)`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0 15px 0 0;
  padding-bottom: 0;
  min-height: 100vh;
  box-sizing: border-box;
  background:
    radial-gradient(circle at top left, rgba(32, 124, 201, 0.08), transparent 24%),
    linear-gradient(180deg, #eef3ff 0%, #f8faff 22%, #fdfefe 100%);

  @media (max-width: 768px) {
    padding: 0;
  }

  @media (max-width: 576px) {
    padding: 0;
    margin-top: 0;
    justify-content: flex-start;
  }
`;
