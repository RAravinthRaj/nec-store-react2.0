/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import * as S from "./styles";
import { Navbar } from "../Navbar";
import { SideDrawer } from "../../navigator/SideDrawer";
import { useState, ReactNode } from "react";

export interface IPageContainer {
  children: ReactNode;
  showSideBar: boolean;
  showHamburgerIcon: boolean;
}

export const PageContainer = ({
  children,
  showSideBar,
  showHamburgerIcon,
}: IPageContainer) => {
  const [menu, setMenu] = useState(false);

  if (showSideBar) {
    return (
      <S.MainContainer>
        <Navbar
          menu={menu}
          onToggleMenu={() => setMenu(!menu)}
          showHamburgerIcon={showHamburgerIcon}
        />
        <SideDrawer menu={menu} toggleMenu={() => setMenu(!menu)} />
        <S.StyledPageBox>{children}</S.StyledPageBox>
      </S.MainContainer>
    );
  }

  return (
    <S.MainContainer>
      <Navbar
        menu={menu}
        onToggleMenu={() => setMenu(!menu)}
        showHamburgerIcon={showHamburgerIcon}
      />
      <S.StyledPageBox>{children}</S.StyledPageBox>
    </S.MainContainer>
  );
};
