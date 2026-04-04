/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import Box from "@mui/material/Box";
import styled from "styled-components";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import { NavLink } from "react-router-dom";
import { theme } from "../../assets/Variables";

export const DrawerBox = styled(Box)`
  height: 100%;
  background: rgba(210, 223, 255, 0.95);
`;

export const Icon = styled.img<{ $bgColor: string }>`
  height: clamp(20px, 1.7vw, 26px);
  width: clamp(20px, 1.7vw, 26px);
  object-fit: contain;

  @media (max-width: 768px) {
    height: 24px;
    width: 24px;
  }

  @media (max-width: 576px) {
    height: 21px;
    width: 21px;
  }
`;

export const Divider = styled.div`
  display: none;
`;

export const Item = styled(ListItemButton)<{ $collapsed?: boolean }>`
  padding: ${(props) => (props.$collapsed ? "15px 0" : "15px 16px")};
  gap: ${(props) => (props.$collapsed ? "0" : "14px")};
  border-radius: 16px;
  min-height: 58px;
  justify-content: ${(props) => (props.$collapsed ? "center" : "flex-start")};
  width: 100%;
`;

export const CustomList = styled(List)<{ $collapsed?: boolean }>`
  margin-top: 0;
  padding: ${(props) => (props.$collapsed ? "14px 8px" : "16px 12px")};
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ItemText = styled(ListItemText)`
  .MuiTypography-root {
    font-weight: 700;
    font-size: clamp(14px, 1.12vw, 16px);
    line-height: 1.2;
    color: #0f172a;
  }
`;

export const ItemContainer = styled(ListItem)<{
  $hoverBgColor: string;
  $collapsed?: boolean;
}>`
  padding: 0;
  border-radius: 16px;
  background: ${(props) =>
    props.$collapsed ? "transparent" : "rgba(255, 255, 255, 0.52)"};
  border: 1px solid transparent;
  overflow: hidden;
  width: 100%;
  transition:
    background 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.82);
    border-color: rgba(4, 36, 200, 0.08);
    ${Icon} {
      filter: invert(20%) sepia(94%) saturate(1500%) hue-rotate(220deg)
        brightness(80%) contrast(150%);
    }

    ${ItemText} {
      color: ${($props) => $props?.$hoverBgColor};
    }
  }

  @media (max-width: 768px) {
    padding: 0;
  }

  @media (max-width: 576px) {
    padding: 0;
  }
`;

export const Logo = styled.img`
  height: 42px;
  width: 42px;
  border-radius: 12px;
  box-shadow: 0 8px 18px rgba(4, 36, 200, 0.14);

  @media (max-width: 768px) {
    height: 40px;
    width: 40px;
    margin-left: 0;
  }

  @media (max-width: 576px) {
    height: 36px;
    width: 36px;
    margin-left: 0;
  }
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: 800;
  color: #0f172a;
  letter-spacing: -0.04em;

  @media (max-width: 576px) {
    font-size: 16px;
  }
`;

export const DrawerHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 4px 4px 12px;
`;

export const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const HeaderBrand = styled.button`
  border: none;
  background: transparent;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`;

export const HeaderSpacer = styled.div`
  height: 12px;
`;

export const BrandTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
`;

export const BrandEyebrow = styled.div`
  color: #64748b;
  font-size: 10px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

export const CloseButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 12px;
  border: 1px solid rgba(15, 23, 42, 0.08);
  background: rgba(255, 255, 255, 0.72);
  color: #0f172a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  cursor: pointer;
`;

export const HeaderMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 18px;
  background: #163acb;
  color: white;
  box-shadow: 0 10px 20px rgba(4, 36, 200, 0.1);
`;

export const UserName = styled.div`
  font-size: 15px;
  font-weight: 700;
  line-height: 1.3;
`;

export const RolePill = styled.div`
  padding: 7px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.18);
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

export const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`;

export const ItemHint = styled.div`
  color: ${theme.colors.secondary};
  font-size: clamp(10px, 0.92vw, 12px);
  line-height: 1.4;
`;

export const SideDrawerLink = styled(NavLink)<{ $collapsed?: boolean }>`
  text-decoration: none;
  color: black;
  display: flex;
  justify-content: ${(props) => (props.$collapsed ? "center" : "stretch")};
  align-items: center;
  width: 100%;
  border-radius: 18px;

  &.active {
    background: rgba(255, 255, 255, 0.96);
    ${Icon} {
      filter: invert(20%) sepia(94%) saturate(1500%) hue-rotate(220deg)
        brightness(80%) contrast(150%);
    }

    ${ItemText} .MuiTypography-root {
      color: #0424c8;
    }

    ${ItemHint} {
      color: #3152df;
    }
  }
`;
