/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { theme } from "../../assets/Variables";

export const NavbarContainer = styled.div<{ $bgColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(220, 230, 255, 0.94);
  width: 100%;
  padding: 10px 16px;
  position: fixed;
  height: 78px;
  z-index: 80;
  border-bottom: 1px solid rgba(4, 36, 200, 0.1);
  backdrop-filter: blur(18px);
  box-shadow: 0 10px 24px rgba(4, 36, 200, 0.05);

  @media (max-width: 768px) {
    padding: 10px 12px;
    height: 72px;
  }

  @media (max-width: 576px) {
    padding: 8px 10px;
    height: 60px;
  }
`;

export const NavbarInner = styled.div`
  width: 100%;
  max-width: 1480px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 0 4px;
`;

export const TitleContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  min-width: 0;

  @media (max-width: 768px) {
    gap: 0;
  }
`;

export const Logo = styled.img<{ $isProfilePage: boolean }>`
  width: clamp(34px, 3vw, 44px);
  height: clamp(34px, 3vw, 44px);
  border-radius: 12px;
  box-shadow: 0 8px 18px rgba(4, 36, 200, 0.1);

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 576px) {
    width: 34px;
    height: 34px;
    border-radius: 10px;
  }
`;

export const BrandGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
`;

export const BrandLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
  color: inherit;
  text-decoration: none;
`;

export const BrandTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;

  @media (max-width: 576px) {
    gap: 0;
  }
`;

export const BrandEyebrow = styled.div`
  color: ${theme.colors.secondary};
  font-size: 10px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;

  @media (max-width: 576px) {
    display: none;
  }
`;

export const TitleText = styled.div`
  font-size: clamp(16px, 1.5vw, 21px);
  font-weight: 800;
  color: #16377d;
  letter-spacing: -0.04em;

  @media (max-width: 576px) {
    font-size: 16px;
  }
`;

export const UserContainer = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 14px;
  margin: 0;

  @media (max-width: 768px) {
    gap: 10px;
  }

  @media (max-width: 576px) {
    gap: 8px;
  }
`;

export const UserName = styled.div<{ $bgColor: string }>`
  color: ${(props) => props?.$bgColor};
  font-size: clamp(13px, 1.1vw, 16px);
  font-weight: 800;
  display: flex;
  align-items: center;
  gap: 6px;
  text-align: left;
  cursor: context-menu;
`;

export const ImageBackGround = styled.div`
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.72);
  padding: 3px;
  border: 1px solid rgba(4, 36, 200, 0.12);
`;

export const UserImage = styled.img`
  width: clamp(34px, 2.8vw, 42px);
  height: clamp(34px, 2.8vw, 42px);
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 576px) {
    width: 34px;
    height: 34px;
  }
`;

export const Icon = styled(GiHamburgerMenu)<{ $bgColor: string }>`
  color: ${(props) => props?.$bgColor};
  font-size: clamp(15px, 1.3vw, 18px);
`;

export const MenuButton = styled.button<{ $bgColor: string }>`
  width: clamp(34px, 2.9vw, 40px);
  height: clamp(34px, 2.9vw, 40px);
  border-radius: 12px;
  border: 1px solid rgba(4, 36, 200, 0.12);
  background: rgba(255, 255, 255, 0.58);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  cursor: pointer;
  transition:
    background 0.2s ease,
    transform 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.8);
    transform: translateY(-1px);
  }

  @media (max-width: 576px) {
    width: 34px;
    height: 34px;
    border-radius: 10px;
  }
`;

export const UserIcon = styled.img`
  height: 14%;
  width: 15%;

  @media (max-width: 768px) {
    height: 14%;
    width: 16%;
  }

  @media (max-width: 576px) {
    height: 12%;
    width: 12%;
  }
`;

export const ItemIcon = styled.img`
  height: clamp(19px, 1.45vw, 22px);
  width: clamp(19px, 1.45vw, 22px);

  @media (max-width: 768px) {
    height: 20px;
    width: 20px;
  }

  @media (max-width: 576px) {
    height: 18px;
    width: 18px;
  }
`;

export const IconText = styled.div`
  font-size: clamp(14px, 1.08vw, 16px);

  @media (max-width: 576px) {
    font-size: 15px;
  }
`;

export const NameDivider = styled.div`
  border-top: 0.5px solid rgba(0, 0, 0, 0.2);
  margin: 4px 10px;
`;

export const UserNameDivider = styled.div`
  border: solid 1.5px black;
  margin: 3px;
  width: 100%;
`;

export const CustomDropdown = styled(NavDropdown)`
  margin: 0;
`;

export const DropdownMenu = styled.div<{ $bgColor: string }>`
  background-color: ${(props) => props?.$bgColor};
  padding: 12px 14px;
  border-radius: 18px;
  border: 1px solid rgba(4, 36, 200, 0.12);
  filter: drop-shadow(0px 16px 28px rgba(4, 36, 200, 0.12));
  transition:
    opacity 0.6s ease-out 0.2s,
    transform 0.6s ease-out 0.2s;

  @media (max-width: 768px) {
    width: 200px;
  }
`;

export const DropdownItem = styled(NavDropdown.Item)<{ $bgColor: string }>`
  display: flex;
  width: 210px;
  flex-direction: row;
  align-items: center;
  padding: 11px 2px;
  gap: 12px;
  text-decoration: none;
  color: #0f172a;
  margin-left: 0;
  border-radius: 12px;

  &:hover {
    background: rgba(4, 36, 200, 0.05);
    ${IconText} {
      color: ${(props) => props?.$bgColor};
    }

    ${ItemIcon} {
      filter: invert(20%) sepia(94%) saturate(1500%) hue-rotate(220deg)
        brightness(80%) contrast(150%);
    }
  }

  @media (max-width: 576px) {
    padding: 4px 0;
  }
`;

export const MobileNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const UserMeta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
`;

export const UserMetaLabel = styled.div`
  color: #64748b;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;
