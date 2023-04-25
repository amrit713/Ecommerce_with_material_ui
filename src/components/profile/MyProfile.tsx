import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import { Avatar, Typography } from "@mui/material";
import Image from "next/image";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

import ProfileItem from "./ProfileItem";
import { useTypedSelector } from "../../../store/store";


function MyProfile() {
  const { userInfo }: { userInfo: any } = useTypedSelector(
    (state) => state.auth
  );

 

  return (
    <div>
      <div className="bg-white p-4  mt-8 rounded-md box_shadow flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Avatar className="relative bg-primary-main/90 w-[7rem] h-[7rem]">
          {userInfo?.profilePic ? (
                <Image
                  alt="profileImage"
                  src={`http://localhost:4000/public/img/users/${userInfo.profilePic}`}
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-105 duration-300 "
                />
              ) : (
                <PersonOutlinedIcon className="text-[4rem]" />
              )}
          </Avatar>
          <div className="">
            <Typography variant="h6" className="font-semibold capitalize">
              {`${userInfo?.firstName} ${userInfo?.lastName}`}
            </Typography>

            <div className="flex items-center space-x-2 text-gray-600 ">
              <EmailIcon className="text-sm" />
              <Typography variant="body1" className="text-sm ">
                {" "}
                {userInfo?.email}
              </Typography>
            </div>
          </div>
        </div>

        <Typography
          variant="h6"
          className="font-medium uppercase text-gray-400"
        >
          customer
        </Typography>
      </div>

      <div className="grid mt-8 grid-cols-1  gap-6 md:grid-cols-2 lg:grid-cols-4">
        <ProfileItem count={18} title="all order" />
        <ProfileItem count={4} title="awaiting payments" />
        <ProfileItem count={0} title="awaiting shipment" />
        <ProfileItem count={6} title="aawaiting delivery" />
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 bg-white p-4  mt-8 rounded-md box_shadow">
        <div className="border-solid border p-2 text-center rounded-md border-gray-200">
          <Typography className="text-gray-600 text-sm"> First Name</Typography>
          <Typography className="font-medium capitalize">
            {" "}
            {userInfo?.firstName}
          </Typography>
        </div>

        <div className="border-solid border p-2 text-center rounded-md border-gray-200">
          <Typography className="text-gray-600 text-sm"> Last Name</Typography>
          <Typography className="font-medium capitalize">
            {" "}
            {userInfo?.lastName}
          </Typography>
        </div>

        <div className="border-solid border p-2 text-center rounded-md border-gray-200">
          <Typography className="text-gray-600 text-sm"> Email</Typography>
          <Typography className="font-medium"> {userInfo?.email}</Typography>
        </div>

        <div className="border-solid border p-2 text-center rounded-md border-gray-200">
          <Typography className="text-gray-600 text-sm"> Phone</Typography>
          <Typography className="font-medium"> +977 {userInfo?.phoneNo? userInfo.phoneNo:null}</Typography>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
