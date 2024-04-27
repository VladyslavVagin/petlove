import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories, fetchGenders } from "./operations";

const initialState = {
  notices: [],
  categories: [],
  genders: [],
  isLoading: false,
  isError: false,
};

const isPending = (state) => {
  state.isLoading = true;
  state.isError = false;
};

const isRejected = (state) => {
  state.isLoading = false;
  state.isError = true;
};

export const noticesSlice = createSlice({
  name: "notices",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.categories = payload;
      })
      .addCase(fetchCategories.pending, isPending)
      .addCase(fetchCategories.rejected, isRejected)
      .addCase(fetchGenders.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.isError = false;
        state.genders = payload;
      })
      .addCase(fetchGenders.pending, isPending)
      .addCase(fetchGenders.rejected, isRejected)
  },
});

export const NoticesReducer = noticesSlice.reducer;
