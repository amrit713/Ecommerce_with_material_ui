import type { NextPage } from "next";
import ProductList from "../../../src/components/admin/ProductList";
import EditProfile from "../../../src/components/profile/EditProfile";



import Layout from "../../../src/layout/Layout";

const produtsPage:NextPage = () =>{
 return (
 <Layout>
    
  <ProductList  />
  
 </Layout>
 )   
} 
export default produtsPage;