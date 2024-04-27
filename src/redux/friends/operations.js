// @ts-nocheck
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

// GET ALL OUR FRIENDS FROM BACKEND
export const fetchFriends = createAsyncThunk("friends/fetchAll", async (thunkAPI) => {
    try {
        const response = await axios.get('/friends');
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})