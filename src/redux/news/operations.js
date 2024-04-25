// @ts-nocheck
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

// GET ALL NEWS FROM BACKEND BY PAGE
export const fetchNews = createAsyncThunk('news/fetchAll', async (page, thunkAPI) => {
    try {
        const response = await axios.get(`/news?page=${page}`);
        console.log(response);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})