import Image from "next/image";
import React from "react";

type PropType = {
  selected: boolean;
  imgSrc: string;
  index: number;
  onClick: () => void;
};

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, imgSrc, onClick } = props;

  return (
    <div className="">
      <button
        onClick={onClick}
        className="p-0 border-none rounded-md overflow-hidden cursor-pointer"
        type="button"
      >
        <div className="relative h-[100px] w-[100px] ">
          <Image
            layout="fill"
            objectFit="cover"
            className={`duration-500 ease-in-out ${
              selected ? "scale-125 " : ""
            }`}
            src={imgSrc}
            alt="Your alt text"
            quality={75}
            priority={false}
          />
        </div>
      </button>
    </div>
  );
};
