// @ts-nocheck
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

// GET CATEGORIES FOR SELECT
export const fetchCategories = createAsyncThunk(
  "categories/fetchAll",
  async (thunkAPI) => {
    try {
      const response = await axios.get("/notices/categories");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// GET GENDER TYPES FOR SELECT
export const fetchGenders = createAsyncThunk(
  "sex/fetchAll",
  async (thunkAPI) => {
    try {
      const response = await axios.get("/notices/sex");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
