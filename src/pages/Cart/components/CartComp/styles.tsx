/*
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import styled from "styled-components";
import { RxCrossCircled } from "react-icons/rx";
import { GiShoppingCart } from "react-icons/gi";
import { GrFormPreviousLink } from "react-icons/gr";
import { theme } from "../../../../assets/Variables";

export const PageShell = styled.div`
  min-height: 100vh;
  padding: 28px 24px 128px;
  background:
  /* Top Left: Primary */
    radial-gradient(
      circle at 0% 0%,
      ${theme.colors.primary}12,
      transparent 40%
    ),
    radial-gradient(
      circle at 100% 50%,
      ${theme.colors.primary}0d,
      transparent 45%
    ),
    radial-gradient(
      circle at 10% 100%,
      ${theme.colors.primary}12,
      transparent 40%
    );

  @media (max-width: 992px) {
    padding: 24px 18px 120px;
  }

  @media (max-width: 576px) {
    padding: 18px 14px 132px;
  }
`;

export const PageContainer = styled.div`
  max-width: 1320px;
  margin: 0 auto;
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 22px;
`;

export const PreviousPageLink = styled(GrFormPreviousLink)`
  height: 40px;
  width: 40px;
  background-color: #ffffff;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid rgba(15, 23, 42, 0.1);
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0f172a;
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.05);

  &:hover {
    transform: translateX(-2px);
    box-shadow: 0 8px 20px rgba(15, 23, 42, 0.08);
  }

  @media (max-width: 576px) {
    height: 34px;
    width: 34px;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Eyebrow = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: ${theme.colors.primary};
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const PageTitle = styled.h1`
  margin: 0;
  color: #0f172a;
  font-size: 34px;
  line-height: 1.1;

  @media (max-width: 576px) {
    font-size: 26px;
  }
`;

export const PageSubtitle = styled.p`
  margin: 0;
  color: #5b6472;
  font-size: 15px;

  @media (max-width: 576px) {
    font-size: 13px;
  }
`;

export const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.7fr) minmax(300px, 0.9fr);
  gap: 26px;
  align-items: flex-start;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

export const ItemsColumn = styled.div`
  min-width: 0;
`;

export const SummaryColumn = styled.div`
  min-width: 0;
`;

export const DesktopSummary = styled.div`
  @media (max-width: 992px) {
    display: none;
  }
`;

export const MobileSummary = styled.div`
  display: none;

  @media (max-width: 992px) {
    display: block;
  }
`;

export const SectionCard = styled.div`
  background: rgba(255, 255, 255, 0.94);
  border: 1px solid rgba(15, 23, 42, 0.08);
  border-radius: 22px;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.04);
  padding: 24px;

  @media (max-width: 576px) {
    border-radius: 18px;
    padding: 16px;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CartListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 4px;

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const CartListTitle = styled.h2`
  margin: 0;
  color: #0f172a;
  font-size: 24px;
  line-height: 1.15;

  @media (max-width: 576px) {
    font-size: 21px;
  }
`;

export const CartListCaption = styled.p`
  margin: 0;
  color: #6b7280;
  font-size: 14px;
`;

export const CartMetaPill = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 999px;
  background: ${theme.colors.primary}10;
  color: ${theme.colors.primary};
  font-size: 12px;
  font-weight: 700;
  border: 1px solid ${theme.colors.primary}22;
`;

export const ItemBox = styled.div`
  display: grid;
  grid-template-columns: 112px minmax(0, 1fr) auto;
  gap: 18px;
  padding: 18px 0;
  border-radius: 0;
  border-bottom: 1px solid rgba(15, 23, 42, 0.08);
  background: transparent;
  box-shadow: none;

  @media (max-width: 768px) {
    grid-template-columns: 92px minmax(0, 1fr);
    gap: 14px;
  }

  @media (max-width: 576px) {
    grid-template-columns: 82px minmax(0, 1fr);
    padding: 14px 0;
    gap: 12px;
  }
`;

export const ImageWrap = styled.img`
  width: 112px;
  height: 112px;
  border-radius: 16px;
  object-fit: cover;
  background: linear-gradient(
    180deg,
    ${theme.colors.primary}12 0%,
    ${theme.colors.primary}08 100%
  );
  border: 1px solid ${theme.colors.primary}20;

  @media (max-width: 768px) {
    width: 92px;
    height: 92px;
  }

  @media (max-width: 576px) {
    width: 82px;
    height: 82px;
    border-radius: 14px;
  }
`;

export const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  min-width: 0;
`;

export const ItemHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`;

export const ItemTitleBlock = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ItemCategory = styled.span`
  width: fit-content;
  padding: 6px 10px;
  border-radius: 999px;
  background: ${theme.colors.primary}10;
  color: ${theme.colors.primary};
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

export const ItemTitle = styled.h3`
  margin: 0;
  color: #0f172a;
  font-size: 19px;
  line-height: 1.3;
  min-width: 0;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  word-break: break-word;

  @media (max-width: 576px) {
    font-size: 16px;
  }
`;

export const ItemPriceTag = styled.div`
  flex-shrink: 0;
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ItemPriceLabel = styled.span`
  color: #7c8697;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const ItemPriceValue = styled.span`
  color: #0f172a;
  font-size: 21px;
  font-weight: 700;
  letter-spacing: -0.02em;
`;

export const ItemFooter = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ItemInfoGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const InfoCard = styled.div`
  min-width: 120px;
  padding: 0;
  border-radius: 0;
  background: transparent;
  border: none;
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (max-width: 576px) {
    min-width: calc(50% - 6px);
  }
`;

export const InfoLabel = styled.span`
  color: #7c8697;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

export const InfoValue = styled.span`
  color: #0f172a;
  font-size: 17px;
  font-weight: 700;
  line-height: 1.2;
`;

export const ItemActionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const QuantityContainer = styled.div<{ $bgColor: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 132px;
  border-radius: 999px;
  gap: 6px;
  border: 1px solid ${theme.colors.primary}20;
  background: ${theme.colors.primary}08;
  padding: 4px;
  box-shadow: none;

  @media (max-width: 576px) {
    min-width: 124px;
  }
`;

export const QuantityWrap = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 15px;
  min-width: 40px;
  color: #0f172a;
`;

export const QuantityButton = styled.button<{ $bgColor: string }>`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  color: #0f172a;
  font-size: 13px;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid ${theme.colors.primary}20;

  &:hover {
    background: ${theme.colors.primary}10;
  }
`;

export const RemoveButton = styled.button<{ $bgColor: string }>`
  border: 1px solid rgba(220, 38, 38, 0.14);
  background: #fffafa;
  color: #dc2626;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    background 0.2s ease;

  &:hover {
    transform: scale(1.03);
    background: #fff2f2;
  }
`;

export const CancelComp = styled(RxCrossCircled)<{ $bgColor: string }>`
  font-size: 22px;
`;

export const CartDivider = styled.div`
  height: 1px;
  background: rgba(15, 23, 42, 0.08);
  margin: 2px 0;
`;

export const DownloadIcon = styled(GiShoppingCart)`
  color: ${theme.colors.primary};
  font-size: 18px;
`;

export const MobileSummarySpacer = styled.div`
  display: none;

  @media (max-width: 992px) {
    display: block;
    height: 94px;
  }
`;

export const Button = styled.button<{ $bgColor: string }>`
  flex: 0.3;
  display: flex;
  align-items: center;
  padding: 10px 30px;
  justify-content: center;
  border: none;
  background-color: ${(props) => props?.$bgColor};
  border-radius: 5px;
  gap: 10px;
  color: white;
`;

export const TitleBox = styled.div<{ $bgColor: string }>`
  display: none;
`;

export const TitleComp = styled.div`
  display: flex;
`;

export const Icon = styled.div`
  display: flex;
`;

export const CartComp = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
