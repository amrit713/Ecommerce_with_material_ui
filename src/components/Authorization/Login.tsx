import { Button, TextField, Typography } from "@mui/material";
import React from "react";

function Login() {
  return (
    <div className="bg-white mt-52  m-auto max-w-[600px] min-w-[310px] rounded-lg box_shadow px-[48px] py-[32px] text-center space-y-6 ">
      <div className="">
        <Typography variant="h6" className="font-semibold capitalize">
          {" "}
          welcome to ecommerce{" "}
        </Typography>
        <Typography
          variant="body1"
          className=" capitalize text-xs font-medium text-gray-600 mb-4"
        >
          {" "}
          Log in with email & password{" "}
        </Typography>
      </div>

      <TextField label="Email or Phone" className="w-full" required />
      <div className="">
        <TextField
          label="Password"
          type="password"
          className="w-full "
          required
        />
        <Typography
          variant="body1"
          className=" mt-1 capitalize text-left text-sm font-medium text-gray-600"
        >
          {" "}
          Forgot your password?{" "}
          <Button className="capitalize font-semibold text-dark border-solid   hover:text-primary-dark duration-200 ease-linear">
            Reset It
          </Button>
        </Typography>
      </div>

      <Button variant="contained" size="large" className="w-full ">
        LogIn
      </Button>

      

      <Typography variant="subtitle1">
        {" "}
        Don't have an account?{" "}
        <Button className="capitalize font-semibold text-dark border-solid   hover:text-primary-dark duration-200 ease-linear">
          {" "}
          Sign up
        </Button>{" "}
      </Typography>
    </div>
  );
}

export default Login;
