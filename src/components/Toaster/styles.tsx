/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import styled from "styled-components";
import { ToastContainer } from "react-toastify";

export const Toaster = styled(ToastContainer)`
  font-size: 14px;

  @media (max-width: 576px) {
    width: 60%;
    font-size: 12px;
    padding: 5px;
    margin-left: auto;
    margin-top: 5%;
  }
`;
