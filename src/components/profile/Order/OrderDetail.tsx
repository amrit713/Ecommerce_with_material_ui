import Dashboard from "../Dashboard";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import React, { useRef } from "react";
import ProfileTitle from "../ProfileTitle";
import Details from "./Details";

import { useReactToPrint } from "react-to-print";

function OrderDetail() {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div className="flex">
      <div className=" hidden md:flex md:w-[25%]">
        <Dashboard />
      </div>

      <div className="w-full md:w-[75%]">
        <ProfileTitle
          icon={<ShoppingBagIcon className="text-[32px] text-dark" />}
          title="Order Details"
          print={handlePrint}
        />
        <div ref={componentRef}>
          <Details />
        </div>
      </div>
    </div>
  );
}

export default OrderDetail;
