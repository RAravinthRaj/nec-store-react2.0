/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
export const SIDE_DRAWER_ROLE_MANAGEMENT = {
  roles: {
    customer: ["products", "history"],
    retailer: ["products", "add-stock", "orders", "sales", "transactions"],
    admin: ["users"],
  },
};

export const ACCESS_CONTROL_MANAGEMENT = {
  roles: {
    customer: ["products", "history", "profile"],
    retailer: [
      "products",
      "add-stock",
      "orders",
      "sales",
      "transactions",
      "profile",
    ],
    admin: ["users", "profile"],
  },
};

export const ROLES = {
  admin: "admin",
  retailer: "retailer",
  customer: "customer",
};
