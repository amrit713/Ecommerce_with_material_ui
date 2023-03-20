import { Button, TextField, Typography, Checkbox } from "@mui/material";
import React from "react";
import GoogleIcon from "@mui/icons-material/Google";


function Signup() {



  return (
    <div className="bg-white mt-36  m-auto max-w-[600px] min-w-[310px] rounded-lg box_shadow px-[48px] py-[32px] text-center space-y-6 ">
      <div className="">
        <Typography variant="h6" className="font-semibold capitalize">
          {" "}
          Create Your Account{" "}
        </Typography>
        <Typography
          variant="body1"
          className=" capitalize text-xs font-medium text-gray-600 mb-4"
        >
          {" "}
          Please fill all fields to continue{" "}
        </Typography>
      </div>

      <div className="space-y-6 sm:space-y-0 sm:flex sm:space-x-4">
        <TextField label="First Name" className="w-full" required />
        <TextField label="Last Name" className="w-full" required />
      </div>

      <TextField label="Email" className="w-full" required />

      <TextField label="Password" type="password" className="w-full" required />
      <div className="">
        <TextField
          label="Password Confirm"
          type="password"
          className="w-full "
          required
        />
        <div className="flex items-center">
          <Checkbox />
          <Typography
            variant="body1"
            className=" mt-1 capitalize text-left text-sm font-medium text-gray-600"
          >
            By signing up, you agree to{" "}
            <Button className="capitalize font-semibold text-dark border-solid   hover:text-primary-dark duration-200 ease-linear">
              Terms & Condtion
            </Button>
          </Typography>
        </div>
      </div>

      <Button variant="contained" size="large" className="w-full ">
        Sign up
      </Button>

      <Button
        variant="contained"
        size="large"
        className="w-full bg-googleBlue duration-300 hover:bg-googleDark  "
      >
        <GoogleIcon className="mx-2" />
        Sign Up With Google
      </Button>

      <Typography variant="subtitle1">
        {" "}
        Already have an account?{" "}
        <Button
          className="capitalize font-semibold text-dark border-solid   hover:text-primary-dark duration-200 ease-linear"
         
        >
          {" "}
          log in
        </Button>{" "}
      </Typography>
    </div>
  );
}



export default Signup;
