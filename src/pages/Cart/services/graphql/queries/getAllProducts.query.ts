/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { gql } from "@apollo/client";

export const GET_ALL_PRODUCTS = gql`
  query GetAllProducts($skip: Int, $limit: Int, $productIds: [ID!]) {
    getAllProducts(skip: $skip, limit: $limit, productIds: $productIds) {
      products {
        category {
          id
          name
        }
        id
        price
        productImage
        quantity
        title
        updatedAt
        createdAt
      }
      totalCount
    }
  }
`;
