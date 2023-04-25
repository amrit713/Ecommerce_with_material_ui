import React from "react";
import { Typography } from "@mui/material";
import { EmblaOptionsType } from "embla-carousel-react";
import useEmblaCarousel from "embla-carousel-react";

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

//FIXME: should be replace
const options: EmblaOptionsType = {
  containScroll: "trimSnaps",
};

function Brands() {
  const autoplay = React.useRef(Autoplay({ delay: 3000 }));

  const [emblaRef] = useEmblaCarousel(options, [autoplay.current]);

  return (
    <div className="">
      <Typography variant="h6" className="capitalize font-bold mb-4 ">
        Popular Brand
      </Typography>

      <div className=" embla  relative cursor-pointer  w-full p-8 bg-white rounded-md shadow-sm ">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container space-x-[9rem]">
            <div className="embla_slide">
              <SiNike size={72} />
            </div>
            <div className="embla_slide">
              <SiAdidas size={72} />
            </div>
            <div className="embla_slide">
              <SiJordan size={72} />
            </div>
            <div className="embla_slide">
              <SiPuma size={72} />
            </div>
            <div className="embla_slide">
              <SiReebok size={72} />
            </div>
            <div className="embla_slide">
              <SiNewbalance size={72} />
            </div>
            <div className="embla_slide">
              <SiFila size={72} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brands;
