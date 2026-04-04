/*
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { GiShoppingCart } from "react-icons/gi";
import styled from "styled-components";
import { theme } from "../../../../assets/Variables";

export const FooterBox = styled.div<{ $bgColor: string }>`
  display: flex;
  flex-direction: column;
  gap: 18px;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 22px;
  padding: 22px;
  box-shadow: 0 10px 28px rgba(15, 23, 42, 0.04);
  position: sticky;
  top: 112px;

  @media (max-width: 992px) {
    position: static;
    border-radius: 22px;
    padding: 16px;
    gap: 14px;
    box-shadow: none;
  }
`;

export const MobileCheckoutBar = styled.div`
  position: fixed;
  left: 14px;
  right: 14px;
  bottom: 14px;
  z-index: 1100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.98);
  border: 1px solid rgba(15, 23, 42, 0.1);
  box-shadow: 0 10px 28px rgba(15, 23, 42, 0.12);

  @media (min-width: 993px) {
    display: none;
  }
`;

export const MobileCheckoutMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`;

export const MobileCheckoutLabel = styled.span`
  color: #64748b;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

export const MobileCheckoutValue = styled.span`
  color: #0f172a;
  font-size: 20px;
  font-weight: 800;
  letter-spacing: -0.03em;
`;

export const MobileCheckoutButton = styled.button<{ $bgColor: string }>`
  border: none;
  background: ${theme.colors.primary};
  color: white;
  padding: 13px 20px;
  min-width: 130px;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: none;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

export const MobileSheetOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1190;
  background: rgba(15, 23, 42, 0.24);
  backdrop-filter: blur(2px);

  @media (min-width: 993px) {
    display: none;
  }
`;

export const MobileSheetContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1200;
  padding: 12px 12px calc(18px + env(safe-area-inset-bottom));
  border-radius: 24px 24px 0 0;
  background: linear-gradient(180deg, #f8f7f4 0%, #f1eee7 100%);
  box-shadow: 0 -10px 30px rgba(15, 23, 42, 0.12);

  @media (min-width: 993px) {
    display: none;
  }
`;

export const MobileSheetHandle = styled.div`
  width: 48px;
  height: 5px;
  border-radius: 999px;
  background: rgba(100, 116, 139, 0.35);
  margin: 0 auto 12px;
`;

export const MobileSheetClose = styled.button`
  border: none;
  background: transparent;
  color: #475569;
  font-size: 13px;
  font-weight: 700;
  display: block;
  margin-left: auto;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const FooterHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const FooterTitle = styled.h3`
  margin: 0;
  color: #0f172a;
  font-size: 24px;
  line-height: 1.1;

  @media (max-width: 992px) {
    font-size: 18px;
  }
`;

export const FooterSubtitle = styled.p`
  margin: 0;
  color: #6b7280;
  font-size: 14px;

  @media (max-width: 992px) {
    font-size: 12px;
  }
`;

export const SummaryGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SummaryRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const SummaryLabel = styled.span<{ $isHighlight?: boolean }>`
  color: ${(props) => (props.$isHighlight ? "#0f172a" : "#64748b")};
  font-size: ${(props) => (props.$isHighlight ? "15px" : "14px")};
  font-weight: ${(props) => (props.$isHighlight ? 700 : 600)};
`;

export const SummaryValue = styled.span<{ $isHighlight?: boolean }>`
  color: ${(props) => (props.$isHighlight ? theme.colors.primary : "#0f172a")};
  font-size: ${(props) => (props.$isHighlight ? "24px" : "15px")};
  font-weight: ${(props) => (props.$isHighlight ? 700 : 700)};
  letter-spacing: ${(props) => (props.$isHighlight ? "-0.03em" : "normal")};

  @media (max-width: 992px) {
    font-size: ${(props) => (props.$isHighlight ? "20px" : "15px")};
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(15, 23, 42, 0.08);
`;

export const FooterContent = styled.div`
  color: #64748b;
  font-size: 13px;
  line-height: 1.5;
`;

export const Button = styled.button<{ $bgColor: string }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 18px;
  border: 1px solid rgba(15, 23, 42, 0.06);
  background: ${theme.colors.primary};
  border-radius: 14px;
  gap: 10px;
  color: white;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: none;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  &:hover {
    background: ${theme.colors.secondary};
  }

  @media (max-width: 992px) {
    padding: 13px 16px;
    border-radius: 14px;
  }
`;

export const CartIcon = styled(GiShoppingCart)`
  color: white;
  font-size: 22px;
`;
