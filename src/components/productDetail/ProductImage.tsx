import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Image from "next/image";

import imageByIndex from "../../ImageIndex/imageByIndex";
import { Thumb } from "./ThumbButton";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
  images:string[]
};

const ProductImage: React.FC<PropType> = (props) => {
  const { slides, options , images} = props;
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      if (emblaThumbsApi.clickAllowed()) emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on("select", onSelect);
    emblaMainApi.on("reInit", onSelect);
  });

  return (
    <div>
      <div className="embla__image ">
        <div
          className="embla__viewport  rounded-lg overflow-hidden shadow-md"
          ref={emblaMainRef}
        >
          <div className="embla__container ">
            {slides.map((index) => (
              <div className="embla__slide " key={index}>
                <div className="relative h-[350px] w-full cursor-pointer ">
                  <Image
                    layout="fill"
                    objectFit="cover"
                    className="embla__slide__img"
                    src={images?`http://localhost:4000/public/img/products/${images[index]}`:''}
                    alt="Your alt text"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="embla-thumbs mt-4">
          <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
            <div className="embla-thumbs__container flex justify-center gap-4 ">
              {slides.map((index) => (
                <Thumb
                  onClick={() => onThumbClick(index)}
                  selected={index === selectedIndex}
                  index={index}
                  imgSrc={images?`http://localhost:4000/public/img/products/${images[index]}`:''}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImage;
