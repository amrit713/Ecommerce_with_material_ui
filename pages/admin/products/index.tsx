import type { GetServerSideProps, NextPage } from "next";
import ProductList from "../../../src/components/admin/ProductList";
import EditProfile from "../../../src/components/profile/EditProfile";

import Layout from "../../../src/layout/Layout";
import axios from "axios";

const produtsPage: NextPage = (props: any) => {
  return (
    <Layout>
      <ProductList products={props.products} />
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

export default produtsPage;
