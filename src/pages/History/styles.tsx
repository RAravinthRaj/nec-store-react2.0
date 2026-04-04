import styled from "styled-components";
import { theme } from "../../assets/Variables";

export const PageShell = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 8px 0 36px;
  background: transparent;
`;

export const HeaderCard = styled.section`
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(260px, 1fr);
  gap: 20px;
  padding: 24px 28px;
  border-radius: 28px;
  border: 1px solid rgba(15, 23, 42, 0.08);
  background: linear-gradient(140deg, rgba(255, 255, 255, 0.98), rgba(245, 248, 255, 0.96));
  box-shadow: 0 20px 42px rgba(15, 23, 42, 0.06);

  @media (max-width: 900px) {
    display: none;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Eyebrow = styled.span`
  width: fit-content;
  padding: 7px 12px;
  border-radius: 999px;
  background: rgba(4, 36, 200, 0.08);
  color: ${theme.colors.primary};
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const Title = styled.h1`
  margin: 0;
  color: #0f172a;
  font-size: clamp(2rem, 3vw, 3rem);
  line-height: 1;
  letter-spacing: -0.05em;
`;

export const Subtitle = styled.p`
  margin: 0;
  color: #475569;
  max-width: 58ch;
  font-size: 15px;
  line-height: 1.7;
`;

export const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.div`
  padding: 16px;
  border-radius: 20px;
  background: rgba(4, 36, 200, 0.05);
  border: 1px solid rgba(4, 36, 200, 0.08);
`;

export const StatLabel = styled.div`
  color: #64748b;
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

export const StatValue = styled.div`
  margin-top: 10px;
  color: #0f172a;
  font-size: 28px;
  font-weight: 800;
  letter-spacing: -0.05em;
`;

export const StatHint = styled.div`
  margin-top: 6px;
  color: #475569;
  font-size: 13px;
`;

export const ContentCard = styled.section`
  border-radius: 28px;
  padding: 22px;
  background: rgba(255, 255, 255, 0.88);
  border: 1px solid rgba(15, 23, 42, 0.06);
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.035);

  @media (max-width: 768px) {
    padding: 0;
    border-radius: 0;
    background: transparent;
    border: none;
    box-shadow: none;
  }
`;

export const PaginationWrap = styled.div`
  margin-top: 20px;
`;
