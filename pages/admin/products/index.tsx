import type { GetServerSideProps, NextPage } from "next";
import ProductList from "../../../src/components/admin/ProductList";

import axios from "axios";
import restrictTo from "../../../src/protectedRoute/withRole";
import withAuth from "../../../src/protectedRoute/withAuth";
import withRole from "../../../src/protectedRoute/withRole";

const produtsPage: NextPage = (props: any) => {
  return <ProductList products={props.products} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await axios.get("http://localhost:4000/api/v1/product");

  return {
    props: {
      products: data.data.products,
    },
  };
};

export default withRole(produtsPage, ["admin"]);
