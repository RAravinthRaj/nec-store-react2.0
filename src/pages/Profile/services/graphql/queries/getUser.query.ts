/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query GetUser($id: ID!) {
    getUser(id: $id) {
      department
      email
      id
      name
      profilePicture
      roles
      rollNumber
      status
    }
  }
`;
