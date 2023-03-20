import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import { Button, Typography } from "@mui/material";

import TemporaryDrawer from "./Drawer";

interface IProps {
    title:string;
    btn_title:string;
}

function ProfileTitle(props:IProps) {
  return (
    <div className=" flex justify-between items-start ">
      <div className=" w-full space-y-4 md:flex md:space-y-0 items-center justify-between ">
        <div className=" flex  items-center space-x-2">
          <PersonIcon className="text-[32px] text-dark" />
          <Typography variant="h5" className="capitalize font-semibold">
            {props.title}
          </Typography>
        </div>
        <Button className="shadow-none capitalize font-semibold bg-red-50">
          {props.btn_title}
        </Button>
      </div>

      <div className="md:hidden">
        <TemporaryDrawer />
      </div>
    </div>
  );
}

export default ProfileTitle;
