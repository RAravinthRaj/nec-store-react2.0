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
