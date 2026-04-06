/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
export interface Config {
  nodeEnv: string;

  restBaseURL: string;
  graphqlBaseURL: string;
}

const normalizeURL = (value?: string): string => (value || "").trim().replace(/\/+$/, "");

export const config: Config = {
  nodeEnv: import.meta.env.VITE_NODE_ENV || "development",
  restBaseURL: normalizeURL(import.meta.env.VITE_REST_API_URL),
  graphqlBaseURL: normalizeURL(import.meta.env.VITE_GRAPHQL_API_URL),
};
