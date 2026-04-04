import styled from "styled-components";
import { FaPencilAlt } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import { LiaCartArrowDownSolid } from "react-icons/lia";
import { FiPlus } from "react-icons/fi";
import { theme } from "../../../../assets/Variables";

export const CardContainer = styled.div<{ $isRetailer?: boolean }>`
  width: 100%;
  display: flex;
  align-items: ${(props) => (props.$isRetailer ? "center" : "stretch")};
  gap: 18px;
  padding: ${(props) => (props.$isRetailer ? "12px 14px" : "14px")};
  box-shadow: none;
  border-radius: 16px;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
  background: #ffffff;
  border: 1px solid rgba(4, 36, 200, 0.08);
  position: relative;
  flex-direction: ${(props) => (props.$isRetailer ? "row" : "column")};

  &:hover {
    transform: translateY(-2px);
    box-shadow: none;
    border-color: rgba(4, 36, 200, 0.18);
  }

  @media (max-width: 992px) {
    align-items: stretch;
    flex-direction: column;
  }

  @media (max-width: 576px) {
    padding: 12px;
    border-radius: 18px;

    &:hover {
      transform: none;
      box-shadow: 0 12px 26px rgba(15, 23, 42, 0.07);
    }
  }
`;

export const ProductDetailContainer = styled.div<{ $isRetailer?: boolean }>`
  display: flex;
  align-items: ${(props) => (props.$isRetailer ? "center" : "stretch")};
  gap: 16px;
  flex: 1;
  min-width: 0;
  flex-direction: ${(props) => (props.$isRetailer ? "row" : "column")};

  @media (max-width: 992px) {
    align-items: flex-start;
  }

  @media (max-width: 576px) {
    gap: 10px;
    flex-direction: column;
  }
`;

export const ImageSection = styled.div<{ $isRetailer?: boolean }>`
  position: relative;
  width: ${(props) => (props.$isRetailer ? "100px" : "100%")};
  min-width: ${(props) => (props.$isRetailer ? "100px" : "0")};
  padding: 8px;
  border-radius: 12px;
  border: 1px solid rgba(4, 36, 200, 0.1);
  background: #f8fafc;

  @media (max-width: 992px) {
    width: 100%;
    min-width: 0;
  }

  @media (max-width: 576px) {
    width: 100%;
    min-width: 0;
    padding: 8px;
    border-radius: 16px;
  }
`;

export const TopMetaRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 12px;

  @media (max-width: 576px) {
    display: none;
  }
`;

export const MetaBadge = styled.div<{ $variant?: "subtle" }>`
  padding: 7px 11px;
  border-radius: 999px;
  background: ${(props) =>
    props.$variant === "subtle"
      ? "rgba(255, 255, 255, 0.88)"
      : "rgba(4, 36, 200, 0.88)"};
  color: ${(props) => (props.$variant === "subtle" ? "#0f172a" : "white")};
  border: 1px solid
    ${(props) =>
      props.$variant === "subtle"
        ? "rgba(15, 23, 42, 0.08)"
        : "rgba(4, 36, 200, 0.16)"};
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

export const ContentSection = styled.div<{ $isRetailer?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
  min-width: 0;
  width: 100%;

  @media (max-width: 576px) {
    gap: 8px;
  }
`;

export const ImageContainer = styled.div<{ $isRetailer?: boolean }>`
  width: 100%;
  height: ${(props) => (props.$isRetailer ? "82px" : "168px")};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 992px) {
    height: 130px;
  }

  @media (max-width: 576px) {
    height: ${(props) => (props.$isRetailer ? "102px" : "138px")};
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;

  ${CardContainer}:hover & {
    transform: scale(1.06);
  }
`;

export const TitleContainer = styled.h3`
  text-align: left;
  font-size: 18px;
  line-height: 1.3;
  margin: 0;
  min-width: 0;
  flex: 1;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  word-break: break-word;
  min-height: auto;
  color: #0f172a;

  @media (max-width: 576px) {
    font-size: 16px;
    -webkit-line-clamp: 2;
    line-clamp: 2;
  }
`;

export const TitleRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  min-width: 0;

  @media (max-width: 576px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 6px;
  }
`;

export const CategoryContainer = styled.h5<{ $bgColor: string }>`
  width: fit-content;
  color: ${(props) => props.$bgColor};
  background: rgba(4, 36, 200, 0.08);
  text-align: center;
  font-size: 11px;
  margin: 0;
  padding: 8px 12px;
  border-radius: 999px;
  font-weight: 800;
  letter-spacing: 0.05em;
  border: 1px solid rgba(4, 36, 200, 0.1);

  @media (max-width: 576px) {
    font-size: 11px;
  }
`;

export const ProductDes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  font-size: 13px;
`;

export const PriceSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  padding-top: 2px;
`;

export const PriceLabel = styled.span`
  font-size: 12px;
  color: #64748b;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const HighlightPrice = styled.span`
  font-size: 24px;
  font-weight: 800;
  color: ${theme.colors.primary};
  letter-spacing: -0.03em;

  @media (max-width: 576px) {
    font-size: 20px;
  }
`;

export const CustomerMetaRow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
`;

export const CustomerAvailability = styled.div<{ $isLowStock: boolean }>`
  flex-shrink: 0;
  padding: 6px 9px;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.04em;
  color: ${(props) => (props.$isLowStock ? "#b91c1c" : "#166534")};
  background: ${(props) =>
    props.$isLowStock ? "rgba(239, 68, 68, 0.12)" : "rgba(34, 197, 94, 0.12)"};
`;

export const MetaRow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  padding-top: 2px;

  @media (max-width: 576px) {
    padding-top: 0;
  }
`;

export const StockPill = styled.div<{ $isLowStock: boolean }>`
  flex-shrink: 0;
  padding: 7px 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 800;
  color: ${(props) => (props.$isLowStock ? "#b91c1c" : "#166534")};
  background: ${(props) =>
    props.$isLowStock ? "rgba(239, 68, 68, 0.12)" : "rgba(34, 197, 94, 0.12)"};
`;

export const QuantityContainer = styled.h5`
  font-size: 13px;
  color: #475569;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;

  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

export const QuantityValue = styled.span`
  color: #0f172a;
  font-weight: 800;
`;

export const AuxiliaryText = styled.span`
  color: #64748b;
  font-size: 12px;
  line-height: 1.5;
  max-width: 140px;
  text-align: right;

  @media (max-width: 576px) {
    display: none;
  }
`;

export const RetailerQuantityText = styled.div`
  color: #475569;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 6px;

  @media (max-width: 576px) {
    font-size: 13px;
  }
`;

export const RetailerQuantityValue = styled.span`
  color: #0f172a;
  font-size: 20px;
  font-weight: 800;
  letter-spacing: -0.03em;
  margin-left: 4px;

  @media (max-width: 576px) {
    font-weight: 700;
    font-size: 18px;
  }
`;

export const RupeeContainer = styled.h5`
  font-size: 13px;
  margin: 0;
  color: #1e293b;

  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

export const RetailerPriceCard = styled.div`
  width: 240px;
  display: flex;
  align-items: stretch;
  gap: 10px;
  padding: 12px 14px;
  border-radius: 16px;
  background: #f8fafc;
  border: 1px solid rgba(4, 36, 200, 0.1);

  @media (max-width: 992px) {
    width: 100%;
  }

  @media (max-width: 576px) {
    display: none;
  }
`;

export const RetailerPriceItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`;

export const RetailerPriceLabel = styled.span`
  color: #64748b;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

export const RetailerPriceValue = styled.span<{ $isSellingPrice?: boolean }>`
  color: ${(props) => (props.$isSellingPrice ? theme.colors.primary : "#0f172a")};
  font-size: 20px;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.03em;

  @media (max-width: 576px) {
    font-size: 18px;
  }
`;

export const RetailerPriceHint = styled.span`
  color: #64748b;
  font-size: 11px;
  line-height: 1.5;
`;

export const RetailerPriceDivider = styled.div`
  width: 1px;
  background: rgba(148, 163, 184, 0.28);
`;

export const ButtonContainer = styled.div<{ $isRetailer?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  width: ${(props) => (props.$isRetailer ? "220px" : "100%")};
  margin-left: auto;

  @media (max-width: 992px) {
    width: 100%;
    margin-left: 0;
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const Button = styled.button<{ $bgColor: string; $canAdd: boolean }>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 11px 12px;
  background: ${(props) => (props.$canAdd ? props.$bgColor : "#cbd5e1")};
  opacity: ${(props) => (props.$canAdd ? 1 : 0.5)};
  pointer-events: ${(props) => (props.$canAdd ? "default" : "none")};
  border: 1px solid
    ${(props) => (props.$canAdd ? "rgba(4, 36, 200, 0.12)" : "transparent")};
  border-radius: 12px;
  color: white;
  font-size: 13.5px;
  gap: 8px;
  cursor: pointer;
  font-weight: 700;
  box-shadow: ${(props) =>
    props.$canAdd ? "0 12px 24px rgba(4, 36, 200, 0.14)" : "none"};
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    opacity 0.2s ease;

  &:hover {
    opacity: ${(props) => (props.$canAdd ? 0.96 : 0.5)};
    transform: ${(props) => (props.$canAdd ? "translateY(-1px)" : "none")};
    box-shadow: ${(props) =>
      props.$canAdd ? "0 16px 26px rgba(4, 36, 200, 0.18)" : "none"};
  }

  @media (max-width: 576px) {
    font-size: 12px;
    gap: 6px;
    padding: 10px;
    border-radius: 10px;
    min-height: 38px;
  }
`;

export const EditIcon = styled(FaPencilAlt)`
  color: white;
  font-size: 13px;

  @media (max-width: 576px) {
    font-size: 13px;
  }
`;

export const DeleteIcon = styled(ImBin)`
  color: white;
  font-size: 14px;

  @media (max-width: 576px) {
    font-size: 13px;
  }
`;

export const CartIcon = styled(LiaCartArrowDownSolid)`
  color: white;
  font-size: 18px;

  @media (max-width: 576px) {
    font-size: 16px;
  }
`;

export const LessStock = styled.div`
  display: flex;
  align-items: center;
  margin-top: -20px;
  font-size: 12px;
  color: red;
`;

export const AddIcon = styled(FiPlus)`
  color: white;
  font-size: 16px;
`;
