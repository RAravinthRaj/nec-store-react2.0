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
import { useEffect, useState } from "react";
import { PROFILE_CONFIG } from "../../config";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export interface IAddRole {
  modalShow: boolean;
  onClose: () => void;
  email: string;
  roles: string[];
  onAddRole(roles: string): void;
}

export const AddRoleModal = ({
  modalShow,
  onClose,
  email,
  roles,
  onAddRole,
}: IAddRole) => {
  const theme = useTheme();

  const [selectedRole, setSelectedRole] = useState("");

  useEffect(() => {
    if (!modalShow) {
      setSelectedRole("");
    }
  }, [modalShow]);

  const _handleChange = (event: SelectChangeEvent<unknown>) => {
    if (modalShow) {
      setSelectedRole(event.target.value as string);
    } else {
      setSelectedRole("");
    }
  };

  const _roleAdded = () => {
    onAddRole(selectedRole);
    setSelectedRole("");
    onClose();
  };

  const _renderMenu = () => {
    return (
      <S.StyledFormControl fullWidth>
        <Select
          value={selectedRole}
          onChange={(e) => _handleChange(e)}
          displayEmpty
          renderValue={(selected) => (selected ? selected : "Role")}
        >
          {roles?.map((cat, id) => {
            return (
              <MenuItem key={id} value={cat}>
                {cat}
                <S.Divider />
              </MenuItem>
            );
          })}
        </Select>
      </S.StyledFormControl>
    );
  };

  const _renderModalHeader = () => {
    return (
      <S.Header>
        <S.CloseButton onClick={onClose} />
        <S.Title id="contained-modal-title-vcenter">
          {PROFILE_CONFIG.addRoleTitle}
        </S.Title>
      </S.Header>
    );
  };

  const _renderModalBody = () => {
    return (
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>{PROFILE_CONFIG.email}</Form.Label>
            <S.InputWrapper>
              <S.Input
                type="text"
                value={email}
                readOnly
                $textColor={theme.colors.textSecondary}
              />
            </S.InputWrapper>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>{PROFILE_CONFIG.role}</Form.Label>
            {_renderMenu()}
          </Form.Group>
        </Form>
      </Modal.Body>
    );
  };

  const _renderModalFooter = () => {
    return (
      <S.Footer>
        <S.Button $bgColor={theme.colors.primary} onClick={() => _roleAdded()}>
          {PROFILE_CONFIG.submitButton}
        </S.Button>
      </S.Footer>
    );
  };

  return (
    <S.ModalContainer
      centered
      show={modalShow}
      onHide={onClose}
      backdrop="static"
    >
      {_renderModalHeader()}
      {_renderModalBody()}
      {_renderModalFooter()}
    </S.ModalContainer>
  );
};
