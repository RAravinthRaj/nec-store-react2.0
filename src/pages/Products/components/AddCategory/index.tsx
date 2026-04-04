/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import * as S from "./styles";
import { useTheme } from "../../../../hooks";
import { useState } from "react";
import { PRODUCTS_CONFIG } from "../../config";
import { toast } from "react-toastify";

export interface IAddCategory {
  modalShow: boolean;
  onClose: () => void;
  addCategory(name: string): Promise<boolean>;
}

export const AddCategoryModal = ({
  modalShow: modalShow,
  onClose,
  addCategory,
}: IAddCategory) => {
  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState("");

  const _categoryAdded = async () => {
    if (selectedCategory.trim() === "") {
      toast.warn("Please fill the Required data");
      return;
    }
    const success = await addCategory(selectedCategory);

    if (success) {
      onClose();
    }
  };

  const _renderModalHeader = () => {
    return (
      <S.Header>
        <S.CloseButton onClick={onClose} />
        <S.Title id="contained-modal-title-vcenter">
          {PRODUCTS_CONFIG.addCategoryTitle}
        </S.Title>
      </S.Header>
    );
  };

  const _renderModalBody = () => {
    return (
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <S.Label>
              <S.SubTitle>{PRODUCTS_CONFIG.category}</S.SubTitle>
              <S.Required>*</S.Required>
            </S.Label>
            <S.InputWrapper>
              <S.Input
                type="Name"
                placeholder={PRODUCTS_CONFIG.title}
                onChange={(e) => setSelectedCategory(e.target.value)}
              />
            </S.InputWrapper>
          </Form.Group>
        </Form>
      </Modal.Body>
    );
  };

  const _renderModalFooter = () => {
    return (
      <S.Footer>
        <S.Button
          $bgColor={theme.colors.primary}
          onClick={() => _categoryAdded()}
        >
          {PRODUCTS_CONFIG.addButton}
        </S.Button>
      </S.Footer>
    );
  };

  return (
    <S.ModalContainer
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={modalShow}
      backdrop="static"
      onHide={() => onClose()}
    >
      {_renderModalHeader()}
      {_renderModalBody()}
      {_renderModalFooter()}
    </S.ModalContainer>
  );
};
