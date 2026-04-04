/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { gql } from "@apollo/client";

export const ADD_STOCK = gql`
  mutation Mutation($input: AddStockInput!) {
    addStock(input: $input) {
      message
      product {
        id
        price: buyingPrice
        sellingPrice
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
      stockEntry {
        id
        quantityAdded
        buyingPriceAdded
        previousQuantity
        previousBuyingPrice
        previousSellingPrice
        currentQuantity
        currentBuyingPrice
        currentSellingPrice
        createdAt
      }
    }
  }
`;
