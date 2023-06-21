import React, { useEffect } from "react";
import Header from "../components/AppBar/Header";
import MobileHeader from "../components/AppBar/MobileHeader";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

interface IProps {
  children: React.ReactNode | React.ReactNode[];
}

const Layout: React.FC<IProps> = (props) => {
  const router = useRouter();
  return (
    <div className="">


      {router.pathname !== "/404"  && <Header />}
      {router.pathname !== "/404" && <MobileHeader />}

      

      <div className=" m-auto max-w-[1532px] px-8 space-y-8 mt-32 sm:mt-24 flex-grow overflow-y-auto">
        {props.children}
      </div>
      {/* {router.pathname !== "/access-denied" && <Footer />} */}
      {router.pathname !== "/404" && <Footer />}
     
    </div>
  );
};

export default Layout;
