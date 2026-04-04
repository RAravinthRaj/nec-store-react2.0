/*
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { fetchSessionUser } from "../../utils";
import { ContainerComp } from "./components";
import { useSignInStore, useVerifyOtpStore } from "./stores";
import { SignInParams, verifyOTPParams } from "./services/rest";
import { Loader } from "../../components";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const {
    signInResponse,
    signInError,
    signInLoading,
    fetchSignIn,
    resetSignIn,
  } = useSignInStore();

  const {
    verifyOtpResponse,
    verifyOtpError,
    verifyOtpLoading,
    fetchVerifyOtp,
    resetVerifyOtp,
  } = useVerifyOtpStore();

  const navigate = useNavigate();
  const [OTPVisible, setOTPVisible] = useState(false);

  useEffect(() => {
    if (signInResponse && Object.keys(signInResponse).length > 0) {
      resetSignIn();
      setOTPVisible(true);
      setTimeout(() => {
        toast.success("OTP sent successfully !!!");
      }, 1000);
    }
  }, [signInResponse && Object.keys(signInResponse).length > 0]);

  useEffect(() => {
    if (verifyOtpResponse && Object.keys(verifyOtpResponse).length > 0) {
      const syncSessionAndNavigate = async () => {
        const hasSingleCustomerRole =
          verifyOtpResponse?.requiresRoleSelection === false &&
          verifyOtpResponse?.selectedRole === "customer";
        toast.success("Signed in successfully !!!");

        if (hasSingleCustomerRole) {
          await fetchSessionUser();
          navigate("/");
        } else {
          navigate("/roles");
        }

        resetSignIn();
        resetVerifyOtp();
      };

      void syncSessionAndNavigate();
    }
  }, [verifyOtpResponse]);

  useEffect(() => {
    if (signInError && signInError.length > 0) {
      resetSignIn();
      toast.error(signInError);
    }
  }, [signInError && signInError.length > 0]);

  useEffect(() => {
    if (verifyOtpError && verifyOtpError.length > 0) {
      resetVerifyOtp();
      toast.error(verifyOtpError);
    }
  }, [verifyOtpError && verifyOtpError.length > 0]);

  const _handleSignIn = (data: SignInParams) => {
    fetchSignIn(data);
  };

  const _verifyOTP = (data: verifyOTPParams) => {
    fetchVerifyOtp(data);
  };

  const _renderLoader = () => {
    if (signInLoading || verifyOtpLoading) {
      return <Loader useModalLoader />;
    }

    return null;
  };

  const _renderPage = () => {
    return (
      <ContainerComp
        OTPVisible={OTPVisible}
        onSignInPress={_handleSignIn}
        onVerifyOTPPress={_verifyOTP}
      />
    );
  };

  return (
    <>
      {_renderLoader()}
      {_renderPage()}
    </>
  );
};

export default SignIn;
