/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import { Typography, Switch, IconButton, Box, Button } from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import Modal from "@mui/material/Modal";
import { useTypedDispatch } from "../../../store/store";
import { deleteProductAction } from "../../../store/action/productAction";
import toast from "react-hot-toast";

const label = { inputProps: { "aria-label": "Switch demo" } };

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",

  boxShadow: 18,

  px: 2,
  py: 4,
  borderRadius: 2,
};

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

  // {
  //   field: "published",
  //   headerName: "Published",
  //   minWidth: 150,
  //   flex: 1,
  //   renderCell(params) {
  //     return (
  //       <>
  //         <Switch {...label} />
  //       </>
  //     );
  //   },
  // },
  {
    field: "action",
    headerName: "action",
    sortable: false,
    minWidth: 150,
    flex: 1,
    renderCell(params) {
      const dispatch = useTypedDispatch();
      const [open, setOpen] = React.useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);

      const deleteHandler = (product: any) => {
        dispatch(deleteProductAction(product.id));
        toast.success(`${product.name} is Delete SuccessFully`);
        handleClose();
      };
      return (
        <div className="">
          <IconButton>
            <EditRoundedIcon className="text-green-600" />{" "}
          </IconButton>
          <IconButton onClick={handleOpen}>
            <DeleteRoundedIcon color="primary" />{" "}
          </IconButton>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography
                id="modal-modal-title"
                component="h2"
                className="mb-6 font-medium capitalize"
              >
                Are You Sure What to Delete{" "}
                <span className="font-semibold text-primary-dark">
                  {params.row.name}
                </span>
              </Typography>
              <div className="flex justify-end items-center space-x-4 ">
                <Button
                  variant="contained"
                  className="capitalize"
                  onClick={() => deleteHandler(params.row)}
                >
                  {" "}
                  Delete
                </Button>
                <Button
                  variant="outlined"
                  onClick={handleClose}
                  className="capitalize text-green-600 border-green-600"
                >
                  {" "}
                  cancel
                </Button>
              </div>
            </Box>
          </Modal>
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
