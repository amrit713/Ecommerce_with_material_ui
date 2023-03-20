import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Banner from "../src/components/home/Banner/Banner";

import FeaturedProduct from "../src/components/home/product/FeaturedProduct";
import NewAvailable from "../src/components/home/Banner/NewAvailable";
import DealProduct from "../src/components/home/product/DealsOfDay";
import Layout from "../src/layout/Layout";

import AllProduct from "../src/components/home/product/AllProduct";
import Info from "../src/components/home/Banner/Info";
import Brands from "../src/components/home/Banner/Brands";
import { useEffect } from "react";
import { useTypedDispatch } from "../store/store";
import { getProducts } from "../store/action/productAction";
import dynamic from "next/dynamic";

const Home: NextPage = () => {
  const dispatch = useTypedDispatch();

 

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <Layout>
      <Banner />
      <Info />
      <FeaturedProduct />
      <NewAvailable />
      <DealProduct />
      <Brands />
      <AllProduct />
    </Layout>
  );
};

export default Home;
