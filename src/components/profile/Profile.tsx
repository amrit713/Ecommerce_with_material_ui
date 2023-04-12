import { Button, Typography } from "@mui/material";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";

import TemporaryDrawer from "./Drawer";
import MyProfile from "./MyProfile";
import ProfileTitle from "./ProfileTitle";

function Profile() {
  return (
    <div className="">
      <div className="w-[25%]"></div>

      <div className=" md:w-[75%]">
        <ProfileTitle title="my profile" btn_title="edit profile" link="profile/edit" />
        {/* profile */}

        <MyProfile />
      </div>
    </div>
  );
}

export default Profile;
