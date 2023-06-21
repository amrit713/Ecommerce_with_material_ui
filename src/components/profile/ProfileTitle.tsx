import React, { AllHTMLAttributes, HtmlHTMLAttributes } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { Button, Typography } from "@mui/material";
import PrintIcon from '@mui/icons-material/Print';

import TemporaryDrawer from "./Drawer";
import Link from "next/link";
import { useRouter } from "next/router";

interface IProps {
  btn_title?: string;
  path?: string;
  title: string;
  icon:any
  print?:any
}

function ProfileTitle(props: IProps) {
  const router = useRouter()
  return (
    <div className=" flex justify-between items-start ">
      <div className=" w-full space-y-4 md:flex md:space-y-0 items-center justify-between ">
        <div className=" flex  items-center space-x-2">
          {props.icon}
          <Typography variant="h5" className="capitalize font-semibold">
            {props.title}
          </Typography>
        </div>

       {props.btn_title &&( <Button className="shadow-none capitalize font-semibold bg-red-50" onClick={()=>router.push(props.path)}>
          {props.btn_title}
        </Button>)}

       
      </div>

{props.title === "Order Details" && <Button variant="outlined" className="capitalize " onClick={props.print}>  <PrintIcon className="mr-2"/> 
 print </Button> }
      <div className="md:hidden">
        <TemporaryDrawer />
      </div>
    </div>
  );
}

export default ProfileTitle;
