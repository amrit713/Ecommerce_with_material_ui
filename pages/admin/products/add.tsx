import type { NextPage } from "next";
import Layout from "../../../src/layout/Layout";
import AddProduct from "../../../src/components/admin/AddProduct";

const addPage:NextPage = () =>{
 return (
 <Layout>
  
  <AddProduct/>
  
 </Layout>
 )   
} 
export default addPage;