/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import { RxCross2 } from "react-icons/rx";
import { Form } from "react-bootstrap";

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
`;

export const Header = styled(Modal.Header)``;

export const CloseButton = styled(RxCross2)`
  position: absolute;
  right: 0.2%;
  transform: translateY(-160%);
  background: none;
  border: none;
  font-size: 38px;
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
    width: 100%;
    height: 45px;
  }

  @media (max-width: 576px) {
    margin-bottom: 20px;
  }
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  outline: none;
  font-size: 16px;
  flex: 1;
`;

export const Icon = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;

  &:hover {
    background: none;
  }
`;

export const InputRounder = styled.input`
  background: transparent;
  border: none;
  outline: none;
  font-size: 13px;
  flex: 1;
  gap: 10%;
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
    width: 100%;
    height: 45px;
  }
`;

export const Footer = styled(Modal.Footer)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Label = styled(Form.Label)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

export const SubTitle = styled.div`
  font-size: 15px;
`;

export const Required = styled.div`
  color: red;
`;
