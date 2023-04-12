import React from "react";
import { Typography } from "@mui/material";
import { EmblaOptionsType } from "embla-carousel-react";
import useEmblaCarousel from "embla-carousel-react";
import EmblaCarousel from "embla-carousel";
import {
  SiPuma,
  SiNike,
  SiAdidas,
  SiFila,
  SiReebok,
  SiNewbalance,
  SiJordan,
} from "react-icons/si";

import Autoplay from "embla-carousel-autoplay";

 export const  brands = [
  {
    name: "nike",
    icon: <SiNike size={74} />,
  },

  {
    name: "adidas",
    icon: <SiAdidas size={74} />,
  },
  {
    name: "newblance",
    icon: <SiNewbalance size={74} />,
  },
  {
    name: "jordan",
    icon: <SiJordan size={74} />,
  },
  {
    name: "reebok",
    icon: <SiReebok size={74} />,
  },
  {
    name: "fila",
    icon: <SiFila size={74} />,
  },
  {
    name: "puma",
    icon: <SiPuma size={74} />,
  },
];

//FIXME: should be replace
const options: EmblaOptionsType = {
  containScroll: "trimSnaps",
};

function Brands() {
  const autoplay = React.useRef(Autoplay({ delay: 3000 }));

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay.current]);

  return (
    <div className="">
      <Typography variant="h6" className="capitalize font-bold mb-4 ">
        Popular Brand
      </Typography>

      <div className=" embla  relative cursor-pointer  w-full p-8 bg-white rounded-md shadow-sm ">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container space-x-[9rem]">
            {brands.map((brand) => (
              <div className="embla_slide" key={brand.name}>
                {brand.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brands;
