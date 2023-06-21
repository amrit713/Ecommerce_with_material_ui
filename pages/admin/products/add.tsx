import type { NextPage } from "next";

import AddProduct from "../../../src/components/admin/AddProduct";
import restrictTo from "../../../src/protectedRoute/withRole";
import withRole from "../../../src/protectedRoute/withRole";

const addPage: NextPage = () => {
  return <AddProduct />;
};
export default withRole(addPage,["admin"]);
