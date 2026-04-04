/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { config } from "../config";

export const apolloClient = new ApolloClient({
  uri: config.graphqlBaseURL,
  cache: new InMemoryCache(),
  credentials: "include",
});
