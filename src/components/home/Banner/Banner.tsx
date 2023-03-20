/* eslint-disable jsx-a11y/alt-text */
import { Typography, Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Image from "next/image";
import React from "react";

import Carousel from "react-material-ui-carousel";
import BannerImage from "./BannerImage";

const items = [
  {
    fashion: "men",
    image: "https://bazar-react.vercel.app/assets/images/banners/banner-15.jpg",
  },
  {
    fashion: "women",
    image: "https://bazar-react.vercel.app/assets/images/banners/banner-25.jpg",
  },
];

function Banner() {
  return (
    <div className=" flex gap-4  ">
      <Carousel
        className="w-full "
        indicators={false}
        animation="slide"
        swipe={true}
        fullHeightHover={true}
        interval={6000}
      >
        {items.map((item: any, i: number): any => {
          return (
            <BannerImage key={i} image={item.image} fashion={item.fashion} />
          );
        })}
      </Carousel>

      <div className="hidden  md:inline-block w-[25%] space-y-4">
        <div className="relative">
          <div className="relative w-[full] h-[24vh]  opacity-70">
            <Image
              src="https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>
          <div className="absolute top-[30%] left-8">
            <Typography variant="subtitle1" className="uppercase text-sm ">
              new arrivals
            </Typography>
            <Typography
              variant="subtitle1"
              className="uppercase font-semibold "
            >
              summer sale upto 15%off
            </Typography>

            <Button className=" relative  rounded-none text-dark hover:text-primary-main duration-300 ease-linear ">
              Shop Now <ArrowRightAltIcon className=" text-[24px] space-x-2 " />
            </Button>
          </div>
        </div>
        {/* second */}
        <div className="relative">
          <div className="relative w-[full] h-[24vh]  opacity-70 ">
            <Image
              src="https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>
          <div className="absolute top-[30%] left-8">
            <Typography variant="subtitle1" className="uppercase text-sm ">
              new arrivals
            </Typography>
            <Typography
              variant="subtitle1"
              className="uppercase font-semibold "
            >
              summer sale upto 15%off
            </Typography>

            <Button className=" relative  rounded-none text-dark hover:text-primary-main duration-300 ease-linear ">
              Shop Now <ArrowRightAltIcon className=" text-[24px] space-x-2 " />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
