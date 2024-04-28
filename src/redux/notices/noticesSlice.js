import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories, fetchGenders, fetchSpecies, fetchCities } from "./operations";

const initialState = {
  notices: [],
  categories: [],
  genders: [],
  species: [],
  cities: [],
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
      .addCase(fetchSpecies.fulfilled, (state, {payload}) => {
        state.species = payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchSpecies.pending, isPending)
      .addCase(fetchSpecies.rejected, isRejected)
      .addCase(fetchCities.fulfilled, (state, {payload}) => {
        state.cities = payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchCities.pending, isPending)
      .addCase(fetchCities.rejected, isRejected)
  },
});

export const NoticesReducer = noticesSlice.reducer;