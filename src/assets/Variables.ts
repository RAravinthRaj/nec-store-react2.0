/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import loader from "../assets/lotties/loader.json";
import signInBgImage from "../assets/images/signIn.png";
import signUpBgImage from "../assets/images/signUp.png";
import admin from "../assets/images/admin.png";
import logo from "../assets/images/logo.png";
import retailer from "../assets/images/retailer.png";
import customer from "../assets/images/customer.png";
import products from "../assets/images/products.png";
import orders from "../assets/images/order.png";
import sales from "../assets/images/sales.png";
import user from "../assets/images/user.png";
import switchRole from "../assets/images/switchRole.png";
import viewProfile from "../assets/images/dashboard.png";
import logout from "../assets/images/logout.png";
import banner from "../assets/images/banner.png";
import history from "../assets/images/history.png";
import error from "../assets/images/error.jpeg";
import defaultProductImage from "../assets/images/defaultProduct.png";
import transactionImage from "../assets/images/transaction.png";
import addStockImage from "../assets/images/addStock.png";

export const theme = {
  colors: {
    primary: "#0424C8",
    secondary: "#207CC9",
    tertiary: "#AEC0DD",
    backGround: "#F1F0EC",
    textSecondary: "#707070",
    secondaryBackGround: "#D9D9D9",
    secondaryOptional: "#9AC4E6",
    white: "#ffffff",
    cancel: "#ED4343",
    swalButton: "#000080",
    red: "#E60023",
    orange: "#FF6F00",
    green: "#2fde21",
    sandal: "#FFECCC",
    paid: "#009124ff",
    unpaid: "#d97540ff",
    delivered: "#009124ff",
    pending: "#d97540ff",
  },
  fonts: {
    sourceSerifPro: "Source Serif Pro",
  },
  images: {
    signInBgImage,
    signUpBgImage,
    logo,
    admin,
    retailer,
    customer,
    products,
    orders,
    sales,
    user,
    switchRole,
    viewProfile,
    logout,
    defaultProductImage,
    banner,
    history,
    error,
    transactionImage,
    addStockImage,
  },
  lotties: {
    loader,
  },
};
