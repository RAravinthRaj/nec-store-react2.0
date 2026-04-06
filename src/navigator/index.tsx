/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import {
  SignIn,
  SignUp,
  RoleSelection,
  Products,
  AddStock,
  Orders,
  Sales,
  Transactions,
  Carts,
  MyOrders,
  Users,
  Profile,
  Landing,
} from "../pages";
import { Routes, Route } from "react-router-dom";
import { PageContainer } from "../components";
import Error from "../components/Error";
import { logoutUser, removeItemInLocalStorage } from "../utils";

export const Navigator = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/roles" element={<RoleSelection />} />
      <Route
        path="/products"
        element={
          <PageContainer showSideBar={true} showHamburgerIcon={true}>
            <Products />
          </PageContainer>
        }
      />
      <Route
        path="/add-stock"
        element={
          <PageContainer showSideBar={true} showHamburgerIcon={true}>
            <AddStock />
          </PageContainer>
        }
      />
      <Route
        path="/orders"
        element={
          <PageContainer showSideBar={true} showHamburgerIcon={true}>
            <Orders />
          </PageContainer>
        }
      />
      <Route
        path="/sales"
        element={
          <PageContainer showSideBar={true} showHamburgerIcon={true}>
            <Sales />
          </PageContainer>
        }
      />
      <Route
        path="/transactions"
        element={
          <PageContainer showSideBar={true} showHamburgerIcon={true}>
            <Transactions />
          </PageContainer>
        }
      />
      <Route
        path="/carts"
        element={
          <PageContainer showSideBar={false} showHamburgerIcon={false}>
            <Carts />
          </PageContainer>
        }
      />
      <Route
        path="/history"
        element={
          <PageContainer showSideBar={true} showHamburgerIcon={true}>
            <MyOrders />
          </PageContainer>
        }
      />
      <Route
        path="/users"
        element={
          <PageContainer showSideBar={true} showHamburgerIcon={true}>
            <Users />
          </PageContainer>
        }
      />
      <Route
        path="/profile"
        element={
          <PageContainer showSideBar={false} showHamburgerIcon={false}>
            <Profile />
          </PageContainer>
        }
      />
      <Route
        path="*"
        element={
          <Error
            title="Access Restricted"
            subtitle="You cannot access this page. Please go back to the sign in page."
            buttonTitle="Go to Home"
            onPress={async () => {
              const loggedOut = await logoutUser();
              if (!loggedOut) {
                window.location.href = "/signin";
                return;
              }
              removeItemInLocalStorage("token");
              removeItemInLocalStorage("signInToken");
              removeItemInLocalStorage("cartProducts");
              removeItemInLocalStorage("totalPrice");
              window.location.href = "/signin";
            }}
          />
        }
      />
    </Routes>
  );
};
