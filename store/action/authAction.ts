import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Cookie from "js-cookie";
import { IUser } from "../../src/interface/IUser";

const API_URL = "http://localhost:4000";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (
    { firstName, lastName, email, password, passwordConfirm }: IUser,
    { rejectWithValue }
  ) => {
    try {
      const instance = axios.create({
        withCredentials: true,
        baseURL: API_URL,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await instance.post(
        "/api/v1/user/signup",
        {
          firstName,
          lastName,
          email,
          password,
          passwordConfirm,
        },
        config
      );

      console.log(data);

      return data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const instance = axios.create({
        withCredentials: true,
        baseURL: API_URL,
      });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await instance.post(
        "/api/v1/user/login",
        { email, password },
        config
      );

      return data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

//!getMe

export const getMe = createAsyncThunk("user/me", async () => {
  try {
    const { data } = await axios.get(`${API_URL}/api/v1/user/me`, {
      withCredentials: true,
    });
    console.log(data);
    return data;
  } catch (error: any) {
    return error.response.data.message;
  }
});

//!logout

export const logout = createAsyncThunk("user/logout", async () => {
  try {
    await axios.get(`${API_URL}/api/v1/user/logout`, {
      withCredentials: true,
    });
  } catch (error: any) {
    return error.response.data.message;
  }
});

//!forgot password
export const forgotPasswordUser = createAsyncThunk(
  "login/forgotpassword",
  async ({ email }: any, { rejectWithValue }) => {
    console.log(email);
    try {
      const { data } = await axios.post(
        `${API_URL}/api/v1/user/forgetPassword`,
        { email },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data);
      return data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

//!ResetPassword
export const resetPasswordUser = createAsyncThunk(
  "login/resetpassword",
  async ({ value, resetToken }: any, { rejectWithValue }: any) => {
    try {
      const instance = axios.create({
        // withCredentials: true,
        baseURL: API_URL,
      });
      const { data } = await instance.patch(
        `/api/v1/user/resetPassword/${resetToken}`,
        { password: value.password, passwordConfirm: value.passwordConfirm },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

//update user

export const updateMe = createAsyncThunk(
  "update/me",
  async (form: any, { rejectWithValue }) => {
   console.log(form)
   

    try {
      const { data } = await axios.patch(
        `${API_URL}/api/v1/user/updateMe`,
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      return data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
