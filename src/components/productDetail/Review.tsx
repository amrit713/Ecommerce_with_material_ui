import Image from "next/image";
import React from "react";
import Avatar from "@mui/material/Avatar";
import { Typography,Rating } from "@mui/material";


function Review() {
  var dt = new Date();
  return (
    <div className="space-y-4 ">
      <div className="flex items-center space-x-2 ">
        <Avatar
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          className="h-[4rem] w-[4rem] cursor-pointer"
        />

        <div className="">
          <Typography variant="subtitle1" className="font-medium ">
            Jannie Schumm
          </Typography>

          <div className="flex items-center    ">
          <Rating name="read-only" value={3} readOnly  className="text-amber-500 "/>
            <Typography
              variant="subtitle1"
              className="font-bold text-dark ml-4 bg-red"
            >
              {" "}
              4.5{" "}
            </Typography>
            <Typography className=" font-medium text-gray-500 ml-4">
              {" "}
              {`${dt.getFullYear()} / ${dt.getMonth()} / ${dt.getDate()}`}
            </Typography>
          </div>
        </div>
      </div>

      <Typography variant="subtitle1" className=" sm:w-[50rem] text-dark">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius massa id
        ut mattis. Facilisis vitae gravida egestas ac account.{" "}
      </Typography>
    </div>
  );
}

export default Review;
