import type { NextPage } from "next";
import Cart from "../src/components/cart/Cart";
import Layout from "../src/layout/Layout";

const cartPage: NextPage = () => {

  
  return (
    <Layout>
    
      <Cart />
    </Layout>
  );
};
export default cartPage ;
