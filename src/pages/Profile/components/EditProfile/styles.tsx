/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import { RxCross2 } from "react-icons/rx";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const ModalContainer = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 92vh;
  margin-top: 35px !important;

  @media (max-width: 576px) {
    max-height: 92vh;
    margin-top: 25px !important;
    .modal-dialog {
      padding: 13px !important;
      justify-content: center;
    }
  }
`;

export const Title = styled(Modal.Title)`
  margin: 0 auto;

  media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Header = styled(Modal.Header)``;

export const CloseButton = styled(RxCross2)`
  position: absolute;
  right: 0.2%;
  transform: translateY(-155%);
  background: none;
  border: none;
  font-size: 34px;
  cursor: pointer;
  color: white;
  z-index: 2000;

  media (max-width: 768px) {
    transform: translateY(-170%);
  }

  @media (max-width: 576px) {
    transform: translateY(-190%);
    font-size: 25px;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 25px;
  border-radius: 7px;
  padding: 10px 20px;
  display: flex;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  align-items: center;

  @media (max-width: 576px) {
    padding: 8px 15px;
  }
`;

export const Input = styled.input`
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: inner-spin-button !important;
    appearance: inner-spin-button !important;
    opacity: 1 !important;
    display: block !important;
    height: 1.4em;
    width: 1.4em;
  }
  margin-right: -5px;

  -moz-appearance: textfield;

  &:focus {
    -moz-appearance: number-input;
  }

  background: transparent;
  border: none;
  outline: none;
  font-size: 16px;
  flex: 1;

  @media (max-width: 576px) {
    font-size: 14px;
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: inner-spin-button !important;
      appearance: inner-spin-button !important;
      opacity: 1 !important;
      display: block !important;
      margin-top: 9%;
      height: 1.1em;
      width: 1.1em;
    }
  }
`;

export const Icon = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
  color: #ffffff;

  &:hover {
    background: none;
  }

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const Button = styled.button<{ $bgColor: string }>`
  background-color: ${(props) => props?.$bgColor};
  color: white;
  border: none;
  width: 60%;
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
    width: 85%;
    height: 45px;
  }
`;

export const Footer = styled(Modal.Footer)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledFormControl = styled(FormControl)`
  border-radius: 7px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  border: none;
  height: 45px;
  max-height: 45px;

  .MuiOutlinedInput-root {
    border-radius: 7px;
    height: 100%;
    border: none !important;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0);

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

export const Divider = styled.div`
  border-top: 0.2px solid rgba(0, 0, 0, 0.2);
  margin: 4px 10px;
`;

export const StyledSelect = styled(Select)`
  width: 100%;
  margin-left: -9px;
`;

export const ProductImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

export const ImageWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const PreviewProductImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const CancelButton = styled.button`
  position: absolute;
  top: -8px;
  right: -8px;
  background: #ff4d4f;
  color: white;
  border: none;
  border-radius: 50%;
  width: 22px;
  height: 22px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #d9363e;
  }
`;
export const SubTitle = styled.div`
  font-size: 15px;
`;

export const FileTypesHint = styled.span`
  display: inline-block;
  margin-left: 8px;
  padding: 2px 8px;
  background-color: #f0f4f8;
  color: #3a3a3a;
  font-size: 0.85em;
  border-radius: 6px;
`;

export const RemoveButton = styled.button`
  position: absolute;
  background: #ff4d4f;
  color: white;
  border: none;
  border-radius: 5px;
  width: 50px;
  height: 22px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  margin-top: 5px;
`;
