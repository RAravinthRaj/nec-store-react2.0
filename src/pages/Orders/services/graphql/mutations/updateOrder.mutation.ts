/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { gql } from "@apollo/client";

export const UPDATE_ORDER = gql`
  mutation Mutation($input: UpdateOrderStatusInput!) {
    updateOrder(input: $input) {
      message
      order {
        createdAt
        deliveryStatus
        id
        orderBy
        orderId
        orderStatus
        paidStatus
        products {
          category {
            id
            name
            updatedAt
            createdAt
          }
          createdAt
          id
          price: buyingPrice
          productImage
          quantity
          title
          updatedAt
        }
        rollNumber
        totalAmount
        updatedAt
      }
    }
  }
`;
