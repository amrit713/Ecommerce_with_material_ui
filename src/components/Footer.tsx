import { Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <div className=" px-8 xl:px-[180px] bg-secondary py-10 mt-8 text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20 sm:mb-0">
      <div className="">
        <Typography variant="h5" className="uppercase font-bold ">
          {" "}
          homefood
        </Typography>
        <Typography variant="subtitle1" className="text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero
          id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus
          vel ut sollicitudin elit at amet.
        </Typography>
      </div>
      <div className="">
        <Typography variant="h6" className="capitalize font-semibold ">
          {" "}
          Cusotmer care
        </Typography>
        <Typography
          variant="subtitle1"
          className=" capitalize text-gray-400 hover:text-white cursor-pointer duration-200 ease-linear "
        >
          Help Center
        </Typography>
        <Typography
          variant="subtitle1"
          className=" capitalize text-gray-400 hover:text-white cursor-pointer duration-200 ease-linear"
        >
          how to buy
        </Typography>
        <Typography
          variant="subtitle1"
          className=" capitalize text-gray-400 hover:text-white cursor-pointer duration-200 ease-linear"
        >
          track your order
        </Typography>
        <Typography
          variant="subtitle1"
          className=" capitalize text-gray-400 hover:text-white cursor-pointer duration-200 ease-linear"
        >
          corporate & bulk purchasing
        </Typography>
        <Typography
          variant="subtitle1"
          className=" capitalize text-gray-400 hover:text-white cursor-pointer  duration-200 ease-linear"
        >
          return and refunds
        </Typography>
      </div>

    {/* about us */}
      <div className="">
        <Typography variant="h6" className="capitalize font-semibold ">
          {" "}
         about us
        </Typography>
        <Typography
          variant="subtitle1"
          className=" capitalize text-gray-400 hover:text-white cursor-pointer duration-200 ease-linear "
        >
         careers
        </Typography>
        <Typography
          variant="subtitle1"
          className=" capitalize text-gray-400 hover:text-white cursor-pointer duration-200 ease-linear"
        >
          our stores
        </Typography>
        <Typography
          variant="subtitle1"
          className=" capitalize text-gray-400 hover:text-white cursor-pointer duration-200 ease-linear"
        >
          our cares
        </Typography>
        <Typography
          variant="subtitle1"
          className=" capitalize text-gray-400 hover:text-white cursor-pointer duration-200 ease-linear"
        >
          terms & conditons
        </Typography>
        <Typography
          variant="subtitle1"
          className=" capitalize text-gray-400 hover:text-white cursor-pointer  duration-200 ease-linear"
        >
         privacy policy
        </Typography>
      </div>

      {/* contact us */}
      <div className="">
        <Typography variant="h6" className="capitalize font-semibold ">
          {" "}
          contact us
        </Typography>
        
        <Typography
          variant="subtitle1"
          className=" capitalize text-gray-400 hover:text-white cursor-pointer duration-200 ease-linear"
        >
          pepsicola-32, kathmandu-44600, nepal
        </Typography>
        <Typography
          variant="subtitle1"
          className=" capitalize text-gray-400 hover:text-white cursor-pointer duration-200 ease-linear"
        >
          email: store123@gmail.com
        </Typography>
        <Typography
          variant="subtitle1"
          className=" capitalize text-gray-400 hover:text-white cursor-pointer duration-200 ease-linear"
        >
        phone: +977 9821078905
        </Typography>
        
      </div>

      
    </div>
  );
}

export default Footer;
