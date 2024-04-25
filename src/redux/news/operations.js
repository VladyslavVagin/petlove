// @ts-nocheck
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

// GET ALL NEWS FROM BACKEND
export const fetchNews = createAsyncThunk('news/fetchAll', async (thunkAPI) => {
    try {
        const response = await axios.get('/news');
        console.log(response);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})