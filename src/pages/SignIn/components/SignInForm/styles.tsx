import styled from "styled-components";
import { GoMail } from "react-icons/go";

export const FormMainContainer = styled.div`
  width: 40%;
  height: 100%;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-item: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
  }

  @media (max-width: 576px) {
    width: 100%;
    height: 60%;
    justify-content: flex-start;
  }
`;

export const HeaderContainer = styled.div`
  margin-bottom: 7%;

  @media (max-width: 768px) {
    margin-bottom: 5%;
  }

  @media (max-width: 576px) {
    margin-bottom: 2%;
  }
`;

export const HeaderTitle = styled.h1`
  font-weight: semi-bold;
  letter-spacing: 1px;
`;

export const HeaderSubtitle = styled.p<{ $textColor: string }>`
  color: ${(props) => props?.$textColor};
  font-size: 15px;
  letter-spacing: 0.4px;
`;

export const InputWrapper = styled.div<{ $bgColor: string; $active: boolean }>`
  width: 90%;
  margin-bottom: 25px;
  height: 50px;
  background-color: ${(props) => props.$bgColor};
  border-radius: 7px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  opacity: ${(props) => (props.$active ? 1 : 0.5)};

  @media (max-width: 576px) {
    width: 100%;
    height: 45px;
  }

  @media (max-width: 576px) {
    margin-bottom: 20px;
  }
`;

export const MailIcon = styled(GoMail)<{ $bgColor: string }>`
  color: ${(props) => props?.$bgColor};
  font-size: 20px;
  margin-right: 15px;
  margin-top: 1px;
`;

export const EmailInput = styled.input`
  background: transparent;
  border: none;
  outline: none;
  font-size: 16px;
  flex: 1;
`;

export const Button = styled.button<{ $bgColor: string }>`
  background-color: ${(props) => props?.$bgColor};
  color: white;
  border: none;
  width: 90%;
  height: 45px;
  padding: 10px;
  outline: none;
  font-size: 16px;
  letter-spacing: 0.6px;
  text-align: center;
  font-weight: 600;
  border-radius: 7px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease, transform 0.2s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    transform: translateY(-2px);
  }

  @media (max-width: 576px) {
    width: 100%;
    height: 45px;
  }
`;

export const ResendContainer = styled.div`
  width: 90%;
  margin: 10px 0 25px 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 576px) {
    width: 100%;
  }

  @media (max-width: 576px) {
    margin: 10px 0 20px 0;
  }
`;

export const Resend = styled.div`
  font-size: 16px;
`;

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 20px 0 0 0;
  width: 90%;

  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const SignUpSubText = styled.div<{ $textColor: string }>`
  color: ${(props) => props?.$textColor};
`;

export const SignUpBold = styled.h6<{ $textColor: string }>`
  color: ${(props) => props?.$textColor};
  position: relative;
  display: inline-block;
  cursor: pointer;
  padding-bottom: 3px;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 0;
    background-color: ${(props) => props?.$textColor};
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;
