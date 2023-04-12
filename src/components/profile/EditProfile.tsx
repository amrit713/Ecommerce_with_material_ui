import React from "react";
import {
  Avatar,
  Button,
  CircularProgress,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import ProfileTitle from "./ProfileTitle";
import { useTypedDispatch, useTypedSelector } from "../../../store/store";
import { updateMe } from "../../../store/action/authAction";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

const initialValues = {
  email: "",
  firstName: "",
  lastName: "",
  file: "",
  phoneNo: "",
};

function EditProfile() {
  const dispatch = useTypedDispatch();
  const router = useRouter();
  const { userInfo, loading } = useTypedSelector((state) => state.auth);

  const {
    values,

    handleBlur,

    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: initialValues,
    onSubmit: (values: any) => {
      const form = new FormData();

      values.file && form.append("profilePic", values.file);
      values.firstName && form.append("firstName", values.firstName);
      values.lastName && form.append("lastName", values.lastName);
      values.email && form.append("email", values.email);
      values.phoneNo && form.append("phoneNo", values.phoneNo);

      console.log(values);

      dispatch(updateMe(form));
      toast.success("Profile Updated Successfully");
      router.push("/profile");
    },
  });

  return (
    <div className="">
      <ProfileTitle title="edit profile" btn_title="my profile" />
      <form action="" onSubmit={handleSubmit}>
        <div className="bg-white p-4  mt-8 rounded-md box_shadow ">
          <div className="flex items-end space-x-4">
            <div className="relative w-[5rem] h-[5rem] ">
              <Avatar
                src={`http://localhost:4000/public/img/users/${userInfo.profilePic}`}
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
                <AddPhotoAlternateOutlinedIcon />{" "}
                <input
                  type="file"
                  hidden
                  name="file"
                  // onTouchEnd={touched}
                  onChange={(e: any) =>
                    setFieldValue("file", e.target.files[0])
                  }
                  onBlur={handleBlur}
                  accept="image/*"
                />
              </IconButton>
            </div>
            <Typography className="text-[12px] text-gray-600">
              {values.file.name}
            </Typography>
          </div>
          <div className=" mt-8 grid gap-4 grid-cols-1 md:grid-cols-2 ">
            <TextField
              label="First Name"
              InputProps={{ sx: { height: 40 } }}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
              name="firstName"
            />

            <TextField
              name="lastName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
              label="Last Name"
              InputProps={{ sx: { height: 40 } }}
            />
            <TextField
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              label="Email"
              InputProps={{ sx: { height: 40 } }}
            />
            <TextField
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phoneNo}
              type="tel"
              name="phoneNo"
              label="Phone Number"
              InputProps={{ sx: { height: 40 } }}
            />
          </div>

          <Button
            variant="contained"
            className="capitalize mt-4 space-x-4"
            type="submit"
          >
            {" "}
            <span>save change</span>{" "}
            {loading && (
              <CircularProgress className="text-white text-sm " size={18} />
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default EditProfile;
