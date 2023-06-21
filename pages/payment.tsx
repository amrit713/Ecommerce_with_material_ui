"use-client"
import type { NextPage } from "next";

import Payment from "../src/components/Payment/Payment";
import withAuth from "../src/protectedRoute/withAuth";

const paymentPage: NextPage = () => {
  return <Payment />;
};
export default withAuth(paymentPage);
