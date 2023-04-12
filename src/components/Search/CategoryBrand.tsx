import { Typography } from "@mui/material";
import React, { useState } from "react";
import {
  SiPuma,
  SiNike,
  SiAdidas,
  SiFila,
  SiReebok,
  SiNewbalance,
  SiJordan,
} from "react-icons/si";
import { useTypedDispatch, useTypedSelector } from "../../../store/store";
import { brandAction } from "../../../store/action/searchAction";

export const brands = [
  {
    name: "nike",
    icon: <SiNike size={24} />,
  },

  {
    name: "adidas",
    icon: <SiAdidas size={24} />,
  },
  {
    name: "newblance",
    icon: <SiNewbalance size={24} />,
  },
  {
    name: "jordan",
    icon: <SiJordan size={24} />,
  },
  {
    name: "reebok",
    icon: <SiReebok size={24} />,
  },
  {
    name: "fila",
    icon: <SiFila size={24} />,
  },
  {
    name: "puma",
    icon: <SiPuma size={24} />,
  },
];

export default function CategoryBrand(props: any) {
  const dispatch = useTypedDispatch();
  const search = useTypedSelector((state) => state.search);
 

  const brandHandler = (event: any) => {
    dispatch(brandAction(event.target.innerText.toLowerCase()));
 
  };

  return (
    <div className="text-sm text-gray-500 space-y-1 ">
      {brands.map((brand: any) => (
        <div
          key={brand.name}
          className={`flex gap-4 cursor-pointer hover:bg-gray-100 p-2 space-y-1 items-center rounded-sm duration-300 ease-in-out hover:scale-105 hover:text-primary-main ${
            search.brand === brand.name
              ? "scale-105 text-primary-main bg-gray-100"
              : ""
          }`}
          onClick={brandHandler}
        >
          {brand.icon}
          <Typography className="capitalize">{brand.name}</Typography>
        </div>
      ))}
    </div>
  );
}
