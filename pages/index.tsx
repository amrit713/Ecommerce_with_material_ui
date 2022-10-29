import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../src/components/home/Banner/Banner";

import FeaturedProduct from "../src/components/home/product/FeaturedProduct";
import NewAvaliable from "../src/components/home/Banner/NewAvaliable";
import AllProduct from "../src/components/home/product/AllProduct";
import Layout from "../src/layout/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Banner />

      <FeaturedProduct />
      <NewAvaliable />
      <AllProduct />
    </Layout>
  );
};

export default Home;
