import { Button } from "@mui/material";
import React, { useEffect } from "react";
import Image from "next/image";
import config from "./KhaltiConfig";
import KhaltiCheckout from "khalti-checkout-web";

function Khalti() {
  
  const khaltiCheck = (): any => new KhaltiCheckout(config);
  let checkout = khaltiCheck();

  return (
    <div className="flex items-center space-x-2 justify-between">
      <div className="relative h-[4rem] w-[8rem]">
        <Image
          alt="khalti image"
          src="/khalti.png"
          objectFit="cover"
          layout="fill"
        />
      </div>

      <Button
        sx={{ color: "#60408E", borderColor: "#60408E" }}
        variant="outlined"
        className="capitalize font-semibold "
        onClick={() => checkout.show({ amount: 1000 })}
      >
        pay via Khalti Wallet
      </Button>
    </div>
  );
}

export default Khalti;
