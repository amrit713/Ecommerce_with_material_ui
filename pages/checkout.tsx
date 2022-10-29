import type { NextPage } from "next";
import Checkout from "../src/components/checkout/Checkout";

import Layout from "../src/layout/Layout";

const checkoutPage: NextPage = () => {
  return (
    <Layout>
      <Checkout />
    </Layout>
  );
};
export default checkoutPage;
