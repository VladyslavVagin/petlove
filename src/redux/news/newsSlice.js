// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";
import { fetchNews } from "./operations";

const initialState = {
    news: [],
    isLoading: false,
    isError: false
}

export const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchNews.fulfilled, (state, {payload}) => {
          state.isLoading = false;
          state.isError = false;
          state.news = payload.results;
        }).addCase(fetchNews.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        }).addCase(fetchNews.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        })
    }
})

export const NewsReducer = newsSlice.reducer;