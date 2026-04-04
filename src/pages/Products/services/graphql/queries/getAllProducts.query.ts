/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { gql } from "@apollo/client";

export const GET_ALL_PRODUCTS = gql`
  query GetAllProducts(
    $skip: Int
    $limit: Int
    $orderBy: OrderBy
    $categoryId: ID
    $title: String
    $productIds: [ID!]
    $isRecentProduct: Boolean
  ) {
    getAllProducts(
      skip: $skip
      limit: $limit
      orderBy: $orderBy
      categoryId: $categoryId
      title: $title
      productIds: $productIds
      isRecentProduct: $isRecentProduct
    ) {
      products {
        category {
          createdAt
          id
          name
          updatedAt
        }
        createdAt
        id
        price: buyingPrice
        sellingPrice
        productImage
        quantity
        title
        updatedAt
      }
      totalCount
    }
  }
`;
