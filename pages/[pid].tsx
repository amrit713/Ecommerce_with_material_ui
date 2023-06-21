import React from "react";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import ProductDetail from "../src/components/productDetail/ProductDetail";

import axios from "axios";

import { IProduct } from "../src/interface/IProduct";

interface IProps {
  product: IProduct;
  relatedProducts: IProduct[];
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   const { data } = await axios.get("http://localhost:4000/api/v1/product");
//   const paths = data.data.products.map((product: IProduct) => ({
//     params: { pid: product.id },
//   }));

//   return { paths, fallback: "blocking" };
// };

export const getServerSideProps: GetServerSideProps = async ({
  params,
}: any) => {
  try {
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
  } catch (e: any) {
    return {
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }
};

function productDetailPage({ product, relatedProducts }: IProps) {
  return (
    <div className="">
      <ProductDetail product={product} relatedProducts={relatedProducts} />
    </div>
  );
}

export default productDetailPage;
