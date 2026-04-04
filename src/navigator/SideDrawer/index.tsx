/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import Drawer from "@mui/material/Drawer";
import * as S from "./styles";
import { useTheme, useIsNotDesktop } from "../../hooks";
import { SIDE_DRAWER_CONFIG } from "./config";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { SIDE_DRAWER_ROLE_MANAGEMENT } from "../../config";
import { getUserDetails } from "../../utils";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

export interface ISideDrawer {
  menu: boolean;
  toggleMenu: () => void;
}

export const SideDrawer = ({ menu, toggleMenu }: ISideDrawer) => {
  const theme = useTheme();
  const isMobile = useIsNotDesktop();
  const navigate = useNavigate();
  const [actions, setActions] = useState<any>([]);
  const userDetails = getUserDetails();
  const desktopDrawerWidth = menu ? 240 : 72;

  useEffect(() => {
    const syncActions = () => {
      const userData = getUserDetails();

      if (userData?.role && userData?.role.length > 0) {
        const role = SIDE_DRAWER_ROLE_MANAGEMENT.roles[userData?.role];
        const action = SIDE_DRAWER_CONFIG.Actions.filter((action) =>
          role.includes(action.id)
        );

        setActions(action);
        return;
      }

      setActions([]);
    };

    syncActions();
    window.addEventListener("user-updated", syncActions);
    window.addEventListener("storage", syncActions);

    return () => {
      window.removeEventListener("user-updated", syncActions);
      window.removeEventListener("storage", syncActions);
    };
  }, [navigate]);

  const handleCloseMenu = () => {
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    toggleMenu();
  };

  const _renderHeaderSM = () => {
    return (
      <S.DrawerHeader>
        <S.HeaderTop>
          {isMobile ? (
            <S.CloseButton type="button" onClick={handleCloseMenu}>
              <IoClose />
            </S.CloseButton>
          ) : (
            <S.HeaderSpacer />
          )}
        </S.HeaderTop>
        {menu && (
          <S.HeaderMeta>
            <S.UserName>{userDetails?.name || "Guest User"}</S.UserName>
            <S.RolePill>{userDetails?.role || "user"}</S.RolePill>
          </S.HeaderMeta>
        )}
      </S.DrawerHeader>
    );
  };

  const _renderNavigationList = () => {
    if (actions && actions.length > 0) {
      return (
        <S.CustomList $collapsed={!menu}>
          {menu ? _renderHeaderSM() : null}
          {actions?.map((item: any) => (
            <div key={item.id}>
              <S.ItemContainer
                $hoverBgColor={theme.colors.primary}
                $collapsed={!menu}
                disablePadding
              >
                <S.SideDrawerLink
                  to={item.link}
                  $collapsed={!menu}
                  style={({ isActive }) => ({
                    color: isActive ? theme.colors.primary : "inherit",
                    display: "block",
                    width: "100%",
                  })}
                >
                  <S.Item $collapsed={!menu}>
                    <S.Icon
                      $bgColor={theme.colors.primary}
                      src={item.imageSrc}
                    />
                    {menu ? (
                      <S.ItemContent>
                        <S.ItemText primary={item.title} />
                        <S.ItemHint>
                          {SIDE_DRAWER_CONFIG.descriptions[item.id] || "Open page"}
                        </S.ItemHint>
                      </S.ItemContent>
                    ) : null}
                  </S.Item>
                </S.SideDrawerLink>
              </S.ItemContainer>
            </div>
          ))}
        </S.CustomList>
      );
    }

    return null;
  };

  const _renderDrawer = () => {
    return (
      <S.DrawerBox onClick={isMobile ? handleCloseMenu : () => {}}>
        {_renderNavigationList()}
      </S.DrawerBox>
    );
  };

  if (isMobile) {
    return (
      <Box>
        <Drawer
          open={menu}
          onClose={toggleMenu}
          slotProps={{
            paper: {
              style: {
                width: "84%",
                maxWidth: "340px",
                backgroundColor: "#cfdbff",
              },
            },
          }}
        >
          {_renderDrawer()}
        </Drawer>
      </Box>
    );
  }

  return (
    <Drawer
      open={true}
      variant="permanent"
      slotProps={{
        paper: {
          style: {
            width: `${desktopDrawerWidth}px`,
            marginTop: "78px",
            zIndex: 0,
            backgroundColor: "#cfdbff",
            borderRight: "1px solid rgba(4, 36, 200, 0.12)",
            transition: "width 0.24s ease",
            overflowX: "hidden",
          },
        },
      }}
      sx={{
        width: desktopDrawerWidth,
        zIndex: 0,
        flexShrink: 0,
        transition: "width 0.24s ease",
      }}
    >
      <Box sx={{ overflow: "auto" }}>{_renderDrawer()}</Box>
    </Drawer>
  );
};
