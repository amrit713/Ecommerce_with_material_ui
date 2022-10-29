import React from "react";
import ProductDetail from "../src/components/productDetail/ProductDetail";
import Header from "../src/components/AppBar/Header";
import MobileHeader from "../src/components/AppBar/MobileHeader";
import Footer from "../src/components/Footer";

import Layout from "../src/layout/Layout";
function productDetailPage() {
  return (
    <div className="">
      <Layout>
       <ProductDetail/>
      </Layout>
    </div>
   
  );
}

export default productDetailPage;
