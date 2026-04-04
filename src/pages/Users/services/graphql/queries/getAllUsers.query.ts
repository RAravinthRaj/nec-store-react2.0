/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { gql } from "@apollo/client";

export const GET_ALL_USERS = gql`
  query Query(
    $name: String
    $email: String
    $skip: Int
    $limit: Int
    $orderBy: OrderBy
  ) {
    getAllUsers(
      name: $name
      email: $email
      skip: $skip
      limit: $limit
      orderBy: $orderBy
    ) {
      totalCount
      users {
        id
        name
        email
        roles
      }
    }
  }
`;
