import React from "react";
import PersonIcon from "@mui/icons-material/Person";

import MyProfile from "./MyProfile";
import ProfileTitle from "./ProfileTitle";
import Dashboard from "./Dashboard";

function Profile() {
  return (
    <div className="flex">
      <div className=" hidden md:flex md:w-[25%]">
        <Dashboard />
      </div>

      <div className="w-full md:w-[75%]">
        <ProfileTitle
          icon={<PersonIcon className="text-[32px] text-dark" />}
          title="my profile"
          btn_title="edit profile"
          path="profile/edit"
        />
        {/* profile */}

        <MyProfile />
      </div>
    </div>
  );
}

export default Profile;
