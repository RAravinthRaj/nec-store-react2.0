/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useTheme } from "../../../../hooks";
import * as S from "./styles";
import { USERS_CONFIG } from "../../config";

export interface IUserDetails {
  Users: any;
  onEditProfilePress(id: string): void;
  tokenId: string;
}

export const UserDetails = ({
  Users,
  onEditProfilePress,
  tokenId,
}: IUserDetails) => {
  const theme = useTheme();

  const _renderRoles = (roles_params: any) => {
    return (
      <S.TitleComp>
        {roles_params.map((role: string, index: number) => {
          const color = theme.colors[USERS_CONFIG[role]];
          return (
            <S.Circle
              title={role}
              key={index}
              $bgColor={color}
              $textColor={theme.colors.white}
              $isNotFirst={index !== 0}
            >
              {role.charAt(0).toUpperCase()}
            </S.Circle>
          );
        })}
      </S.TitleComp>
    );
  };

  const _renderUserData = () => {
    return (
      <div>
        {Users.map((item: any, index: number) => (
          <div key={index}>
            <S.ItemBox isOddIndex={index % 2 == 0}>
              {Object.entries(item)?.map(([key, value], index) => {
                if (key === "id") {
                  return null;
                } else if (key === "roles") {
                  return (
                    <S.TitleComp key={index}>{_renderRoles(value)}</S.TitleComp>
                  );
                }
                return <S.TitleComp key={index}>{value}</S.TitleComp>;
              })}

              <S.TitleComp>
                <S.Button
                  onClick={() => onEditProfilePress(item?.id)}
                  $bgColor={theme.colors.primary}
                  $canEdit={tokenId !== item?.id}
                >
                  {USERS_CONFIG.button}
                </S.Button>
              </S.TitleComp>
            </S.ItemBox>
          </div>
        ))}
      </div>
    );
  };

  return (
    <S.UserContainer>
      <S.TitleBox $bgColor={theme.colors.secondaryBackGround}>
        {USERS_CONFIG.title?.map((data, index) => (
          <S.TitleComp key={index}>{data}</S.TitleComp>
        ))}
      </S.TitleBox>
      <S.Wrapper>{_renderUserData()}</S.Wrapper>
    </S.UserContainer>
  );
};
