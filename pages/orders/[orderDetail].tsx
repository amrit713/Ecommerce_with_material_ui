import React from "react";
import withAuth from "../../src/protectedRoute/withAuth";
import OrderDetail from "../../src/components/profile/Order/OrderDetail";
import axios from "axios";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

function orderDetail({ order }: any) {

 
  return <OrderDetail />;
}

export default withAuth(orderDetail);
