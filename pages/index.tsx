import type { NextPage, GetServerSideProps } from "next";
import { Suspense, lazy } from "react";
import Banner from "../src/components/home/Banner/Banner";
import axios from "axios";

import FeaturedProduct from "../src/components/home/product/FeaturedProduct";

import DealProduct from "../src/components/home/product/DealsOfDay";

import AllProduct from "../src/components/home/product/AllProduct";

import { IProduct } from "../src/interface/IProduct";

import Information from "../src/components/home/Banner/InfoDetail";
import NewAvailable from "../src/components/home/Banner/NewAvailable";

const Brands = lazy(() => import("../src/components/home/Banner/Brands"));
const Info = lazy(() => import("../src/components/home/Banner/Info"));

interface IProps {
  products: IProduct[];
}

const Home: NextPage<IProps> = ({ products }) => {
  return (
    <div>
      <Banner products={products} />

      <Suspense>
        <Info />
      </Suspense>

      <FeaturedProduct products={products} />

      <DealProduct products={products} />
      <Suspense>
        <Brands />
      </Suspense>
      
      <AllProduct products={products} />
    </div>
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
