/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { gql } from "@apollo/client";

export const GET_ALL_ORDERS = gql`
  query GetAllOrders(
    $skip: Int
    $limit: Int
    $orderId: String
    $userId: String
    $rollNumber: String
    $orderBy: OrderBy
  ) {
    getAllOrders(
      skip: $skip
      limit: $limit
      orderId: $orderId
      userId: $userId
      rollNumber: $rollNumber
      orderBy: $orderBy
    ) {
      orders {
        createdAt
        deliveryStatus
        id
        orderBy
        orderId
        orderStatus
        paidStatus
        products {
          updatedAt
          title
          quantity
          productImage
          price: buyingPrice
          id
          createdAt
          category {
            createdAt
            id
            name
            updatedAt
          }
        }
        rollNumber
        totalAmount
        updatedAt
      }
      totalCount
    }
  }
`;
