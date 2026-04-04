/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useTheme } from "../../../../hooks";
import { SignInParams, verifyOTPParams } from "../../services/rest";
import { SignInForm } from "../SignInForm";
import * as S from "./styles";

export interface IContainerComp {
  OTPVisible: boolean;
  onSignInPress: (data: SignInParams) => void;
  onVerifyOTPPress: (data: verifyOTPParams) => void;
}

export const ContainerComp = ({
  OTPVisible,
  onSignInPress,
  onVerifyOTPPress,
}: IContainerComp) => {
  const theme = useTheme();

  const _renderImageComp = () => {
    return (
      <S.ImageCompContainer $bgColor={theme.colors.backGround}>
        <S.Logo src={theme.images.logo} />
        <S.SignInBgImage src={theme.images.signInBgImage} />
      </S.ImageCompContainer>
    );
  };

  return (
    <S.MainContainer>
      {_renderImageComp()}
      <SignInForm
        OTPVisible={OTPVisible}
        onSignInPress={onSignInPress}
        onVerifyOTPPress={onVerifyOTPPress}
      />
    </S.MainContainer>
  );
};
