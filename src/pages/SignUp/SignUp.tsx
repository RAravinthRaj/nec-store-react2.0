/*
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { ContainerComp } from "./components";
import { useCreateUserStore } from "./stores";
import { CreateUserParams } from "./services/rest";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../components";
import { toast } from "react-toastify";
import { useEffect } from "react";

const SignUp = () => {
  const {
    createUserResponse,
    createUserError,
    createUserLoading,
    fetchCreateUser,
    resetCreateUser,
  } = useCreateUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (createUserResponse && Object.keys(createUserResponse).length > 0) {
      setTimeout(() => {
        toast.success("Sign up successful !!!");
      }, 1000);

      navigate("/signin");
      resetCreateUser();
    }
  }, [createUserResponse && Object.keys(createUserResponse).length > 0]);

  useEffect(() => {
    if (createUserError && createUserError.length > 0) {
      resetCreateUser();
      toast.error(createUserError);
    }
  }, [createUserError && createUserError.length > 0]);

  const _handleSignUp = (data: CreateUserParams) => {
    fetchCreateUser(data);
  };

  const _renderLoader = () => {
    if (createUserLoading) {
      return <Loader useModalLoader />;
    }

    return null;
  };

  const _renderPage = () => {
    return <ContainerComp onSignUpPress={_handleSignUp} />;
  };

  return (
    <>
      {_renderLoader()}
      {_renderPage()}
    </>
  );
};

export default SignUp;
