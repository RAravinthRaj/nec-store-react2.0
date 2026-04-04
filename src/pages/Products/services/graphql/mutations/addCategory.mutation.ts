/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { gql } from "@apollo/client";

export const ADD_CATEGORY = gql`
  mutation Mutation($name: String!) {
    addCategory(name: $name) {
      id
      name
      updatedAt
      createdAt
    }
  }
`;
