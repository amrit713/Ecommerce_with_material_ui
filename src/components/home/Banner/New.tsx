import React from "react";
import Image from "next/image";
import { Typography, Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { PropaneSharp } from "@mui/icons-material";

interface props{
    image:string;
    title:string;
    subtitle:string;
    off:string;
}

function New(props:props) {
  return (
    <div className="relative   mb-10">
      <div className="relative w-[full] h-[16vh]  opacity-60">
        <Image
          src={props.image}
          layout="fill"
          objectFit="cover"
        ></Image>
      </div>

      <div className="absolute top-[15%] left-8">
        <Typography variant="subtitle1" className="uppercase text-sm ">
          {props.title}
        </Typography>
        <Typography variant="subtitle1" className="uppercase font-semibold ">
          {props.subtitle}
        </Typography>
        <Typography className="uppercase text-secondary font-semibold"> {props.off}</Typography>

        <Button className=" relative  rounded-none text-dark hover:text-primary-main duration-300 ease-linear ">
          Shop Now <ArrowRightAltIcon className=" text-[24px] space-x-2 " />
        </Button>
      </div>
    </div>
  );
}

export default New;
