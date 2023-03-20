import React from 'react'
import {IconButton} from "@mui/material"
import { EmblaOptionsType } from "embla-carousel-react";
import useEmblaCarousel from "embla-carousel-react";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";

import Product from "./Product";

interface IProps {
  products?:any[]
}

//FIXME: should be replace
const options: EmblaOptionsType = {
    containScroll: "trimSnaps",
    
    
  };

 

function ProductEmbla({products}:IProps) {

    const [emblaRef, emblaApi] = useEmblaCarousel(options);
 

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    console.log("🚀 ~ file: FeaturedProduct.tsx:32 ~ scrollNext ~ emblaApi.scrollNext():", emblaApi)
   
    if (emblaApi) emblaApi.scrollNext();
  
  
  }, [emblaApi]);
  return (
    <div className=" embla  relative  ">
    <div className="embla__viewport" ref={emblaRef}>
      <div className=" embla__container space-x-6  ">
        {products?.map((product) => {
          return (
            <div className="embla_slide" key={product.id}>
              <Product product = {product} />
            </div>
          );
        })}
      </div>
    </div>
    <IconButton
      className="hidden sm:flex  embla__prev  absolute top-[35%] left-[4%] sm:left-[3%] text-secondary hover:text-white bg-gray-200 hover:bg-primary-main duration-300"
      onClick={scrollPrev}
    >
      <WestIcon />
    </IconButton>

    <IconButton
      className="hidden sm:flex embla__next absolute right-[4%] top-[35%] sm:right-[3%]  text-secondary hover:text-white bg-gray-200 hover:bg-primary-main duration-300"
      onClick={scrollNext}
    >
      <EastIcon />
    </IconButton>
  </div>
)
}

export default ProductEmbla