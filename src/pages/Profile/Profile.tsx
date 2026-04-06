/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useEffect, useRef } from "react";
import { ContainerComp } from "./components";
import { useGetUserStore, useUpdateUserStore } from "./stores";
import { Error, Loader } from "../../components";
import { useLocation, useNavigate } from "react-router-dom";
import { checkAccessControl, fetchSessionUser } from "../../utils";
import { Id, toast } from "react-toastify";

const Profile = () => {
  const location = useLocation();
  const prevPage = location.state?.prevPage;
  const userId = location.state?.id;

  const navigate = useNavigate();
  const updateToastIdRef = useRef<Id | null>(null);

  const { getUserResponse, getUserError, fetchGetUser, resetGetUser } =
    useGetUserStore();
  const {
    updateUserResponse,
    updateUserError,
    updateUserLoading,
    fetchUpdateUser,
    resetUpdateUser,
  } = useUpdateUserStore();

  useEffect(() => {
    if (userId) {
      fetchGetUser(userId);
    }

    return () => {
      resetGetUser();
    };
  }, [userId, fetchGetUser, resetGetUser]);

  const _getUserData = () => {
    resetGetUser();
    fetchGetUser(userId);
  };

  const _showPendingToast = (message: string) => {
    updateToastIdRef.current = toast.loading(message);
  };

  const _resolvePendingToast = (type: "success" | "error", message: string) => {
    if (updateToastIdRef.current !== null) {
      toast.update(updateToastIdRef.current, {
        render: message,
        type,
        isLoading: false,
        autoClose: 3000,
        closeButton: true,
      });
      updateToastIdRef.current = null;
      return;
    }

    toast[type](message);
  };

  useEffect(() => {
    if (updateUserResponse && Object.keys(updateUserResponse).length > 0) {
      resetUpdateUser();
      _getUserData();

      if (prevPage === "navbar") {
        void fetchSessionUser();
      }
      _resolvePendingToast("success", "User Updated Successfully !!");
    }
  }, [updateUserResponse, prevPage, resetUpdateUser]);

  useEffect(() => {
    if (updateUserError && updateUserError.length > 0) {
      resetUpdateUser();
      _resolvePendingToast("error", updateUserError);
    }
  }, [updateUserError, resetUpdateUser]);

  const _renderLoader = () => {
    if (updateUserLoading) {
      return <Loader useModalLoader />;
    }

    return null;
  };

  const _onChangeUserStatus = (status: string) => {
    _showPendingToast("Updating user status...");
    fetchUpdateUser({ id: userId, status });
  };

  const _addRole = (roles: string) => {
    _showPendingToast("Updating user role...");
    fetchUpdateUser({ id: userId, roles: [roles] });
  };

  const _editProfile = async (
    name?: string,
    email?: string,
    rollNumber?: string,
    department?: string,
    profilePicture?: string | null
  ) => {
    _showPendingToast("Updating profile...");
    return fetchUpdateUser({
      id: userId,
      name,
      email,
      rollNumber,
      department,
      profilePicture,
    });
  };

  const _renderPage = () => {
    if (getUserResponse && Object.keys(getUserResponse).length > 0) {
      return (
        <ContainerComp
          prevPage={prevPage}
          user={getUserResponse?.payload?.user}
          onChangeUserStatus={_onChangeUserStatus}
          onAddRole={_addRole}
          onEditProfile={_editProfile}
        />
      );
    }

    if (getUserError && getUserError.length > 0) {
      return (
        <Error
          subtitle={getUserError}
          buttonTitle="Retry"
          onPress={_getUserData}
        />
      );
    }

    return <Loader />;
  };

  if (checkAccessControl("profile")) {
    return (
      <>
        {_renderPage()}
        {_renderLoader()}
      </>
    );
  }

  return (
    <Error
      subtitle="Page Not Found"
      buttonTitle="Go to Home"
      onPress={() => {
        navigate("/");
      }}
    />
  );
};

export default Profile;
