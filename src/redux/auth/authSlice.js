import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshUser } from "./operations";

const initialState = {
  user: { name: null, email: null, phone: null, avatar: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  pets: [],
  noticesViewed: [],
  noticesFavorites: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
      }).addCase(logIn.pending, state => {
        state.isLoading = true;
      })
      .addCase(logIn.fulfilled, (state, {payload}) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
      }).addCase(logIn.rejected, state => {
        state.isLoading = false;
      }).addCase(logOut.pending, state => {
        state.isLoading = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null, phone: null, avatar: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isLoading = false;
        state.noticesFavorites = [];
        state.noticesViewed = [];
      })
      .addCase(logOut.rejected, state => {
        state.isLoading = false;
      }).addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, {payload}) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.user.phone = payload.phone;
        state.user.avatar = payload.avatar;
        state.noticesFavorites = payload.noticesFavorites;
        state.noticesViewed = payload.noticesViewed;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
