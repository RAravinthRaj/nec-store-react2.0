/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useTheme, useIsNotDesktop } from "../../hooks";
import * as S from "./styles";
import { NAVBAR_CONFIG } from "./config";
import { Link, useNavigate } from "react-router-dom";
import { AppBar } from "@mui/material";
import { useEffect, useState } from "react";
import { getUserDetails, logoutUser, removeItemInLocalStorage } from "../../utils";
import { Notification, Recent } from "../../pages";

interface IUserData {
  id?: string;
  name: string;
  profilePicture?: string;
  role?: string;
  roles?: string[];
}

export interface INavbar {
  menu: boolean;
  onToggleMenu: (newMenuState: boolean) => void;
  showHamburgerIcon: boolean;
}

export const Navbar = ({ menu, onToggleMenu, showHamburgerIcon }: INavbar) => {
  const theme = useTheme();
  const [userData, setUserData] = useState<IUserData>({ name: "" });
  const isMobile = useIsNotDesktop();
  const navigate = useNavigate();

  useEffect(() => {
    const syncUser = (e?: any) => {
      const currentUserData = getUserDetails();
      const eventUserData = e?.detail;
      const newUserData =
        eventUserData &&
        currentUserData?.id &&
        eventUserData?.id === currentUserData.id
          ? eventUserData
          : currentUserData?.name
            ? currentUserData
            : { name: "" };

      setUserData((prev) => {
        if (JSON.stringify(prev) !== JSON.stringify(newUserData)) {
          return newUserData;
        }
        return prev;
      });
    };

    syncUser();

    window.addEventListener("storage", syncUser);
    window.addEventListener("user-updated", syncUser);

    return () => {
      window.removeEventListener("storage", syncUser);
      window.removeEventListener("user-updated", syncUser);
    };
  }, []);

  const _toggleMenu = () => {
    onToggleMenu(!menu);
  };

  const _onDropDownItemClick = (id: string, link: string) => {
    if (id === "switchRole") {
      navigate("/roles");
      return;
    } else if (id === "logOut") {
      void logoutUser();
      removeItemInLocalStorage("cartProducts");
      removeItemInLocalStorage("totalPrice");
      navigate("/signin");
      return;
    } else if (id === "profile") {
      navigate("/profile", { state: { id: userData?.id, prevPage: "navbar" } });
      return;
    }
    navigate(link);
  };

  const _renderTitle = () => {
    return (
      <S.BrandGroup>
        {showHamburgerIcon && (
          <S.MenuButton
            type="button"
            onClick={_toggleMenu}
            aria-label="Open navigation menu"
            $bgColor={theme.colors.primary}
          >
            <S.Icon $bgColor={theme.colors.primary} />
          </S.MenuButton>
        )}
        <S.BrandLink to="/">
          <S.Logo
            src={theme.images.logo}
            $isProfilePage={showHamburgerIcon}
          />
          <S.BrandTextWrap>
            <S.BrandEyebrow>Campus Store</S.BrandEyebrow>
            <S.TitleText>{NAVBAR_CONFIG.title}</S.TitleText>
          </S.BrandTextWrap>
        </S.BrandLink>
      </S.BrandGroup>
    );
  };

  const _renderUserName = () => {
    const firstName = userData?.name?.split(" ")[0] ?? "";
    if (!isMobile && firstName) {
      return (
        <S.UserMeta>
          <S.UserMetaLabel>Signed in</S.UserMetaLabel>
          <S.UserName $bgColor={theme.colors.primary}>{firstName}</S.UserName>
        </S.UserMeta>
      );
    }
    return null;
  };

  const _renderUserNameSM = () => {
    const firstName = userData?.name?.split(" ")[0] ?? "";
    if (isMobile && firstName) {
      return (
        <S.MobileNameContainer>
          <S.UserName
            $bgColor={theme.colors.primary}
          >{`Hii, ${firstName} !!`}</S.UserName>
          <S.UserNameDivider />
        </S.MobileNameContainer>
      );
    }
    return null;
  };

  const _renderUserImage = () => (
    <S.ImageBackGround>
      <S.UserImage
        src={userData?.profilePicture ?? theme.images.user}
      ></S.UserImage>
    </S.ImageBackGround>
  );

  const navBarOptions = NAVBAR_CONFIG.navBarOptions.filter((item: any) => {
    if (item.id !== "switchRole") return true;

    return Array.isArray(userData?.roles) && userData.roles.length > 1;
  });

  const _renderDropDownItem = () =>
    navBarOptions.map((item: any, index: number) => (
      <div key={item.id}>
        <S.DropdownItem
          onClick={() => _onDropDownItemClick(item.id, item.link)}
          $bgColor={theme.colors.primary}
        >
          <S.ItemIcon src={item.imageSrc} />
          <S.IconText>{item.title}</S.IconText>
        </S.DropdownItem>
        {index !== navBarOptions.length - 1 && <S.NameDivider />}
      </div>
    ));

  const _renderDropDownMenu = () => (
    <S.DropdownMenu $bgColor={theme.colors.white}>
      {_renderUserNameSM()}
      {_renderDropDownItem()}
    </S.DropdownMenu>
  );

  const _renderDropDown = () => (
    <S.CustomDropdown
      title={_renderUserImage()}
      className="custom-nav-dropdown"
    >
      {_renderDropDownMenu()}
    </S.CustomDropdown>
  );

  const _recentViewed = () => {
    if (!isMobile && getUserDetails()?.role === "customer") {
      return <Recent />;
    }
  };

  const _renderQuickActions = () => {
    if (isMobile) {
      return null;
    }

    return (
      <>
        <Notification />
        {_recentViewed()}
      </>
    );
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: 30 }}>
      <S.NavbarContainer $bgColor={theme.colors.secondaryOptional}>
        <S.NavbarInner>
          <S.TitleContainer>{_renderTitle()}</S.TitleContainer>
          <S.UserContainer>
            {_renderDropDown()}
            {_renderUserName()}
            {_renderQuickActions()}
          </S.UserContainer>
        </S.NavbarInner>
      </S.NavbarContainer>
    </AppBar>
  );
};
