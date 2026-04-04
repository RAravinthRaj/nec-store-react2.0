/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { gql } from "@apollo/client";

export const GET_SALES = gql`
  query GetSales($input: GetSalesInput) {
    getSales(input: $input) {
      items {
        category {
          id
          name
          updatedAt
          createdAt
        }
        createdAt
        left
        productImage
        sold
        title
        totalPrice
        updatedAt
      }
      totalAmount
      totalSold
      totalCount
    }
  }
`;
