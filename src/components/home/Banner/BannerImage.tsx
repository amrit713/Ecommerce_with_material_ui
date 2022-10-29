import React from "react";
import Image from "next/image";
import { Button, Typography } from "@mui/material";

interface props {
  image: string;
  fashion: string;
}

function BannerImage(props: props) {
  return (
    <div className="relative">
      <div className="relative w-full h-[50vh]">
        <Image src={props.image} layout="fill" objectFit="cover" />
      </div>

      <div className="absolute top-[20%] left-8 space-y-2">
        <Typography variant="h5" className="uppercase" >lifstyle collection</Typography>
        <Typography variant="h2" className="uppercase font-bold">{props.fashion}</Typography>
        <Typography variant="h5" className="uppercase font-semibold">sale up to <span className="text-primary-main">20% OFF</span></Typography>
        <Typography variant="subtitle1" className="text-dark font-medium">Get Free Shipping on orders over Rs.1,000</Typography>
        <Button variant="contained">Shop Now</Button>
      </div>
    </div>
  );
}

export default BannerImage;
