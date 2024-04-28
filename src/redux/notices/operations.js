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

// GET SPECIES TYPES FOR SELECT
export const fetchSpecies = createAsyncThunk(
  "species/fetchAll",
  async (thunkAPI) => {
    try {
      const response = await axios.get("/notices/species");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// GET CITIES LOCATIONS FOR SELECT
export const fetchCities = createAsyncThunk(
  "cities/fetchAll",
  async (thunkAPI) => {
    try {
      const response = await axios.get("/cities");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// GET NOTICES BY FILTER FROM BACKEND
export const fetchNotices = createAsyncThunk("notices/fetchAll",
 async ({keyword, category, species, locationId, byPrice, byPopularity}, thunkAPI) => {
  let filteredData;
  try {
    if(!keyword && !category && !species && !locationId && !byPrice && !byPopularity) {
      const response = await axios.get('/notices');
      filteredData = response.data;
      console.log(filteredData);
    }
    return filteredData;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
 }
)