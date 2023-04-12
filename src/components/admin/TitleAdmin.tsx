import { Typography, Button, InputBase } from "@mui/material";
import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import Link from "next/link";

function TitleAdmin() {
  return (
    <div className="space-y-4">
      <Typography variant="h6" className="font-semibold">Product List</Typography>
      <div className="flex items-center justify-between">
        <div className="hidden sm:flex items-center space-x-2   bg-white box_shadow p-1 rounded-md ">
          <SearchOutlinedIcon className="text-[32px] text-gray-400" />
          <InputBase placeholder="Search" className="bg-transparent" />

        </div>

        <Link href="/admin/products/add"><Button variant="contained" className="capitalize" color="secondary" > <AddRoundedIcon className="mr-2"/> Add Product</Button></Link>

        
      </div>
    </div>
  );
}

export default TitleAdmin;
