import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import { Typography, Switch, IconButton } from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

const label = { inputProps: { "aria-label": "Switch demo" } };

const columns: GridColDef[] = [
  {
    field: "images",
    headerName: "Image",
    minWidth: 150,
    flex: 1,

    renderCell(params) {
      return (
        <div className="relative h-[4rem] w-[4rem] border-solid border rounded-lg overflow-hidden border-gray-300 hover:border-primary-main duration-200 ease-linear ">
          <Image
            src={`http://localhost:4000/public/img/products/${params.value[1]}`}
            layout="fill"
            alt="product_image"
            objectFit="cover"
          />
        </div>
      );
    },
  },
  {
    field: "name",
    headerName: "Name",
    minWidth: 150,
    flex: 1,
    renderCell(params) {
      return (
        <div className="">
          <Typography className="font-semibold capitalize text-sm">
            {params.value}
          </Typography>
          <Typography className="text-[12px] text-gray-500">
            {params.row.id}
          </Typography>
        </div>
      );
    },
  },

  {
    field: "category",
    headerName: "Category",
    minWidth: 150,
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
    minWidth: 150,
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
    field: "stock",
    headerName: "Stock",
    minWidth: 100,
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
    field: "published",
    headerName: "Published",
    minWidth: 150,
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
    minWidth: 150,
    flex: 1,
    renderCell(params) {
      return (
        <div className="">
          <IconButton>
            <EditRoundedIcon className="text-green-600" />{" "}
          </IconButton>
          <IconButton>
            <DeleteRoundedIcon color="primary" />{" "}
          </IconButton>
        </div>
      );
    },
  },
];

function ProductTable(props: any) {
  return (
    <div style={{ maxWidth: "100%" }}>
      <DataGrid
        autoHeight
        rowHeight={72}
        rows={props.products}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}

export default ProductTable;
