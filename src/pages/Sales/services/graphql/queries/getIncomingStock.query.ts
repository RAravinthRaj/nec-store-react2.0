/*
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { gql } from "@apollo/client";

export const GET_INCOMING_STOCK = gql`
  query GetIncomingStock($input: GetIncomingStockInput) {
    getIncomingStock(input: $input) {
      items {
        id
        quantityAdded
        buyingPriceAdded
        previousQuantity
        currentQuantity
        createdAt
        product {
          id
          title
          productImage
          category {
            id
            name
          }
        }
      }
      totalAmount
      totalQuantityAdded
      totalCount
    }
  }
`;
