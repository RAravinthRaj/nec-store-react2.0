import styled from "styled-components";
import { theme } from "../../assets/Variables";

export const PageShell = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 6px 0 32px;
  background: transparent;

  @media (max-width: 768px) {
    gap: 12px;
    padding-top: 6px;
  }
`;

export const HeroCard = styled.section`
  position: relative;
  overflow: hidden;
  border-radius: 32px;
  padding: 30px;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.96), rgba(245, 248, 255, 0.98)),
    linear-gradient(140deg, rgba(4, 36, 200, 0.08), rgba(255, 181, 71, 0.06));
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 28px 50px rgba(15, 23, 42, 0.08);

  &::after {
    content: "";
    position: absolute;
    inset: auto -60px -80px auto;
    width: 240px;
    height: 240px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(4, 36, 200, 0.16), transparent 68%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.6fr) minmax(280px, 1fr);
  gap: 22px;
  align-items: end;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Eyebrow = styled.span`
  width: fit-content;
  padding: 7px 12px;
  border-radius: 999px;
  background: rgba(4, 36, 200, 0.08);
  color: ${theme.colors.primary};
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const Title = styled.h1`
  margin: 0;
  max-width: 12ch;
  color: #0f172a;
  font-size: clamp(2.15rem, 4vw, 3.6rem);
  line-height: 0.98;
  letter-spacing: -0.06em;
`;

export const Subtitle = styled.p`
  margin: 0;
  max-width: 64ch;
  color: #475569;
  font-size: 15px;
  line-height: 1.7;
`;

export const HighlightRail = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const HighlightCard = styled.div`
  padding: 18px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.76);
  border: 1px solid rgba(15, 23, 42, 0.08);
  backdrop-filter: blur(14px);
`;

export const HighlightLabel = styled.div`
  color: #64748b;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const HighlightValue = styled.div`
  margin-top: 8px;
  color: #0f172a;
  font-size: 30px;
  font-weight: 800;
  letter-spacing: -0.05em;
`;

export const HighlightSubtext = styled.div`
  margin-top: 6px;
  color: #475569;
  font-size: 13px;
  line-height: 1.5;
`;

export const ToolbarSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ContentCard = styled.section`
  border-radius: 28px;
  padding: 22px;
  background: rgba(255, 255, 255, 0.86);
  border: 1px solid rgba(15, 23, 42, 0.06);
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.03);

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
