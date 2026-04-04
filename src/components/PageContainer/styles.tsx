/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import styled from "styled-components";
import { Box } from "@mui/material";

export const StyledPageBox = styled(Box)`
  margin-top: 70px;
  padding: 10px;
  padding-bottom: 0;
  width: 100vw;

  @media (max-width: 768px) {
    margin-top: 80px;
  }

  @media (max-width: 576px) {
    padding: 8px;
    margin-top: 50px;
  }
`;

export const MainContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  padding-bottom: 0;

  @media (max-width: 768px) {
    padding: 8px;
  }

  @media (max-width: 576px) {
    padding: 0;
    margin-top: 15px;
    justify-content: center;
  }
`;
