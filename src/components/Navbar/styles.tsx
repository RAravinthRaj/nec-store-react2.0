/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import NavDropdown from "react-bootstrap/NavDropdown";

export const NavbarContainer = styled.div<{ $bgColor: string }>`
  display: flex;
  align-items: center;
  background-color: ${($props) => $props?.$bgColor};
  width: 100%;
  padding: 2px 15px;
  position: fixed;
  height: 73px;
  z-index: 80;

  @media (max-width: 768px) {
    padding: 10px 12px;
    height: 70px;
  }

  @media (max-width: 576px) {
    padding: 5px;
    height: 58px;
  }
`;

export const TitleContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    gap: 0px;
  }

  @media (max-width: 576px) {
    gap: 0px;
  }
`;

export const Logo = styled.img<{ $isProfilePage: boolean }>`
  width: 50px;
  height: 50px;

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
  }

  @media (max-width: 576px) {
    width: 40px;
    height: 40px;
  }
`;

export const TitleText = styled.div`
  font-size: 25px;
  font-weight: 550;
  color: black;
`;

export const UserContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 20px;
  margin: 3px 10px;

  @media (max-width: 768px) {
    gap: 15px;
    margin: 0;
  }

  @media (max-width: 576px) {
    gap: 8px;
    margin: 0;
  }
`;

export const UserName = styled.div<{ $bgColor: string }>`
  color: ${(props) => props?.$bgColor};
  font-size: 25px;
  font-weight: 550;
  display: flex;
  align-items: center;
  gap: 10px;
  text-align: center;
  cursor: context-menu;

  @media (max-width: 768px) {
    font-size: 18px;
    font-weight: 550;
    margin: 5px;
  }

  @media (max-width: 576px) {
    font-size: 17px;
    font-weight: 550;
    margin: 5px;
  }
`;

export const ImageBackGround = styled.div`
  border-radius: 50%;
  background-color: white;
  padding: 2px;
`;

export const UserImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  @media (max-width: 576px) {
    width: 37px;
    height: 37px;
  }
`;

export const Icon = styled(GiHamburgerMenu)<{ $bgColor: string }>`
  color: ${(props) => props?.$bgColor};
  font-size: 160%;

  @media (max-width: 768px) {
    margin: 15px;
  }

  @media (max-width: 576px) {
    margin: 8px;
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
  height: 13%;
  width: 13%;

  @media (max-width: 768px) {
    height: 12%;
    width: 12%;
  }

  @media (max-width: 576px) {
    height: 12%;
    width: 12%;
  }
`;

export const IconText = styled.div`
  font-size: 16px;

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
  margin: 5px;
`;

export const DropdownMenu = styled.div<{ $bgColor: string }>`
  background-color: ${(props) => props?.$bgColor};
  padding: 5px 12px;
  border-radius: 10px;
  filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.2));
  transition:
    opacity 0.6s ease-out 0.2s,
    transform 0.6s ease-out 0.2s;

  @media (max-width: 768px) {
    width: 180px;
  }
`;

export const DropdownItem = styled(NavDropdown.Item)<{ $bgColor: string }>`
  display: flex;
  width: 170px;
  flex-direction: row;
  align-items: center;
  padding: 5px 0;
  gap: 10px;
  text-decoration: none;
  color: #000000;
  margin-left: 10px;

  &:hover {
    background: none;
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
  align-items: center;
`;
