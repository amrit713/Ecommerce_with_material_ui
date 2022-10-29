import React from 'react'
import { Typography, Button, Rating } from "@mui/material";
import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarHalfIcon from "@mui/icons-material/StarHalf";

function Detail() {
  return (
    <div className="  sm:flex sm:space-x-6 ">
        {/* image */}
        <div className=" sm:w-[50%]">
          <div className="relative w-[full rounded-lg overflow-hidden h-[40vh]">
            <Image
              src="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className=" sm:w-50% mt-4 flex justify-center space-x-8">
            <div className="overflow-hidden w-[7rem] h-[7rem] border-solid  border-2 rounded-md border-primary-main duration-200 ease-linear ">
              <div className="relative w-[7rem] h-[7rem]  duration-200 ease-in cursor-pointer hover:scale-110 hover:opacity-95">
                <Image
                  src="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>

            <div className="overflow-hidden w-[7rem] h-[7rem] border-solid  border-2 border-dark rounded-md hover:border-primary-main duration-200 ease-linear ">
              <div className="relative w-[7rem] h-[7rem]  duration-200 ease-in cursor-pointer hover:scale-110 hover:opacity-95">
                <Image
                  src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>

            <div className="overflow-hidden w-[7rem] h-[7rem] border-solid  border-2 rounded-md border-dark hover:border-primary-main duration-200 ease-linear ">
              <div className="relative w-[7rem] h-[7rem]  duration-200 ease-in cursor-pointer hover:scale-110 hover:opacity-95">
                <Image
                  src="https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdhdGNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" sm:w-[50%] space-y-3 mt-8">
          <Typography variant="h4" className="font-semibold">
            {" "}
            Frédérique Constant{" "}
          </Typography>
          <Typography variant="subtitle1" className=" text-dark">
            {" "}
            Category: Watch{" "}
          </Typography>

          <div className="flex items-center space-x-2">
            <Typography variant="subtitle1" className=" text-dark">
              {" "}
              Rated:
            </Typography>
            <div className="flex items-center justify-center">
          
          <Rating name="read-only" value={3} readOnly  className="text-amber-500 "/>
            <Typography className="text-sm font-bold text-gray-400">(12)</Typography>
          </div>
          </div>

          <div className="">
          <Typography variant="h4" className="font-semibold text-primary-main">
            {" "}
           Rs. 15,000
          </Typography>
          <Typography className="font-medium text-dark">Stock Avaliable</Typography>
          </div>

          <Button variant="contained" size="large" > 
          Add To Cart
          </Button>
        </div>
      </div>
  )
}

export default Detail