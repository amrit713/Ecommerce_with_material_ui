import { createSlice } from "@reduxjs/toolkit";

import {
  registerUser,
  loginUser,
  getMe,
  logout,
  forgotPasswordUser,
  resetPasswordUser,
  updateMe,
} from "../action/authAction";

const initialState = {
  loading: false,
  userInfo: {},
  token: null,
  errorLogin: null,
  errorRegister: null,
  isAuthenticated: false,
  error: null,

  forgetPassword: {
    message: null,
    error: null,
  },
  passwordReset: {
    message: null,
    error: null,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    //!register User
    builder.addCase(registerUser.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    }),
      builder.addCase(
        registerUser.fulfilled,
        (state: any, { payload }: any) => {
          state.loading = false;
          state.userInfo = payload.data.user;
          state.isAuthenticated = true;
        }
      ),
      builder.addCase(registerUser.rejected, (state: any, { payload }: any) => {
        state.loading = false;
        state.errorRegister = payload;
      });

    //!login user
    builder.addCase(loginUser.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    }),
      builder.addCase(loginUser.fulfilled, (state: any, { payload }: any) => {
        state.loading = false;
        state.userInfo = payload?.data.user;

        state.isAuthenticated = true;
      }),
      builder.addCase(loginUser.rejected, (state: any, { payload }: any) => {
        state.loading = false;
        state.errorLogin = payload;
      });

    //!get me

    builder.addCase(getMe.fulfilled, (state: any, { payload }: any) => {
      if (payload.user) {
        state.isAuthenticated = true;
      }

      state.userInfo = payload.user;
    });

    builder.addCase(getMe.rejected, (state: any, { payload }: any) => {
      state.error = payload;
    });
    //!logout
    builder.addCase(logout.fulfilled, (state: any, { payload }: any) => {
      state.isAuthenticated = false;
    });

    //!forgot Password
    builder.addCase(
      forgotPasswordUser.pending,
      (state: any, { payload }: any) => {
        state.loading = true;
        state.forgetPassword.error = null;
        state.forgetPassword.message = null;
      }
    );

    builder.addCase(
      forgotPasswordUser.fulfilled,
      (state: any, { payload }: any) => {
        state.forgetPassword.message = payload.message;
        state.loading = false;
      }
    );

    builder.addCase(
      forgotPasswordUser.rejected,
      (state: any, { payload }: any) => {
        state.forgetPassword.error = payload;
        state.loading = false;
      }
    );

    //resetPassword
    builder.addCase(
      resetPasswordUser.pending,
      (state: any, { payload }: any) => {
        state.loading = true;
        state.passwordReset.error = null;
        state.passwordReset.message = null;
      }
    );

    builder.addCase(
      resetPasswordUser.fulfilled,
      (state: any, { payload }: any) => {
        state.loading = false;
        state.passwordReset.message = "Password Change Successfully";
      }
    );

    builder.addCase(
      resetPasswordUser.rejected,
      (state: any, { payload }: any) => {
        state.passwordReset.error = payload;
        state.loading = false;
      }
    );

    //update me

    builder.addCase(updateMe.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    }),
      builder.addCase(updateMe.fulfilled, (state: any, { payload }: any) => {
        state.loading = false;
        state.userInfo = payload?.data.user;
      }),
      builder.addCase(updateMe.rejected, (state: any, { payload }: any) => {
        state.loading = false;
        state.errorLogin = payload;
      });
  },
});

export default authSlice.reducer;
