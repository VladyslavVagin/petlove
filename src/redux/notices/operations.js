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
 async ({keyword, category, species, locationId, radioSearch, page, sex}, thunkAPI) => {
  let filteredData;
  try {
    if(!keyword && !category && !species && !locationId && !radioSearch && !sex) {
      const response = await axios.get(`/notices?page=${page}`);
      filteredData = response.data;
    } else if (keyword && !category && !species && !locationId && !radioSearch && !sex) {
      const response = await axios.get(`/notices?page=${page}&keyword=${keyword}`);
      filteredData = response.data;
    } else if (!keyword && category && !species && !locationId && !radioSearch && !sex) {
      const response = await axios.get(`/notices?page=${page}&category=${category}`);
      filteredData = response.data;
    } else if (!keyword && !category && species && !locationId && !radioSearch && !sex) {
      const response = await axios.get(`/notices?page=${page}&species=${species}`);
      filteredData = response.data;
    } else if (!keyword && !category && !species && locationId && !radioSearch && !sex) {
      const response = await axios.get(`/notices?page=${page}&locationId=${locationId}`);
      filteredData = response.data;
    } else if (!keyword && !category && !species && !locationId && !radioSearch && sex) {
         const itemsPerPage = 6;
         const currentPage = page;
         const startIndex = (currentPage - 1) * itemsPerPage;
         const endIndex = startIndex + itemsPerPage;
      const response = await axios.get(`/notices?&limit=2000`);
      let filteredResults = response.data.results.filter(item => item.sex === sex);
      const totalPages = Math.ceil(filteredResults?.length / 6);
      const displayedObjects = filteredResults.slice(startIndex, endIndex);
      const sendData = {results: displayedObjects, totalPages: totalPages};
      console.log(sendData);
      return sendData;
    }
    return filteredData;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
 }
)