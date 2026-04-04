/*
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { gql } from "@apollo/client";

export const VERIFY_RAZORPAY_PAYMENT = gql`
  mutation VerifyRazorpayPayment($input: RazorpayVerifyPaymentInput!) {
    verifyRazorpayPayment(input: $input) {
      message
      order {
        id
        orderId
        paidStatus
        orderStatus
        totalAmount
      }
    }
  }
`;
