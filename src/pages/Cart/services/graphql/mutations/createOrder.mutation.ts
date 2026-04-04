/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { gql } from "@apollo/client";

export const CREATE_ORDER = gql`
  mutation Mutation($products: [OrderProductInput!]!) {
    createOrder(products: $products) {
      message
      order {
        orderBy
        orderId
        orderStatus
        paidStatus
        products {
          id
          price: buyingPrice
          productImage
          quantity
          title
          updatedAt
          createdAt
          category {
            createdAt
            id
            name
            updatedAt
          }
        }
        id
        deliveryStatus
        createdAt
        totalAmount
        updatedAt
      }
    }
  }
`;
