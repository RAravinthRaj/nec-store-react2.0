/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { gql } from "@apollo/client";

export const ADD_RECENT = gql`
  mutation Mutation($userId: ID!, $productId: ID!) {
    addRecent(userId: $userId, productId: $productId) {
      email
      createdAt
      department
      id
      name
      profilePicture
      recents
      roles
      rollNumber
      status
      updatedAt
    }
  }
`;
