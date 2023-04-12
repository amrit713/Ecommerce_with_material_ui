import type { NextPage } from "next";

import Profile from "../../src/components/profile/Profile";
import Layout from "../../src/layout/Layout";
import withAuth from "../../src/protectedRoute/withAuth";

const myProfile: NextPage = () => {
  return (
    <Layout>
      <Profile />
    </Layout>
  );
};
export default withAuth(myProfile);
