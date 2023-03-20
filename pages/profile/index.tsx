import type { NextPage } from "next";

import Profile from "../../src/components/profile/Profile";
import Layout from "../../src/layout/Layout";

const myProfile: NextPage = () => {
  return (
    <Layout>
      
      <Profile />
    </Layout>
  );
};
export default myProfile;
