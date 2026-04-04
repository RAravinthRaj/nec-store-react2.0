/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { Container } from "react-bootstrap";
import styled from "styled-components";

export const MainContainer = styled(Container)`
  height: 100vh;
  padding: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (max-width: 576px) {
    padding: 0;
    justify-content: space-between;
  }
`;

export const ImageCompContainer = styled.div<{ $bgColor: string }>`
  background-color: ${(props) => props?.$bgColor};
  width: 50%;
  height: 100%;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    height: 45%;
  }

  @media (max-width: 576px) {
    width: 100%;
    height: 40%;
    padding: 20px 20px 0 20px;
  }
`;

export const Logo = styled.img`
  height: 90px;
  width: 100px;
  display: block;

  @media (max-width: 768px) {
    height: 70px;
    width: 80px;
  }

  @media (max-width: 576px) {
    height: 40px;
    width: 50px;
  }
`;

export const SignInBgImage = styled.img`
  height: 65%;
  width: 80%;
  align-self: center;
  margin-top: 10%;

  @media (max-width: 768px) {
    height: 75%;
    width: 55%;
    margin-top: 3%;
  }

  @media (max-width: 576px) {
    height: 80%;
    width: 60%;
    margin-top: 1%;
  }
`;
