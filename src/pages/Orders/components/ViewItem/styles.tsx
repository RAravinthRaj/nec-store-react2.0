/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import { RxCross2 } from "react-icons/rx";
import Select from "@mui/material/Select";

export const ModalContainer = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 92vh;
  margin-top: 35px !important;

  @media (max-width: 576px) {
    max-height: 120vh;
    margin-top: 25px !important;
    .modal-dialog {
      padding: 13px !important;
      justify-content: center;
    }
  }
`;

export const ModalBody = styled.div`
  padding: 10px 5px;
  background-color: white;
  max-height: 60vh;
  white-space: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  border-radius: 5px;

  @media (max-width: 768px) {
    max-height: 55vh;
  }

  @media (max-width: 576px) {
    max-height: 50vh;
  }
`;

export const CloseButton = styled(RxCross2)`
  position: absolute;
  right: 0.2%;
  transform: translateY(-140%);
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
    transform: translateY(-140%);
    font-size: 30px;
  }
`;

export const TitleBox = styled.div<{ $bgColor: string }>`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  background-color: ${(props) => props.$bgColor};
  padding: 18px 15px;
  border-radius: 10px;
  margin-bottom: 10px;
  margin: 0 10px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
  min-width: 620px;
  position: sticky;
  top: 0;
  z-index: 1;
  isolation: isolate;

  @media (max-width: 576px) {
    min-width: 640px;
    font-size: 13px;
  }
`;

export const ItemBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 15px;
  border-radius: 10px;
  margin: 5px 0px;
  min-width: 600px;

  @media (max-width: 576px) {
    min-width: 640px;
    font-size: 13px;
  }
`;

export const TitleComp = styled.div`
  flex: 1;
  text-align: center;
  white-space: normal;
  min-width: 100px;
  padding: 0 5px;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

export const Button = styled.button<{ $bgColor: string; $isValid: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: ${(props) => props?.$bgColor};
  opacity: ${(props) => (props.$isValid ? "0.5" : "1")};
  cursor: ${(props) => (props.$isValid ? "not-allowed" : "pointer")};
  pointer-events: ${(props) => (props.$isValid ? "none" : "auto")};
  color: white;
  border: none;
  height: 45px;
  width: 100%;
  margin: 20px;
  padding: 10px;
  outline: none;
  font-size: 16px;
  letter-spacing: 0.6px;
  text-align: center;
  font-weight: 600;
  border-radius: 7px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease, transform 0.2s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    height: 45px;
    margin: 3px;
    gap: 3px;
    font-size: 14px;
  }

  @media (max-width: 576px) {
    height: 45px;
    margin: 3px;
    font-size: 14px;
  }
`;

export const Footer = styled.div`
  margin: 0 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 10px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 5px;
  }
`;

export const Divider = styled.div`
  border: solid 0.5px rgba(0, 0, 0, 0.2);
  transform: scaleY(0.1);
  min-width: 500px;
  margin: 0 10px;

  @media (max-width: 768px) {
    margin: 10px 20px;
    min-width: 560px;
  }

  @media (max-width: 576px) {
    margin: 7px 1px;
    min-width: 630px;
  }
`;

export const BodyComponent = styled.div`
  margin: 10px;
`;

export const Amount = styled.h5`
  text-align: center;
  margin: 20px 0;
`;

export const productImage = styled.img`
  width: 55px;
  height: 55px;
  border-radius: 8px;

  @media (max-width: 576px) {
    width: 45px;
    height: 45px;
  }
`;

export const DropDown = styled.div`
  margin: 0 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 768px) {
    gap: 5px;
    width: 100%;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    width: 100%;
    gap: 10px;
  }
`;

export const StyledSelect = styled(Select)`
  height: 35px;
  padding: 22px;
  width: 320px;
  display: flex;
  align-items: center;
  border-radius: 7px;
  background-color: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);

  .MuiSelect-select {
    display: flex;
    align-items: center;
    padding: 0 8px;
    height: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  fieldset {
    border: none !important;
  }

  &:hover fieldset {
    border: none !important;
  }

  &.Mui-focused fieldset {
    border: none !important;
  }

  @media (max-width: 768px) {
    min-width: 200px;
    padding: 20px 5px;
    font-size: 14px !important;
  }

  @media (max-width: 576px) {
    min-width: 100%;
    max-width: 100%;
    padding: 20px 5px;
    font-size: 14px !important;
  }
`;
