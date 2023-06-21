import React from "react";
import Dashboard from "./Dashboard";
import ProfileTitle from "./ProfileTitle";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Address from "../checkout/Address";
import SingleAddress from "./SingleAddress";
import { Typography } from "@mui/material";
import { useTypedSelector } from "../../../store/store";

function Addresses() {

  const {userInfo}:any = useTypedSelector(state=>state.auth)
  console.log(userInfo)
  return (
    <div>
      <div className="flex">
        <div className=" hidden md:flex md:w-[25%]">
          <Dashboard />
        </div>

        <div className="w-full md:w-[75%]">
          <ProfileTitle
            icon={<LocationOnIcon className="text-[32px] text-dark" />}
            title="My Addresses"
          />

          <div className="mt-10 space-y-4">
            <Address title ="address" />

            <Typography className="text-lg font-semibold">Addresses</Typography>

           {userInfo.address?.map((adrs:any)=>(
            <SingleAddress key={adrs._id} address={adrs}/>
           ))}


          </div>
        </div>
      </div>
    </div>
  );
}

export default Addresses;
