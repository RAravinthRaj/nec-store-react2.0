/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useTheme } from "../../../../hooks";
import * as S from "./styles";
import { useState } from "react";
import { AddRoleModal } from "../AddRole";
import { EditProfileModal } from "../EditProfile";
import { PROFILE_CONFIG } from "../../config";
import { useSwalComp } from "../../../../components";
import { useNavigate } from "react-router-dom";

export interface IContainerComp {
  prevPage: string;
  user: any;
  onChangeUserStatus(status: string): void;
  onAddRole(roles: string): void;
  onEditProfile(
    name?: string,
    email?: string,
    rollNumber?: string,
    department?: string,
    profilePicture?: string | null
  ): void;
}

export const ContainerComp = ({
  prevPage,
  user,
  onChangeUserStatus,
  onAddRole,
  onEditProfile,
}: IContainerComp) => {
  const theme = useTheme();
  const [openRole, setOpenRole] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const navigate = useNavigate();

  const showSwal = useSwalComp();
  const _setUserStatus = () => {
    if (user?.status === PROFILE_CONFIG.userStatus.active) {
      showSwal({
        title: "Block User",
        subtitle: "Are you sure you want to block this user?",
        type: "warning",
        confirmButtonText: "Yes, Block",
        cancelButtonText: "Cancel",
        onConfirmedPress: () => {
          onChangeUserStatus("suspended");
        },
      });
    } else {
      showSwal({
        title: "Permit User",
        subtitle: "Are you sure you want to permit this user?",
        type: "warning",
        confirmButtonText: "Yes, Permit",
        cancelButtonText: "Cancel",
        onConfirmedPress: () => {
          onChangeUserStatus("active");
        },
      });
    }
  };

  const _renderBanner = () => {
    return (
      <>
        <S.PreviousPageLink
          onClick={() => {
            navigate(-1);
          }}
        />
        <S.BannerContainer src={theme.images.banner} />
      </>
    );
  };

  const _renderUserImage = () => {
    return (
      <S.UserImageContainer>
        <S.UserImage
          src={user?.profilePicture ?? theme.images.user}
          alt="User Profile"
        />
      </S.UserImageContainer>
    );
  };

  const _renderDetails = () => {
    return (
      <S.DetailsContainer>
        <S.EmailContainer>
          <S.Title $color={theme.colors.textSecondary}>
            {PROFILE_CONFIG.email}
          </S.Title>
          {user?.email}
        </S.EmailContainer>
        <S.DeptContainer>
          <S.Title $color={theme.colors.textSecondary}>
            {PROFILE_CONFIG.department}
          </S.Title>
          {user?.department}
        </S.DeptContainer>
        <S.RollContainer>
          <S.Title $color={theme.colors.textSecondary}>
            {PROFILE_CONFIG.rollNumber}
          </S.Title>
          {user?.rollNumber}
        </S.RollContainer>
      </S.DetailsContainer>
    );
  };

  const _renderData = () => {
    return (
      <S.DataContainer>
        <S.NameContainer>{user?.name}</S.NameContainer>
        {_renderDetails()}
      </S.DataContainer>
    );
  };

  const _renderButton = () => {
    if (prevPage === "users") {
      return (
        <S.ButtonContainer>
          <S.Button
            $bgColor={theme.colors.red}
            $isBlock={user?.status === PROFILE_CONFIG.userStatus.suspended}
            onClick={() => {
              _setUserStatus();
            }}
          >
            <S.BlockIcon />
            {PROFILE_CONFIG.block}
          </S.Button>
          <S.Button
            $bgColor={theme.colors.green}
            $isBlock={user?.status === PROFILE_CONFIG.userStatus.active}
            onClick={() => {
              _setUserStatus();
            }}
          >
            <S.PermitIcon /> {PROFILE_CONFIG.permit}
          </S.Button>
        </S.ButtonContainer>
      );
    }

    return null;
  };

  const _renderModals = () => {
    const userRoles = PROFILE_CONFIG?.roles.filter(
      (role) => !user?.roles.includes(role)
    );

    return (
      <>
        <AddRoleModal
          modalShow={openRole}
          email={user?.email}
          roles={userRoles}
          onAddRole={onAddRole}
          onClose={() => {
            setOpenRole(false);
          }}
        />
        <EditProfileModal
          modalShow={openEdit}
          onClose={() => {
            setOpenEdit(false);
          }}
          onEditProfile={onEditProfile}
          user={user}
        />
      </>
    );
  };

  const _renderAddRole = () => {
    if (prevPage === "users" && user?.roles.length < 3) {
      return (
        <S.AddCircle
          $bgColor={theme.colors.sandal}
          onClick={() => {
            setOpenRole(true);
          }}
        >
          <S.RoleAddIcon />
        </S.AddCircle>
      );
    }
  };

  const _editRoles = () => {
    return (
      <S.RoleContainer>
        {user?.roles.map((role: string, index: number) => {
          return (
            <S.Circle
              title={role}
              key={index}
              $bgColor={theme.colors[PROFILE_CONFIG[role]]}
              $textColor={theme.colors.white}
              $isNotFirst={index !== 0}
            >
              {role.charAt(0).toUpperCase()}
            </S.Circle>
          );
        })}
        {_renderAddRole()}
      </S.RoleContainer>
    );
  };

  const _renderRoles = () => {
    return (
      <S.EditContainer>
        {_editRoles()}
        <S.EditIcon
          onClick={() => {
            setOpenEdit(true);
          }}
        />
      </S.EditContainer>
    );
  };

  const _mainContainerItems = () => {
    return (
      <div>
        <S.UserContainer>
          {_renderUserImage()}
          {_renderRoles()}
        </S.UserContainer>
        <S.DataContainer>
          {_renderData()}
          {_renderButton()}
        </S.DataContainer>
        {_renderModals()}
      </div>
    );
  };

  return (
    <S.ProfileContainer>
      {_renderBanner()}
      {_mainContainerItems()}
    </S.ProfileContainer>
  );
};
