import React from "react";
import { Avatar, Button, IconButton, TextField } from "@mui/material";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import ProfileTitle from "./ProfileTitle";

function EditProfile() {
  return (
    <div className="">
      <ProfileTitle title="edit profile" btn_title="my profile" />

      <div className="bg-white p-4  mt-8 rounded-md box_shadow ">
        <div className="relative w-[5rem] h-[5rem] ">
          <Avatar
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            className="w-[5rem] h-[5rem]"
          />
          <IconButton
            sx={{
              "&:hover": {
                backgroundColor: "#e5e7eb",
              },
            }}
            component="label"
            className="absolute -bottom-2 -right-2 bg-gray-200 text-primary-main "
          >
            {" "}
            <AddPhotoAlternateOutlinedIcon /> <input type="file" hidden />
          </IconButton>
        </div>

        <div className=" mt-8 grid gap-4 grid-cols-1 md:grid-cols-2 ">
          <TextField label="First Name" InputProps={{ sx: { height: 40 } }} />
          <TextField label="Last Name" InputProps={{ sx: { height: 40 } }} />
          <TextField label="Email" InputProps={{ sx: { height: 40 } }} />
          <TextField label="Phone Number" InputProps={{ sx: { height: 40 } }} />
        </div>

        <Button variant="contained"  className="capitalize mt-4">
          {" "}
          save change
        </Button>
      </div>
    </div>
  );
}

export default EditProfile;
