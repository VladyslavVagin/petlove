import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshUser, editUser } from "./operations";

const initialState = {
  user: { name: null, email: null, phone: null, avatar: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  pets: [],
  noticesViewed: [],
  noticesFavorites: [],
  isFirstFavorite: false,
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
        state.user.name = payload.dataReceived.name;
        state.user.email = payload.dataReceived.email;
        state.user.phone = payload.dataReceived.phone;
        state.user.avatar = payload.dataReceived.avatar;
        state.noticesFavorites = payload.dataReceived.noticesFavorites;
        state.noticesViewed = payload.dataReceived.noticesViewed;
        state.isFirstFavorite = payload.isFirstFavorite;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      }).addCase(editUser.pending, (state) => {
        state.isLoading = true;
        state.isRefreshing = true;
      }).addCase(editUser.fulfilled, (state, {payload}) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.user.phone = payload.phone;
        state.user.avatar = payload.avatar;
        state.isLoading = false;
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
