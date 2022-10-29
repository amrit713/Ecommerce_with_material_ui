import { Typography, InputBase, Button, IconButton } from "@mui/material";

import Badge from "@mui/material/Badge";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import DehazeIcon from '@mui/icons-material/Dehaze';
import React from "react";

function Header() {
  return (
    <div className="fixed w-full top-0 bg-white m-auto px-8  xl:px-[180px]  py-4  header_shadow  flex items-center justify-between z-10 ">
      <Typography variant="h6" className="font-bold">
        Home<span className="text-primary-main">Food</span>{" "}
      </Typography>

      {/* middle */}
      <div className=" hidden md:flex items-center space-x-2  border-gray-400 border-solid border hover:border-primary-main duration-300 ">
        <SearchOutlinedIcon className="text-[32px] text-gray-400" />
        <InputBase placeholder="Search" className="bg-transparent" />

        <Button variant="contained" className="rounded-none shadow-none ">
          Search
        </Button>
      </div>

      <div className=" hidden sm:flex item-center space-x-4 ">
        <IconButton aria-label="user" className="hover:text-primary-main duration-200 ease-linear ">
          <Badge badgeContent={1} color="primary">
            <NotificationsNoneIcon className="text-[28px] text-gray-500 " />
          </Badge>
        </IconButton>

        <IconButton aria-label="user" className=" hover:text-primary-main duration-200 ease-linear ">
          <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlinedIcon className="text-[28px] text-gray-500 " />
          </Badge>
        </IconButton>

        <IconButton aria-label="user" className=" hover:text-primary-main duration-200 ease-linear ">
          <PersonOutlinedIcon className="text-[28px] text-gray-500 " />
        </IconButton>
      </div>

      <div className="sm:hidden">
        <IconButton className="border-solid border border-gray-200 " >
          <DehazeIcon />
        </IconButton>
      </div>

    </div>
  );
}

export default Header;
