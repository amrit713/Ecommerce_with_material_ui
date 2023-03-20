import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import { Typography, Switch, IconButton } from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

const label = { inputProps: { "aria-label": "Switch demo" } };

const columns: GridColDef[] = [
  {
    field: "image",
    headerName: "Image",
    minWidth:150,
    flex: 1,

    renderCell(params) {
      return (
        <div className="relative h-[4rem] w-[4rem] border-solid border rounded-lg overflow-hidden border-gray-300 hover:border-primary-main duration-200 ease-linear ">
          <Image src={params.value} layout="fill" objectFit="cover" />
        </div>
      );
    },
  },
  {
    field: "name",
    headerName: "Name",
    minWidth:150,
    flex: 1,
    renderCell(params) {
      return (
        <div className="">
          <Typography className="font-semibold capitalize">
            {params.value}
          </Typography>
          <Typography className="text-sm text-gray-500">
            {params.row.id}
          </Typography>
        </div>
      );
    },
  },

  {
    field: "category",
    headerName: "Category",
    minWidth:150,
    flex: 1,
    renderCell(params) {
      return (
        <Typography className="font-semibold capitalize">
          {params.value}
        </Typography>
      );
    },
  },

  {
    field: "price",
    headerName: "Price",
    minWidth:150,
    flex: 1,
    renderCell(params) {
      return (
        <Typography className="font-semibold capitalize">
          Rs. {params.value}.00
        </Typography>
      );
    },
  },

  {
    field: "published",
    headerName: "Published",
    minWidth:150,
    flex: 1,
    renderCell(params) {
      return (
        <>
          <Switch {...label} />
        </>
      );
    },
  },
  {
    field: "action",
    headerName: "action",
    sortable: false,
    minWidth:150,
    flex: 1,
    renderCell(params) {
      return (
        <div className="">
          <IconButton>
            <EditRoundedIcon className="text-green-600" />{" "}
          </IconButton>
          <IconButton>
            <DeleteRoundedIcon  color="primary"/>{" "}
          </IconButton>
        </div>
      );
    },
  },
];

const rows = [


  {
    name: "blue shirt ",
    id: "#1234576",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",

    category: "fashion",
    price: 1200,
  },

  {
    name: "blue shirt ",
    id: "#123478",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "fashion",
    price: 1200,
  },
  {
    name: "blue shirt ",
    id: "#1234579",
    image:
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "fashion",
    price: 1200,
  },
  {
    name: "blue shirt ",
    id: "#123478",
    image:
      "https://images.pexels.com/photos/7525042/pexels-photo-7525042.jpeg?auto=compress&cs=tinysrgb&w=300",
    category: "fashion",
    price: 1200,
  },
  {
    name: "blue shirt ",
    id: "#1234578",
    image:
      "https://images.pexels.com/photos/7525042/pexels-photo-7525042.jpeg?auto=compress&cs=tinysrgb&w=300",
    category: "fashion",
    price: 1200,
  },
];

function ProductTable() {
  return (
    <div style={{  maxWidth: "100%" }}>
      <DataGrid
        autoHeight
       
        rowHeight={72}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[6]}
      />
    </div>
  );
}

export default ProductTable;
