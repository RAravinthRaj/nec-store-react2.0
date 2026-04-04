/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const SectionIntro = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.5fr) minmax(260px, 0.9fr);
  gap: 18px;
  padding: 22px;
  border-radius: 26px;
  background:
    linear-gradient(140deg, rgba(4, 36, 200, 0.05), rgba(255, 181, 71, 0.08)),
    #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.08);

  @media (max-width: 920px) {
    display: none;
  }
`;

export const SectionCopy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SectionEyebrow = styled.span`
  width: fit-content;
  padding: 7px 12px;
  border-radius: 999px;
  background: rgba(4, 36, 200, 0.08);
  color: #0424c8;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const SectionTitle = styled.h2`
  margin: 0;
  color: #0f172a;
  font-size: clamp(1.6rem, 2vw, 2.3rem);
  line-height: 1.05;
  letter-spacing: -0.05em;
`;

export const SectionSubtitle = styled.p`
  margin: 0;
  color: #475569;
  font-size: 14px;
  line-height: 1.7;
`;

export const SectionStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: 920px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.div`
  padding: 16px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.88);
  border: 1px solid rgba(15, 23, 42, 0.08);
`;

export const StatLabel = styled.div`
  color: #64748b;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const StatValue = styled.div`
  margin-top: 10px;
  color: #0f172a;
  font-size: 28px;
  font-weight: 800;
  letter-spacing: -0.05em;
`;

export const ProductContainer = styled.div<{ $isRetailer?: boolean }>`
  display: ${(props) => (props.$isRetailer ? "flex" : "grid")};
  flex-direction: ${(props) => (props.$isRetailer ? "column" : "unset")};
  grid-template-columns: ${(props) =>
    props.$isRetailer
      ? "none"
      : "repeat(auto-fill, minmax(220px, 1fr))"};
  gap: 16px;

  @media (max-width: 576px) {
    grid-template-columns: ${(props) =>
      props.$isRetailer ? "none" : "repeat(2, minmax(0, 1fr))"};
    gap: 12px;
  }
`;
