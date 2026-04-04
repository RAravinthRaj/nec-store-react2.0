import styled from "styled-components";
import { FaPencilAlt } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import { LiaCartArrowDownSolid } from "react-icons/lia";
import { FiPlus } from "react-icons/fi";
import { theme } from "../../../../assets/Variables";

export const CardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  box-shadow: 0 14px 34px rgba(15, 23, 42, 0.05);
  border-radius: 24px;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
  background:
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.98) 0%,
      rgba(247, 250, 255, 0.98) 100%
    );
  border: 1px solid rgba(4, 36, 200, 0.1);
  overflow: hidden;
  position: relative;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 22px 44px rgba(4, 36, 200, 0.12);
    border-color: rgba(4, 36, 200, 0.18);
  }

  @media (max-width: 576px) {
    padding: 12px;
    border-radius: 20px;

    &:hover {
      transform: none;
      box-shadow: 0 12px 26px rgba(15, 23, 42, 0.07);
    }
  }
`;

export const ProductDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  @media (max-width: 576px) {
    gap: 12px;
  }
`;

export const ImageSection = styled.div`
  position: relative;
  padding: 12px;
  border-radius: 20px;
  border: 1px solid rgba(4, 36, 200, 0.1);
  background:
    radial-gradient(circle at top, rgba(4, 36, 200, 0.12), transparent 42%),
    linear-gradient(180deg, #f8fbff 0%, #eef4ff 100%);

  @media (max-width: 576px) {
    padding: 8px;
    border-radius: 16px;
  }
`;

export const TopMetaRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 8px;

  @media (max-width: 576px) {
    margin-bottom: 8px;
  }
`;

export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 576px) {
    gap: 8px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 176px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    height: 164px;
  }

  @media (max-width: 576px) {
    height: 150px;
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
  font-size: 19px;
  line-height: 1.35;
  margin: 0;
  min-width: 0;
  flex: 1;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  word-break: break-word;
  min-height: calc(1.32em * 2);
  color: #0f172a;

  @media (max-width: 576px) {
    font-size: 16px;
    min-height: calc(1.32em * 2);
  }
`;

export const TitleRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  min-width: 0;

  @media (max-width: 576px) {
    gap: 8px;
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
  padding-top: 4px;
`;

export const PriceLabel = styled.span`
  font-size: 12px;
  color: #64748b;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const HighlightPrice = styled.span`
  font-size: 28px;
  font-weight: 800;
  color: ${theme.colors.primary};
  letter-spacing: -0.03em;

  @media (max-width: 576px) {
    font-size: 22px;
  }
`;

export const MetaRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  padding-top: 2px;

  @media (max-width: 576px) {
    gap: 8px;
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
  width: 100%;
  display: flex;
  align-items: stretch;
  gap: 10px;
  padding: 12px 14px;
  border-radius: 16px;
  background: linear-gradient(180deg, #f8fbff 0%, #eef4ff 100%);
  border: 1px solid rgba(4, 36, 200, 0.1);

  @media (max-width: 576px) {
    flex-direction: column;
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

export const RetailerPriceDivider = styled.div`
  width: 1px;
  background: rgba(148, 163, 184, 0.28);
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  margin-top: 16px;
`;

export const Button = styled.button<{ $bgColor: string; $canAdd: boolean }>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 11px 10px;
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
