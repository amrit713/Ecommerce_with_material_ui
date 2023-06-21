import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { PayPalButton } from "react-paypal-button-v2";

import { toast } from "react-hot-toast";

function Paypal() {

  return (
    <div className="flex items-center space-x-2 justify-between">
      <div className="relative h-[2rem] w-[10rem]">
        <Image
          alt="paypal"
          src="/paypal.svg"
          objectFit="cover"
          layout="fill"
        />

    
      </div>
    </div>
  );
}

export default Paypal;
