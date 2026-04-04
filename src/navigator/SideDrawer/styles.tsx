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

export const DrawerBox = styled(Box)`
  height: 100%;
`;

export const Icon = styled.img<{ $bgColor: string }>`
  height: 30px;
  width: 30px;

  @media (max-width: 768px) {
    height: 10%;
    width: 10%;
  }

  @media (max-width: 576px) {
    height: 13%;
    width: 13%;
  }
`;

export const Divider = styled.div`
  border: solid 0.5px black;
  width: 85%;
  margin: 0 15px;
  transform: scaleY(0.1);

  @media (max-width: 768px) {
    margin: 5px 15px;
    transform: scaleY(0.1);
  }

  @media (max-width: 576px) {
    margin: 0 15px;
  }
`;

export const Item = styled(ListItemButton)`
  padding: 20px;
  gap: 10px;
`;

export const CustomList = styled(List)`
  margin-top: 2%;
`;

export const ItemText = styled(ListItemText)`
  .MuiTypography-root {
    font-weight: 550;
    font-size: 20px;
  }

  @media (max-width: 768px) {
    .MuiTypography-root {
      font-weight: 550;
      font-size: 19px;
    }
  }

  @media (max-width: 576px) {
    .MuiTypography-root {
      font-weight: 550;
      font-size: 16px;
    }
  }
`;

export const ItemContainer = styled(ListItem)<{
  $hoverBgColor: string;
}>`
  padding: 3px;

  &:hover {
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
  height: 22%;
  width: 22%;

  @media (max-width: 768px) {
    height: 15%;
    width: 15%;
    margin-left: -6px;
  }

  @media (max-width: 576px) {
    height: 20%;
    width: 20%;
    margin-left: -6px;
  }
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: 600;

  @media (max-width: 576px) {
    font-weight: 550;
    font-size: 15px;
  }
`;

export const SideDrawerLink = styled(NavLink)`
  text-decoration: none;
  color: black;

  &.active {
    ${Icon} {
      filter: invert(20%) sepia(94%) saturate(1500%) hue-rotate(220deg)
        brightness(80%) contrast(150%);
    }
  }
`;
