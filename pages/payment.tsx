import type { NextPage } from "next";


import Payment from "../src/components/Payment/Payment";
import Layout from "../src/layout/Layout";

const paymentPage:NextPage = () =>{
 return (
 <Layout>
   <Payment/>
 </Layout>
 )   
} 
export default paymentPage;