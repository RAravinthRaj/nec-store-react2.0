/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/

import { useEffect, useState } from "react";
import { CustomPagination, Loader, Error } from "../../components";
import { SearchBar, UserDetails } from "./components";
import { useGetAllUsersStore } from "./stores";
import { checkAccessControl, getUserDetails } from "../../utils";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const [tokenId, setTokenId] = useState("");
  const navigate = useNavigate();
  const [payload, setPayload] = useState({
    skip: 0,
    limit: 8,
    name: "",
    email: "",
    orderBy: "ASC",
  });

  useEffect(() => {
    const token = getUserDetails()?.id;
    if (token) setTokenId(token);
  }, []);

  const {
    getAllUsersResponse,
    getAllUsersError,
    fetchGetAllUsers,
    resetGetAllUsers,
  } = useGetAllUsersStore();

  useEffect(() => {
    fetchGetAllUsers(payload);
  }, []);

  const _onPageChange = (page: number) => {
    setPayload((payload: any) => ({
      ...payload,
      skip: (page - 1) * 8,
    }));

    resetGetAllUsers();
    fetchGetAllUsers({
      ...payload,
      skip: (page - 1) * 8,
    });
  };

  const _onSearchPress = () => {
    setPayload((payload: any) => ({
      ...payload,
      skip: 0,
    }));

    resetGetAllUsers();
    fetchGetAllUsers({
      ...payload,
      skip: 0,
    });
  };

  const _onSortPress = (type: string) => {
    setPayload((payload: any) => ({
      ...payload,
      orderBy: type,
      skip: 0,
    }));

    resetGetAllUsers();
    fetchGetAllUsers({
      ...payload,
      orderBy: type,
      skip: 0,
    });
  };

  const _onEditProfilePress = (id: string) => {
    navigate("/profile", {
      state: { id, prevPage: "users" },
    });
  };

  const _renderLoader = () => {
    return null;
  };

  const _renderPage = () => {
    if (getAllUsersResponse && Object.keys(getAllUsersResponse).length > 0) {
      const users = getAllUsersResponse?.payload?.users;
      if (users.length > 0) {
        return (
          <>
            <UserDetails
              Users={users}
              onEditProfilePress={_onEditProfilePress}
              tokenId={tokenId}
            />
            <CustomPagination
              perPageCount={8}
              totalPageCount={getAllUsersResponse?.payload?.totalCount}
              currentPage={payload?.skip / 8 + 1}
              onPageChange={_onPageChange}
            />
          </>
        );
      }

      return (
        <Error
          subtitle="No Data Found"
          buttonTitle="Retry"
          onPress={() => {
            resetGetAllUsers();
            fetchGetAllUsers(payload);
          }}
        />
      );
    }

    if (getAllUsersError && getAllUsersError.length > 0) {
      return (
        <Error
          subtitle={getAllUsersError}
          buttonTitle="Retry"
          onPress={() => {
            resetGetAllUsers();
            fetchGetAllUsers(payload);
          }}
        />
      );
    }

    return <Loader />;
  };

  if (checkAccessControl("users")) {
    return (
      <>
        <SearchBar
          setPayload={setPayload}
          onSearchPress={_onSearchPress}
          onSortPress={_onSortPress}
        />
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

export default Users;
