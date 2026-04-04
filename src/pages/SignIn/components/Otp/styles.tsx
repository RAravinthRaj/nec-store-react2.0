/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import styled from "styled-components";

export const OtpContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 20px 0 0 0;
  height: 50px;

  @media (max-width: 768px) {
    margin: 0;
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const OtpInput = styled.input<{
  $bgColor: string;
  $activeColor: string;
}>`
  width: 13%;
  height: 95%;
  font-size: 16px;
  text-align: center;
  background-color: ${(props) => props?.$bgColor};
  border-radius: 5px;
  outline: none;
  border: none;
  transition: all 0.3s ease;

  &:focus {
    box-shadow: 0 0 2px;
    border: 0.5px solid ${(props) => props?.$activeColor};
  }

  @media (max-width: 576px) {
    height: 85%;
  }
`;
