/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/

import { theme } from "../../../assets/Variables";

export const SIDE_DRAWER_CONFIG = {
  title: "NEC STORE",
  descriptions: {
    products: "Browse and manage the product catalog",
    "add-stock": "Update stock levels and pricing",
    orders: "Track and process incoming orders",
    sales: "Review sales movement and reports",
    transactions: "Inspect payment and transaction logs",
    history: "See completed customer purchases",
    users: "Manage customer and user records",
  },
  Actions: [
    {
      id: "products",
      title: "Products",
      imageSrc: theme.images.products,
      link: "/products",
    },
    {
      id: "add-stock",
      title: "Add Stock",
      imageSrc: theme.images.addStockImage,
      link: "/add-stock",
    },
    {
      id: "orders",
      title: "Orders",
      imageSrc: theme.images.orders,
      link: "/orders",
    },
    {
      id: "sales",
      title: "Sales",
      imageSrc: theme.images.sales,
      link: "/sales",
    },
    {
      id: "transactions",
      title: "Transactions",
      imageSrc: theme.images.transactionImage,
      link: "/transactions",
    },
    {
      id: "history",
      title: "History",
      imageSrc: theme.images.history,
      link: "/history",
    },
    {
      id: "users",
      title: "Users",
      imageSrc: theme.images.customer,
      link: "/users",
    },
  ],
};
