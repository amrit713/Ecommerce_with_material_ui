import type { NextPage, GetServerSideProps } from "next";

import Banner from "../src/components/home/Banner/Banner";
import axios from "axios";

import FeaturedProduct from "../src/components/home/product/FeaturedProduct";

import DealProduct from "../src/components/home/product/DealsOfDay";
import Layout from "../src/layout/Layout";

import AllProduct from "../src/components/home/product/AllProduct";
import Info from "../src/components/home/Banner/Info";
import Brands from "../src/components/home/Banner/Brands";
import { IProduct } from "../src/interface/IProduct";
import { useEffect } from "react";
import {  useTypedSelector } from "../store/store";

interface IProps {
  products: IProduct[];
}

const Home: NextPage<IProps> = ({ products }) => {
 

 
  return (
    <Layout>
      <Banner products={products} />
      <Info />
      <FeaturedProduct products={products} />
      {/* <NewAvailable  /> */}
      <DealProduct products={products} />
      <Brands />
      <AllProduct products={products} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await axios.get("http://localhost:4000/api/v1/product");

  return {
    props: {
      products: data.data.products,
    },
  };
};

export default Home;
