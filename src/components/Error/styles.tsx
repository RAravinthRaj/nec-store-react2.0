/*
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import styled from "styled-components";

export const Container = styled.div<{ $bgColor: string }>`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;

export const Image = styled.img`
  height: 48%;
  width: 26%;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    height: 48%;
    width: 55%;
  }

  @media (max-width: 576px) {
    height: 55%;
    width: 70%;
  }
`;

export const Title = styled.h1<{ $primaryColor: string }>`
  font-size: 3rem;
  font-weight: 700;
  color: ${(props) => props.$primaryColor};
  margin-bottom: 1rem;
  letter-spacing: 1px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }

  @media (max-width: 576px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.h4<{ $secondaryColor: string }>`
  font-size: 1.25rem;
  color: ${(props) => props.$secondaryColor};
  margin-bottom: 2rem;
  max-width: 600px;
  font-weight: 400;
  line-height: 1.6;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 90%;
  }
`;

export const Button = styled.button<{ $primaryColor: string }>`
  padding: 0.75rem 2rem;
  font-size: 1rem;
  background-color: ${(props) => props.$primaryColor};
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => props.$primaryColor}cc;
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: scale(0.97);
  }
`;
