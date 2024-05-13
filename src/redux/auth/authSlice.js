import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshUser, editUser, addPet, removePet } from "./operations";

const initialState = {
  user: { name: null, email: null, phone: null, avatar: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  pets: [],
  noticesViewed: [],
  noticesFavorites: []
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
        state.pets = [];
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
        state.pets = payload.pets;
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
      }).addCase(addPet.pending, (state) => {
        state.isLoading = true;
        state.isRefreshing = true;
      }).addCase(addPet.rejected, (state) => {
        state.isLoading = false;
        state.isRefreshing = false;
      }).addCase(addPet.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.isRefreshing = false;
        state.pets = payload.pets;
      }).addCase(removePet.pending, (state) => {
        state.isLoading = true;
        state.isRefreshing = true;
      }).addCase(removePet.rejected, (state) => {
        state.isLoading = false;
        state.isRefreshing = false;
      }).addCase(removePet.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.isRefreshing = false;
        state.pets = payload.pets;
      });
  },
});

export const authReducer = authSlice.reducer;
