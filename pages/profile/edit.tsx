import type { NextPage } from "next";
import EditProfile from "../../src/components/profile/EditProfile";

import Layout from "../../src/layout/Layout";

const editPage: NextPage = () => {
  return (
    <Layout>
      <EditProfile  />
    </Layout>
  );
};
export default editPage;
