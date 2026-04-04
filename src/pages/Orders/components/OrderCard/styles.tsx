/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import styled from "styled-components";
import { MdOutlineRemoveRedEye } from "react-icons/md";

export const CardContainer = styled.div`
  width: 100%;
  border-radius: 22px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.98), rgba(248, 250, 255, 0.94));
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);
  display: grid;
  grid-template-columns: minmax(220px, 260px) minmax(0, 1fr);
  gap: 18px;
  align-items: center;
  padding: 16px 18px;
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease,
    border-color 0.18s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 16px 28px rgba(15, 23, 42, 0.1);
    border-color: rgba(4, 36, 200, 0.12);
  }

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 576px) {
    border-radius: 18px;

    &:hover {
      transform: none;
      box-shadow: 0 14px 32px rgba(15, 23, 42, 0.08);
    }
  }
`;

export const TitleContainer = styled.div<{ $bgColor: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 0;
  background: linear-gradient(180deg, rgba(4, 36, 200, 0.06) 0%, rgba(4, 36, 200, 0.02) 100%);
  border: 1px solid rgba(4, 36, 200, 0.08);
  border-radius: 18px;
  padding: 16px;

  @media (max-width: 576px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const TitleLabel = styled.div`
  color: #64748b;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const Title = styled.div`
  color: #0f172a;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.15;

  @media (max-width: 576px) {
    font-size: 17px;
  }
`;

export const StatusGroup = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: flex-end;
`;

export const StatusPill = styled.div<{ $tone: string }>`
  padding: 7px 11px;
  border-radius: 999px;
  background: color-mix(in srgb, ${(props) => props.$tone} 10%, white);
  color: ${(props) => props.$tone};
  border: 1px solid color-mix(in srgb, ${(props) => props.$tone} 22%, white);
  font-size: 12px;
  font-weight: 700;
  text-transform: capitalize;
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const MetaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  flex: 1;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const MetaCard = styled.div`
  padding: 14px;
  border-radius: 16px;
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, 0.14);
`;

export const MetaLabel = styled.div`
  color: #64748b;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 8px;
`;

export const OrderNameContainer = styled.div`
  color: #0f172a;
  font-size: 17px;
  font-weight: 600;

  @media (max-width: 576px) {
    font-size: 15px;
  }
`;

export const DateContainer = styled.div`
  color: #1e293b;
  font-size: 15px;
  font-weight: 600;

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const TotalStrip = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 18px;
  background: #f3f7ff;
  border: 1px solid rgba(4, 36, 200, 0.08);
  min-width: 180px;

  @media (max-width: 992px) {
    min-width: 0;
  }
`;

export const AmountBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const RupeeContainer = styled.div`
  color: #0424c8;
  font-size: 30px;
  font-weight: 800;
  line-height: 1;

  @media (max-width: 576px) {
    font-size: 26px;
  }
`;

export const ItemCount = styled.div`
  padding: 8px 12px;
  border-radius: 999px;
  background: white;
  color: #475569;
  font-size: 13px;
  font-weight: 700;
  border: 1px solid rgba(148, 163, 184, 0.16);
`;

export const ButtonContainer = styled.div`
  display: flex;
  min-width: 220px;
  gap: 10px;
  justify-content: flex-end;

  @media (max-width: 992px) {
    min-width: 0;
    width: 100%;
  }

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

export const Button = styled.button<{ $bgColor: string }>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 14px;
  border-radius: 14px;
  border: 1px solid transparent;
  background: ${(props) => props.$bgColor};
  color: white;
  font-size: 14px;
  font-weight: 700;
  box-shadow: 0 10px 20px rgba(4, 36, 200, 0.12);
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease,
    background 0.18s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 14px 24px rgba(4, 36, 200, 0.16);
  }

  &:nth-child(2) {
    background: #fff;
    color: #b42318;
    border-color: rgba(180, 35, 24, 0.14);
    box-shadow: none;
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const ViewIcon = styled(MdOutlineRemoveRedEye)`
  color: currentColor;
  font-size: 18px;

  @media (max-width: 576px) {
    font-size: 16px;
  }
`;
