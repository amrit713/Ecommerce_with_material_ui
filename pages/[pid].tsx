import React from "react";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import ProductDetail from "../src/components/productDetail/ProductDetail";
import Header from "../src/components/AppBar/Header";
import MobileHeader from "../src/components/AppBar/MobileHeader";
import Footer from "../src/components/Footer";

import Layout from "../src/layout/Layout";
import axios from "axios";
import { NextRouter, useRouter } from "next/router";
import { IProduct } from "../src/interface/IProduct";

interface IProps {
  product: IProduct;
  relatedProducts: IProduct[];
}

export const getServerSideProps: GetServerSideProps = async ({
  params,
}: any) => {
  const response = await axios.get(
    `http://localhost:4000/api/v1/product/${params.pid}`
  );

  const brand = response.data.data.product.brand;
  const category = response.data.data.product.category;
  const { data } = await axios.get(
    `http://localhost:4000/api/v1/product?brand=${brand}&category=${category}`
  );

  return {
    props: {
      product: response.data.data.product,
      relatedProducts: data.data.products,
    },
  };
};

function productDetailPage({ product, relatedProducts }: IProps) {
  return (
    <div className="">
      <ProductDetail product={product} relatedProducts={relatedProducts} />
    </div>
  );
}

export default productDetailPage;
