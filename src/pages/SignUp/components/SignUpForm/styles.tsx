import styled from "styled-components";
import { GoMail } from "react-icons/go";
import { HiOutlineUser } from "react-icons/hi2";
import { LiaUniversitySolid } from "react-icons/lia";
import { SlBadge } from "react-icons/sl";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

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

export const InputWrapper = styled.div<{ $bgColor: string }>`
  width: 90%;
  margin-bottom: 25px;
  height: 50px;
  background-color: ${(props) => props.$bgColor};
  border-radius: 7px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 20px;

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
  margin-top: 1px;
`;

export const UserIcon = styled(HiOutlineUser)<{ $bgColor: string }>`
  color: ${(props) => props?.$bgColor};
  font-size: 20px;
  margin-top: 1px;
`;

export const RollNumberIcon = styled(SlBadge)<{ $bgColor: string }>`
  color: ${(props) => props?.$bgColor};
  font-size: 20px;
`;

export const DepartmentIcon = styled(LiaUniversitySolid)<{ $bgColor: string }>`
  color: ${(props) => props?.$bgColor};
  font-size: 24px;
  margin-top: 1px;
`;

export const Input = styled.input`
  flex: 0.5;
  background: transparent;
  border: none;
  outline: none;
  font-size: 16px;
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

export const SignInContainer = styled.div`
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

export const SignInSubText = styled.div<{ $textColor: string }>`
  color: ${(props) => props?.$textColor};
`;

export const SignInBold = styled.h6<{ $textColor: string }>`
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
    height: 2px; /* Thickness of the underline */
    width: 0;
    background-color: ${(props) => props?.$textColor};
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const StyledFormControl = styled(FormControl)`
  border-radius: 7px;
  border: none;
  height: 45px;
  max-height: 45px;
  margin-left: -50px;
  width: 100%;
  color: white;
  padding: 0 !important;

  .MuiOutlinedInput-root {
    height: 100%;
    border: none !important;

    &:hover {
      border: none !important;
    }

    &.Mui-focused {
      border: none !important;
    }

    fieldset {
      border: none !important;
    }
  }
`;

export const StyledSelect = styled(Select)`
  width: 100%;
  margin-left: -9px;
`;
