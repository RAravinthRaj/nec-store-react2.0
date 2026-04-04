/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useTheme } from "../../../../hooks";
import { SignUpForm } from "../SignUpForm";
import * as S from "./styles";
import { CreateUserParams } from "../../services/rest";

export interface IContainerComp {
  onSignUpPress: (data: CreateUserParams) => void;
}

export const ContainerComp = ({ onSignUpPress }: IContainerComp) => {
  const theme = useTheme();

  const _renderImageComp = () => {
    return (
      <S.ImageCompContainer $bgColor={theme.colors.backGround}>
        <S.Logo src={theme.images.logo} />
        <S.SignInBgImage src={theme.images.signUpBgImage} />
      </S.ImageCompContainer>
    );
  };

  return (
    <S.MainContainer>
      {_renderImageComp()}
      <SignUpForm onSignUpPress={onSignUpPress} />
    </S.MainContainer>
  );
};
