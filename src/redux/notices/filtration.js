// @ts-nocheck
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const fetchNotices = createAsyncThunk("notices/fetchAll", async (params, thunkAPI) => {
  const { keyword, category, species, locationId, radioSearch, page = 1, sex } = params;
  const itemsPerPage = 6;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const queryParams = {
    keyword,
    category,
    species,
    locationId,
    page: sex ? undefined : page,
    limit: sex ? 2000 : 6,
    byPrice: radioSearch === "Cheap" ? true : radioSearch === "Expensive" ? false : undefined,
    byPopularity: radioSearch === "Popular" ? false : radioSearch === "Unpopular" ? true : undefined,
  };
try {
  const response = await axios.get("/notices", { params: queryParams });

  if (!sex) {
    return response.data;
  }

  let filteredResults = response.data.results.filter(item => item.sex === sex);
  const totalPages = Math.ceil(filteredResults.length / itemsPerPage);
  const displayedObjects = filteredResults.slice(startIndex, endIndex);

  return { results: displayedObjects, totalPages };
} catch (error) {
  return thunkAPI.rejectWithValue(error.message);
}

});

