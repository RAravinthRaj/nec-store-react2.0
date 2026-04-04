/*
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { apolloClient } from "../../../../clients";
import { getGraphqlError } from "../../../../utils";
import { CREATE_RAZORPAY_ORDER } from "./mutations/createRazorpayOrder.mutation";
import { RECORD_PAYMENT_TRANSACTION } from "./mutations/recordPaymentTransaction.mutation";
import { VERIFY_RAZORPAY_PAYMENT } from "./mutations/verifyRazorpayPayment.mutation";

export interface CheckoutProductInput {
  productId: string;
  quantity: number;
}

export interface VerifyRazorpayPaymentInput {
  products: CheckoutProductInput[];
  razorpayOrderId: string;
  razorpayPaymentId: string;
  razorpaySignature: string;
}

export interface RecordPaymentTransactionInput {
  amount: number;
  currency?: string;
  status: string;
  failureReason?: string;
  razorpayOrderId?: string;
  razorpayPaymentId?: string;
  razorpaySignature?: string;
  metadata?: string;
}

export const createRazorpayOrder = async (products: CheckoutProductInput[]) => {
  try {
    const { data } = await apolloClient.mutate({
      mutation: CREATE_RAZORPAY_ORDER,
      variables: { products },
      fetchPolicy: "no-cache",
    });

    return {
      payload: {
        message: data?.createRazorpayOrder?.message,
        paymentOrder: data?.createRazorpayOrder?.paymentOrder,
      },
    };
  } catch (err: any) {
    const msg =
      getGraphqlError(err) || "An error occurred while creating Razorpay order.";

    console.error("Error in createRazorpayOrder: ", msg);
    throw new Error(msg);
  }
};

export const verifyRazorpayPayment = async (
  input: VerifyRazorpayPaymentInput,
) => {
  try {
    const { data } = await apolloClient.mutate({
      mutation: VERIFY_RAZORPAY_PAYMENT,
      variables: { input },
      fetchPolicy: "no-cache",
    });

    return {
      payload: {
        message: data?.verifyRazorpayPayment?.message,
        order: data?.verifyRazorpayPayment?.order,
      },
    };
  } catch (err: any) {
    const msg =
      getGraphqlError(err) || "An error occurred while verifying Razorpay payment.";

    console.error("Error in verifyRazorpayPayment: ", msg);
    throw new Error(msg);
  }
};

export const recordPaymentTransaction = async (
  input: RecordPaymentTransactionInput,
) => {
  try {
    const { data } = await apolloClient.mutate({
      mutation: RECORD_PAYMENT_TRANSACTION,
      variables: { input },
      fetchPolicy: "no-cache",
    });

    return {
      payload: {
        message: data?.recordPaymentTransaction?.message,
      },
    };
  } catch (err: any) {
    const msg =
      getGraphqlError(err) || "An error occurred while recording payment transaction.";

    console.error("Error in recordPaymentTransaction: ", msg);
    throw new Error(msg);
  }
};
