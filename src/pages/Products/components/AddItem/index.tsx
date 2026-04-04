import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import * as S from "./styles";
import { useTheme } from "../../../../hooks";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { PRODUCTS_CONFIG } from "../../config";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { AddProductInput } from "../../services/graphql";
import { convertFileToBase64 } from "../../../../utils";

export interface IAddItem {
  modalShow: boolean;
  onClose: () => void;
  categories: any[];
  addProduct(args: AddProductInput): Promise<boolean>;
}

export const AddItemModal = ({
  modalShow,
  onClose,
  categories,
  addProduct,
}: IAddItem) => {
  const theme = useTheme();

  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [productImage, setProductImage] = useState("");

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const _handleCategoryChange = (event: SelectChangeEvent<unknown>) => {
    setCategoryId(event.target.value as string);

    if (!modalShow) {
      setCategoryId("");
    }
  };

  const _addProduct = async () => {
    if (
      title.trim() !== "" &&
      categoryId.trim() !== ""
    ) {
      const productData: AddProductInput = {
        title: title.trim(),
        categoryId: categoryId.trim(),
        quantity: 0,
        buyingPrice: 0,
        sellingPrice: 0,
        productImage,
      };

      const success = await addProduct(productData);
      if (success) {
        onClose();
        setTitle("");
        setCategoryId("");
        setProductImage("");
      }
    } else {
      toast.info(PRODUCTS_CONFIG.requiredData);
    }
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const validImageTypes = PRODUCTS_CONFIG.validImageTypes;

    if (!validImageTypes.includes(file.type)) {
      toast.error("Invalid ProfilePicture");
      return;
    }

    try {
      const base64 = await convertFileToBase64(file, 150, 150, 0.7);
      setProductImage(base64);
    } catch (err) {
      console.error(err);
      toast.error("Invalid ProfilePicture");
    }
  };

  const _resetImageField = () => {
    setProductImage("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const _renderMenu = () => {
    return (
      <S.StyledFormControl fullWidth>
        <Select
          value={categoryId}
          onChange={_handleCategoryChange}
          displayEmpty
          inputProps={{ "aria-label": "Category" }}
          renderValue={(selected) => {
            const selectedCat = categories.find((cat) => cat.id === selected);
            return selectedCat?.name || "Category";
          }}
          style={{ color: theme.colors.textSecondary }}
        >
          {categories?.map((cat, index) => {
            return (
              <MenuItem key={cat?.id} value={cat?.id}>
                {cat?.name}
                {index != categories.length && <S.Divider />}
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
          {PRODUCTS_CONFIG.addItemTitle}
        </S.Title>
      </S.Header>
    );
  };

  const _renderImageField = () => {
    return (
      <>
        <S.Label>
          <S.SubTitle>
            {PRODUCTS_CONFIG.image}
            <S.FileTypesHint>
              {PRODUCTS_CONFIG.acceptedImageTypes}
            </S.FileTypesHint>
          </S.SubTitle>
        </S.Label>
        <S.ProductImageContainer>
          <input
            ref={fileInputRef}
            type="file"
            className="form-control"
            accept="image/*"
            onChange={handleImageChange}
          />
          {productImage && (
            <S.ImageWrapper>
              <S.PreviewProductImage src={productImage} alt="Preview" />
              <S.CancelButton onClick={_resetImageField}>
                {PRODUCTS_CONFIG.cancelIcon}
              </S.CancelButton>
            </S.ImageWrapper>
          )}
        </S.ProductImageContainer>
      </>
    );
  };

  const _renderModalBody = () => {
    return (
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <S.Label>
              <S.SubTitle>{PRODUCTS_CONFIG.title}</S.SubTitle>
              <S.Required>*</S.Required>
            </S.Label>
            <S.InputWrapper>
              <S.Input
                type="text"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </S.InputWrapper>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <S.Label>
              <S.SubTitle>{PRODUCTS_CONFIG.category}</S.SubTitle>
              <S.Required>*</S.Required>
            </S.Label>
            {_renderMenu()}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            {_renderImageField()}
          </Form.Group>
        </Form>
      </Modal.Body>
    );
  };

  const _renderModalFooter = () => {
    return (
      <S.Footer>
        <S.Button $bgColor={theme.colors.primary} onClick={() => _addProduct()}>
          {PRODUCTS_CONFIG.submitButton}
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
