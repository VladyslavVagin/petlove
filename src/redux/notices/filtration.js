// @ts-nocheck
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

// GET NOTICES BY FILTER FROM BACKEND
export const fetchNotices = createAsyncThunk("notices/fetchAll",
 async ({keyword, category, species, locationId, radioSearch, page, sex}, thunkAPI) => {
  let filteredData;
  const itemsPerPage = 6;
  const currentPage = page;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  try {
    // ================================ IF ONLY ONE PARAMETER RECEIVED =============================================================================================
    if(!keyword && !category && !species && !locationId && !radioSearch && !sex) {
      const response = await axios.get(`/notices?${page}`);
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
      const response = await axios.get(`/notices?&limit=2000`);
      let filteredResults = response.data.results.filter(item => item.sex === sex);
      const totalPages = Math.ceil(filteredResults?.length / 6);
      const displayedObjects = filteredResults.slice(startIndex, endIndex);
      const sendData = {results: displayedObjects, totalPages: totalPages};
      return sendData;
    } else if (!keyword && !category && !species && !locationId && radioSearch && !sex) {
      if(radioSearch === "Cheap") {
        const response = await axios.get(`/notices?page=${page}&byPrice=true`);
        filteredData = response.data;
        return filteredData;
      } else if (radioSearch === "Expensive") {
        const response = await axios.get(`/notices?page=${page}&byPrice=false`);
        filteredData = response.data;
        return filteredData;
      } else if (radioSearch === "Popular") {
        const response = await axios.get(`/notices?page=${page}&byPopularity=false`);
        filteredData = response.data;
        return filteredData;
      } else  if (radioSearch === "Unpopular") {
        const response = await axios.get(`/notices?page=${page}&byPopularity=true`);
        filteredData = response.data;
        return filteredData;
      }
    }
    // ========================================================================================================================================
    // ====================  IF ONLY 2 (TWO) PARAMETERS ======================================================================================
    else if (keyword && category && !species && !locationId && !radioSearch && !sex) {
      const response = await axios.get(`/notices?page=${page}&keyword=${keyword}&category=${category}`);
      filteredData = response.data;
    } else if (keyword && !category && species && !locationId && !radioSearch && !sex) {
      const response = await axios.get(`/notices?page=${page}&keyword=${keyword}&species=${species}`);
      filteredData = response.data;
    } else if (keyword && !category && !species && locationId && !radioSearch && !sex) {
      const response = await axios.get(`/notices?page=${page}&keyword=${keyword}&locationId=${locationId}`);
      filteredData = response.data;
    } else if (keyword && !category && !species && !locationId && radioSearch && !sex) {
      if(radioSearch === "Cheap") {
        const response = await axios.get(`/notices?page=${page}&keyword=${keyword}&byPrice=true`);
        filteredData = response.data;
        return filteredData;
      } else if (radioSearch === "Expensive") {
        const response = await axios.get(`/notices?page=${page}&keyword=${keyword}&byPrice=false`);
        filteredData = response.data;
        return filteredData;
      } else if (radioSearch === "Popular") {
        const response = await axios.get(`/notices?page=${page}&keyword=${keyword}&byPopularity=false`);
        filteredData = response.data;
        return filteredData;
      } else  if (radioSearch === "Unpopular") {
        const response = await axios.get(`/notices?page=${page}&keyword=${keyword}&byPopularity=true`);
        filteredData = response.data;
        return filteredData;
      }
    } else if (keyword && !category && !species && !locationId && !radioSearch && sex) {
      const response = await axios.get(`/notices?&limit=2000&keyword=${keyword}`);
      let filteredResults = response.data.results.filter(item => item.sex === sex);
      const totalPages = Math.ceil(filteredResults?.length / 6);
      const displayedObjects = filteredResults.slice(startIndex, endIndex);
      const sendData = {results: displayedObjects, totalPages: totalPages};
      return filteredData = sendData;
    } else if (!keyword && category && species && !locationId && !radioSearch && !sex) {
      const response = await axios.get(`/notices?page=${page}&category=${category}&species=${species}`);
      filteredData = response.data;
    } else if (!keyword && category && !species && locationId && !radioSearch && !sex) {
      const response = await axios.get(`/notices?page=${page}&category=${category}&locationId=${locationId}`);
      filteredData = response.data;
    } else if (!keyword && category && !species && !locationId && !radioSearch && sex) {
      const response = await axios.get(`/notices?&limit=2000&category=${category}`);
      let filteredResults = response.data.results.filter(item => item.sex === sex);
      const totalPages = Math.ceil(filteredResults?.length / 6);
      const displayedObjects = filteredResults.slice(startIndex, endIndex);
      const sendData = {results: displayedObjects, totalPages: totalPages};
      return filteredData = sendData;
    } else if (!keyword && category && !species && !locationId && radioSearch && !sex) {
      if(radioSearch === "Cheap") {
        const response = await axios.get(`/notices?page=${page}&category=${category}&byPrice=true`);
        filteredData = response.data;
        return filteredData;
      } else if (radioSearch === "Expensive") {
        const response = await axios.get(`/notices?page=${page}&category=${category}&byPrice=false`);
        filteredData = response.data;
        return filteredData;
      } else if (radioSearch === "Popular") {
        const response = await axios.get(`/notices?page=${page}&category=${category}&byPopularity=false`);
        filteredData = response.data;
        return filteredData;
      } else  if (radioSearch === "Unpopular") {
        const response = await axios.get(`/notices?page=${page}&category=${category}&byPopularity=true`);
        filteredData = response.data;
        return filteredData;
      }
    } else if (!keyword && !category && species && locationId && !radioSearch && !sex) {
      const response = await axios.get(`/notices?page=${page}&species=${species}&locationId=${locationId}`);
      filteredData = response.data;
    } else if (!keyword && !category && species && !locationId && !radioSearch && sex) {
      const response = await axios.get(`/notices?&limit=2000&species=${species}`);
      let filteredResults = response.data.results.filter(item => item.sex === sex);
      const totalPages = Math.ceil(filteredResults?.length / 6);
      const displayedObjects = filteredResults.slice(startIndex, endIndex);
      const sendData = {results: displayedObjects, totalPages: totalPages};
      return filteredData = sendData;
    } else if (!keyword && !category && species && !locationId && radioSearch && !sex) {
      if(radioSearch === "Cheap") {
        const response = await axios.get(`/notices?page=${page}&species=${species}&byPrice=true`);
        filteredData = response.data;
        return filteredData;
      } else if (radioSearch === "Expensive") {
        const response = await axios.get(`/notices?page=${page}&species=${species}&byPrice=false`);
        filteredData = response.data;
        return filteredData;
      } else if (radioSearch === "Popular") {
        const response = await axios.get(`/notices?page=${page}&species=${species}&byPopularity=false`);
        filteredData = response.data;
        return filteredData;
      } else  if (radioSearch === "Unpopular") {
        const response = await axios.get(`/notices?page=${page}&species=${species}&byPopularity=true`);
        filteredData = response.data;
        return filteredData;
      }
    } else if (!keyword && !category && !species && locationId && !radioSearch && sex) {
      const response = await axios.get(`/notices?&limit=2000&locationId=${locationId}`);
      let filteredResults = response.data.results.filter(item => item.sex === sex);
      const totalPages = Math.ceil(filteredResults?.length / 6);
      const displayedObjects = filteredResults.slice(startIndex, endIndex);
      const sendData = {results: displayedObjects, totalPages: totalPages};
      return filteredData = sendData;
    } else if (!keyword && !category && !species && locationId && radioSearch && !sex) {
      if(radioSearch === "Cheap") {
        const response = await axios.get(`/notices?page=${page}&locationId=${locationId}&byPrice=true`);
        filteredData = response.data;
        return filteredData;
      } else if (radioSearch === "Expensive") {
        const response = await axios.get(`/notices?page=${page}&locationId=${locationId}&byPrice=false`);
        filteredData = response.data;
        return filteredData;
      } else if (radioSearch === "Popular") {
        const response = await axios.get(`/notices?page=${page}&locationId=${locationId}&byPopularity=false`);
        filteredData = response.data;
        return filteredData;
      } else  if (radioSearch === "Unpopular") {
        const response = await axios.get(`/notices?page=${page}&locationId=${locationId}&byPopularity=true`);
        filteredData = response.data;
        return filteredData;
      }
    } else if (!keyword && !category && !species && !locationId && radioSearch && sex) {
      let response;
      if(radioSearch === "Cheap") {
        response = await axios.get(`/notices?&limit=2000&byPrice=true`);
      } else if (radioSearch === "Expensive") {
        response = await axios.get(`/notices?&limit=2000&byPrice=false`);
      } else if (radioSearch === "Popular") {
        response = await axios.get(`/notices?&limit=2000&byPopularity=false`);
      } else  if (radioSearch === "Unpopular") {
        response = await axios.get(`/notices?&limit=2000&byPopularity=true`);
      }
      let filteredResults = response.data.results.filter(item => item.sex === sex);
      const totalPages = Math.ceil(filteredResults?.length / 6);
      const displayedObjects = filteredResults.slice(startIndex, endIndex);
      const sendData = {results: displayedObjects, totalPages: totalPages};
      return filteredData = sendData;
    }
        // ========================================================================================================================================
    // ====================  IF ONLY 3 (THREE) PARAMETERS ======================================================================================

    else if (keyword && category && species && !locationId && !radioSearch && !sex) {
      const response = await axios.get(`/notices?page=${page}&keyword=${keyword}&category=${category}&species=${species}`);
      filteredData = response.data;
    } else if (keyword && category && !species && locationId && !radioSearch && !sex) {
      const response = await axios.get(`/notices?page=${page}&keyword=${keyword}&category=${category}&locationId=${locationId}`);
      filteredData = response.data;
    } else if (keyword && category && !species && !locationId && !radioSearch && sex) {
      const response = await axios.get(`/notices?&limit=2000&keyword=${keyword}&category=${category}`);
      let filteredResults = response.data.results.filter(item => item.sex === sex);
      const totalPages = Math.ceil(filteredResults?.length / 6);
      const displayedObjects = filteredResults.slice(startIndex, endIndex);
      const sendData = {results: displayedObjects, totalPages: totalPages};
      return filteredData = sendData;
    } else if (keyword && category && !species && !locationId && radioSearch && !sex) {
      if(radioSearch === "Cheap") {
        const response = await axios.get(`/notices?page=${page}&keyword=${keyword}&category=${category}&byPrice=true`);
        filteredData = response.data;
        return filteredData;
      } else if (radioSearch === "Expensive") {
        const response = await axios.get(`/notices?page=${page}&keyword=${keyword}&category=${category}&byPrice=false`);
        filteredData = response.data;
        return filteredData;
      } else if (radioSearch === "Popular") {
        const response = await axios.get(`/notices?page=${page}&keyword=${keyword}&category=${category}&byPopularity=false`);
        filteredData = response.data;
        return filteredData;
      } else  if (radioSearch === "Unpopular") {
        const response = await axios.get(`/notices?page=${page}&keyword=${keyword}&category=${category}&byPopularity=true`);
        filteredData = response.data;
        return filteredData;
    }
  } else if (!keyword && category && species && locationId && !radioSearch && !sex) {
    const response = await axios.get(`/notices?page=${page}&category=${category}&species=${species}&locationId=${locationId}`);
    filteredData = response.data;
  } else if (!keyword && category && species && !locationId && !radioSearch && sex) {
    const response = await axios.get(`/notices?&limit=2000&category=${category}&species=${species}`);
    let filteredResults = response.data.results.filter(item => item.sex === sex);
    const totalPages = Math.ceil(filteredResults?.length / 6);
    const displayedObjects = filteredResults.slice(startIndex, endIndex);
    const sendData = {results: displayedObjects, totalPages: totalPages};
    return filteredData = sendData;
  } else if (!keyword && category && species && !locationId && radioSearch && !sex) {
    if(radioSearch === "Cheap") {
      const response = await axios.get(`/notices?page=${page}&category=${category}&species=${species}&byPrice=true`);
      filteredData = response.data;
      return filteredData;
    } else if (radioSearch === "Expensive") {
      const response = await axios.get(`/notices?page=${page}&category=${category}&species=${species}&byPrice=false`);
      filteredData = response.data;
      return filteredData;
    } else if (radioSearch === "Popular") {
      const response = await axios.get(`/notices?page=${page}&category=${category}&species=${species}&byPopularity=false`);
      filteredData = response.data;
      return filteredData;
    } else  if (radioSearch === "Unpopular") {
      const response = await axios.get(`/notices?page=${page}&category=${category}&species=${species}&byPopularity=true`);
      filteredData = response.data;
      return filteredData;
  }
  } else if (!keyword && !category && species && locationId && !radioSearch && sex) {
    const response = await axios.get(`/notices?&limit=2000&species=${species}&locationId=${locationId}`);
    let filteredResults = response.data.results.filter(item => item.sex === sex);
    const totalPages = Math.ceil(filteredResults?.length / 6);
    const displayedObjects = filteredResults.slice(startIndex, endIndex);
    const sendData = {results: displayedObjects, totalPages: totalPages};
    return filteredData = sendData;
  } else if (!keyword && !category && species && locationId && radioSearch && !sex) {
    if(radioSearch === "Cheap") {
      const response = await axios.get(`/notices?page=${page}&species=${species}&locationId=${locationId}&byPrice=true`);
      filteredData = response.data;
      return filteredData;
    } else if (radioSearch === "Expensive") {
      const response = await axios.get(`/notices?page=${page}&species=${species}&locationId=${locationId}&byPrice=false`);
      filteredData = response.data;
      return filteredData;
    } else if (radioSearch === "Popular") {
      const response = await axios.get(`/notices?page=${page}&species=${species}&locationId=${locationId}&byPopularity=false`);
      filteredData = response.data;
      return filteredData;
    } else  if (radioSearch === "Unpopular") {
      const response = await axios.get(`/notices?page=${page}&species=${species}&locationId=${locationId}&byPopularity=true`);
      filteredData = response.data;
      return filteredData;
  }
  } else if (!keyword && !category && !species && locationId && radioSearch && sex) {
    let response;
    if(radioSearch === "Cheap") {
      response = await axios.get(`/notices?&limit=2000&locationId=${locationId}&byPrice=true`);
    } else if (radioSearch === "Expensive") {
      response = await axios.get(`/notices?&limit=2000&locationId=${locationId}&byPrice=false`);
    } else if (radioSearch === "Popular") {
      response = await axios.get(`/notices?&limit=2000&locationId=${locationId}&byPopularity=false`);
    } else  if (radioSearch === "Unpopular") {
      response = await axios.get(`/notices?&limit=2000&locationId=${locationId}&byPopularity=true`);
    }
    let filteredResults = response?.data?.results?.filter(item => item?.sex === sex);
    const totalPages = Math.ceil(filteredResults?.length / 6);
    const displayedObjects = filteredResults.slice(startIndex, endIndex);
    const sendData = {results: displayedObjects, totalPages: totalPages};
    return filteredData = sendData;
  } else if (keyword && !category && !species && !locationId && radioSearch && sex) {
    let response;
    if(radioSearch === "Cheap") {
      response = await axios.get(`/notices?&limit=2000&keyword=${keyword}&byPrice=true`);
    } else if (radioSearch === "Expensive") {
      response = await axios.get(`/notices?&limit=2000&keyword=${keyword}&byPrice=false`);
    } else if (radioSearch === "Popular") {
      response = await axios.get(`/notices?&limit=2000&keyword=${keyword}&byPopularity=false`);
    } else  if (radioSearch === "Unpopular") {
      response = await axios.get(`/notices?&limit=2000&keyword=${keyword}&byPopularity=true`);
    }
    let filteredResults = response?.data?.results?.filter(item => item?.sex === sex);
    const totalPages = Math.ceil(filteredResults?.length / 6);
    const displayedObjects = filteredResults.slice(startIndex, endIndex);
    const sendData = {results: displayedObjects, totalPages: totalPages};
    return filteredData = sendData;
  } else if (keyword && !category && species && !locationId && radioSearch && !sex) {
    if(radioSearch === "Cheap") {
      const response = await axios.get(`/notices?page=${page}&keyword=${keyword}&species=${species}&byPrice=true`);
      filteredData = response.data;
      return filteredData;
    } else if (radioSearch === "Expensive") {
      const response = await axios.get(`/notices?page=${page}&keyword=${keyword}&species=${species}&byPrice=false`);
      filteredData = response.data;
      return filteredData;
    } else if (radioSearch === "Popular") {
      const response = await axios.get(`/notices?page=${page}&keyword=${keyword}&species=${species}&byPopularity=false`);
      filteredData = response.data;
      return filteredData;
    } else  if (radioSearch === "Unpopular") {
      const response = await axios.get(`/notices?page=${page}&keyword=${keyword}&species=${species}&byPopularity=true`);
      filteredData = response.data;
      return filteredData;
  }
  } else if (keyword && !category && !species && locationId && radioSearch && !sex) {
    if(radioSearch === "Cheap") {
      const response = await axios.get(`/notices?page=${page}&keyword=${keyword}&locationId=${locationId}&byPrice=true`);
      filteredData = response.data;
      return filteredData;
    } else if (radioSearch === "Expensive") {
      const response = await axios.get(`/notices?page=${page}&keyword=${keyword}&locationId=${locationId}&byPrice=false`);
      filteredData = response.data;
      return filteredData;
    } else if (radioSearch === "Popular") {
      const response = await axios.get(`/notices?page=${page}&keyword=${keyword}&locationId=${locationId}&byPopularity=false`);
      filteredData = response.data;
      return filteredData;
    } else  if (radioSearch === "Unpopular") {
      const response = await axios.get(`/notices?page=${page}&keyword=${keyword}&locationId=${locationId}&byPopularity=true`);
      filteredData = response.data;
      return filteredData;
  }
  } else if (keyword && !category && species && !locationId && !radioSearch && sex) {
    const response = await axios.get(`/notices?&limit=2000&keyword=${keyword}&species=${species}`);
    let filteredResults = response.data.results.filter(item => item.sex === sex);
    const totalPages = Math.ceil(filteredResults?.length / 6);
    const displayedObjects = filteredResults.slice(startIndex, endIndex);
    const sendData = {results: displayedObjects, totalPages: totalPages};
    return filteredData = sendData;
  } else if (keyword && !category && !species && locationId && !radioSearch && sex) {
    const response = await axios.get(`/notices?&limit=2000&keyword=${keyword}&locationId=${locationId}`);
    let filteredResults = response.data.results.filter(item => item.sex === sex);
    const totalPages = Math.ceil(filteredResults?.length / 6);
    const displayedObjects = filteredResults.slice(startIndex, endIndex);
    const sendData = {results: displayedObjects, totalPages: totalPages};
    return filteredData = sendData;
  } else if (keyword && !category && species && locationId && !radioSearch && !sex) {
    const response = await axios.get(`/notices?page=${page}&keyword=${keyword}&species=${species}&locationId=${locationId}`);
    filteredData = response.data;
  } else if(!keyword && category && !species && !locationId && radioSearch && sex) {
    let response;
    if(radioSearch === "Cheap") {
      response = await axios.get(`/notices?&limit=2000&category=${category}&byPrice=true`);
    } else if (radioSearch === "Expensive") {
      response = await axios.get(`/notices?&limit=2000&category=${category}&byPrice=false`);
    } else if (radioSearch === "Popular") {
      response = await axios.get(`/notices?&limit=2000&category=${category}&byPopularity=false`);
    } else  if (radioSearch === "Unpopular") {
      response = await axios.get(`/notices?&limit=2000&category=${category}&byPopularity=true`);
    }
    let filteredResults = response?.data?.results?.filter(item => item?.sex === sex);
    const totalPages = Math.ceil(filteredResults?.length / 6);
    const displayedObjects = filteredResults.slice(startIndex, endIndex);
    const sendData = {results: displayedObjects, totalPages: totalPages};
    return filteredData = sendData;
  } else if (!keyword && !category && species && !locationId && radioSearch && sex) {
    let response;
    if(radioSearch === "Cheap") {
      response = await axios.get(`/notices?&limit=2000&species=${species}&byPrice=true`);
    } else if (radioSearch === "Expensive") {
      response = await axios.get(`/notices?&limit=2000&species=${species}&byPrice=false`);
    } else if (radioSearch === "Popular") {
      response = await axios.get(`/notices?&limit=2000&species=${species}&byPopularity=false`);
    } else  if (radioSearch === "Unpopular") {
      response = await axios.get(`/notices?&limit=2000&species=${species}&byPopularity=true`);
    }
    let filteredResults = response?.data?.results?.filter(item => item?.sex === sex);
    const totalPages = Math.ceil(filteredResults?.length / 6);
    const displayedObjects = filteredResults.slice(startIndex, endIndex);
    const sendData = {results: displayedObjects, totalPages: totalPages};
    return filteredData = sendData;
  } else if (!keyword && category && !species && locationId && radioSearch && !sex) {
    if(radioSearch === "Cheap") {
      const response = await axios.get(`/notices?page=${page}&category=${category}&locationId=${locationId}&byPrice=true`);
      filteredData = response.data;
      return filteredData;
    } else if (radioSearch === "Expensive") {
      const response = await axios.get(`/notices?page=${page}&category=${category}&locationId=${locationId}&byPrice=false`);
      filteredData = response.data;
      return filteredData;
    } else if (radioSearch === "Popular") {
      const response = await axios.get(`/notices?page=${page}&category=${category}&locationId=${locationId}&byPopularity=false`);
      filteredData = response.data;
      return filteredData;
    } else  if (radioSearch === "Unpopular") {
      const response = await axios.get(`/notices?page=${page}&category=${category}&locationId=${locationId}&byPopularity=true`);
      filteredData = response.data;
      return filteredData;
  }
  } else if (!keyword && category && !species && locationId && !radioSearch && sex) {
    const response = await axios.get(`/notices?&limit=2000&category=${category}&locationId=${locationId}`);
    let filteredResults = response.data.results.filter(item => item.sex === sex);
    const totalPages = Math.ceil(filteredResults?.length / 6);
    const displayedObjects = filteredResults.slice(startIndex, endIndex);
    const sendData = {results: displayedObjects, totalPages: totalPages};
    return filteredData = sendData;
  }
  // ========================================================================================================================================================
  // ======================== WHEN CHOOSEN ANY 4 (FOUR) PARAMETERS ========================================================================
  else if (keyword && category && !species && !locationId && radioSearch && sex) {
    let response;
    if(radioSearch === "Cheap") {
      response = await axios.get(`/notices?&limit=2000&keyword=${keyword}&category=${category}&byPrice=true`);
    } else if (radioSearch === "Expensive") {
      response = await axios.get(`/notices?&limit=2000&keyword=${keyword}&category=${category}&byPrice=false`);
    } else if (radioSearch === "Popular") {
      response = await axios.get(`/notices?&limit=2000&keyword=${keyword}&category=${category}&byPopularity=false`);
    } else  if (radioSearch === "Unpopular") {
      response = await axios.get(`/notices?&limit=2000&keyword=${keyword}&category=${category}&byPopularity=true`);
    }
    let filteredResults = response?.data?.results?.filter(item => item?.sex === sex);
    const totalPages = Math.ceil(filteredResults?.length / 6);
    const displayedObjects = filteredResults.slice(startIndex, endIndex);
    const sendData = {results: displayedObjects, totalPages: totalPages};
    return filteredData = sendData;
  } else if (keyword && !category && species && !locationId && radioSearch && sex) {
    let response;
    if(radioSearch === "Cheap") {
      response = await axios.get(`/notices?&limit=2000&keyword=${keyword}&species=${species}&byPrice=true`);
    } else if (radioSearch === "Expensive") {
      response = await axios.get(`/notices?&limit=2000&keyword=${keyword}&species=${species}&byPrice=false`);
    } else if (radioSearch === "Popular") {
      response = await axios.get(`/notices?&limit=2000&keyword=${keyword}&species=${species}&byPopularity=false`);
    } else  if (radioSearch === "Unpopular") {
      response = await axios.get(`/notices?&limit=2000&keyword=${keyword}&species=${species}&byPopularity=true`);
    }
    let filteredResults = response?.data?.results?.filter(item => item?.sex === sex);
    const totalPages = Math.ceil(filteredResults?.length / 6);
    const displayedObjects = filteredResults.slice(startIndex, endIndex);
    const sendData = {results: displayedObjects, totalPages: totalPages};
    return filteredData = sendData;
  } else if (keyword && !category && !species && locationId && radioSearch && sex) {
    let response;
    if(radioSearch === "Cheap") {
      response = await axios.get(`/notices?&limit=2000&keyword=${keyword}&locationId=${locationId}&byPrice=true`);
    } else if (radioSearch === "Expensive") {
      response = await axios.get(`/notices?&limit=2000&keyword=${keyword}&locationId=${locationId}&byPrice=false`);
    } else if (radioSearch === "Popular") {
      response = await axios.get(`/notices?&limit=2000&keyword=${keyword}&locationId=${locationId}&byPopularity=false`);
    } else  if (radioSearch === "Unpopular") {
      response = await axios.get(`/notices?&limit=2000&keyword=${keyword}&locationId=${locationId}&byPopularity=true`);
    }
    let filteredResults = response?.data?.results?.filter(item => item?.sex === sex);
    const totalPages = Math.ceil(filteredResults?.length / 6);
    const displayedObjects = filteredResults.slice(startIndex, endIndex);
    const sendData = {results: displayedObjects, totalPages: totalPages};
    return filteredData = sendData;
  } else if (keyword && category && species && !locationId && radioSearch && !sex) {
    if(radioSearch === "Cheap") {
      const response = await axios.get(`/notices?page=${page}&keyword=${keyword}&category=${category}&species=${species}&byPrice=true`);
      filteredData = response.data;
      return filteredData;
    } else if (radioSearch === "Expensive") {
      const response = await axios.get(`/notices?page=${page}&keyword=${keyword}&category=${category}&species=${species}&byPrice=false`);
      filteredData = response.data;
      return filteredData;
    } else if (radioSearch === "Popular") {
      const response = await axios.get(`/notices?page=${page}&keyword=${keyword}&category=${category}&species=${species}&byPopularity=false`);
      filteredData = response.data;
      return filteredData;
    } else  if (radioSearch === "Unpopular") {
      const response = await axios.get(`/notices?page=${page}&keyword=${keyword}&category=${category}&species=${species}&byPopularity=true`);
      filteredData = response.data;
      return filteredData;
  }
  } else if (keyword && category && !species && locationId && radioSearch && !sex) {
    if(radioSearch === "Cheap") {
      const response = await axios.get(`/notices?page=${page}&keyword=${keyword}&category=${category}&locationId=${locationId}&byPrice=true`);
      filteredData = response.data;
      return filteredData;
    } else if (radioSearch === "Expensive") {
      const response = await axios.get(`/notices?page=${page}&keyword=${keyword}&category=${category}&locationId=${locationId}&byPrice=false`);
      filteredData = response.data;
      return filteredData;
    } else if (radioSearch === "Popular") {
      const response = await axios.get(`/notices?page=${page}&keyword=${keyword}&category=${category}&locationId=${locationId}&byPopularity=false`);
      filteredData = response.data;
      return filteredData;
    } else  if (radioSearch === "Unpopular") {
      const response = await axios.get(`/notices?page=${page}&keyword=${keyword}&category=${category}&locationId=${locationId}&byPopularity=true`);
      filteredData = response.data;
      return filteredData;
  }
  } else if (keyword && !category && species && locationId && radioSearch && !sex) {
    if(radioSearch === "Cheap") {
      const response = await axios.get(`/notices?page=${page}&keyword=${keyword}&species=${species}&locationId=${locationId}&byPrice=true`);
      filteredData = response.data;
      return filteredData;
    } else if (radioSearch === "Expensive") {
      const response = await axios.get(`/notices?page=${page}&keyword=${keyword}&species=${species}&locationId=${locationId}&byPrice=false`);
      filteredData = response.data;
      return filteredData;
    } else if (radioSearch === "Popular") {
      const response = await axios.get(`/notices?page=${page}&keyword=${keyword}&species=${species}&locationId=${locationId}&byPopularity=false`);
      filteredData = response.data;
      return filteredData;
    } else  if (radioSearch === "Unpopular") {
      const response = await axios.get(`/notices?page=${page}&keyword=${keyword}&species=${species}&locationId=${locationId}&byPopularity=true`);
      filteredData = response.data;
      return filteredData;
  }
  } else if (keyword && category && species && !locationId && !radioSearch && sex) {
    const response = await axios.get(`/notices?&limit=2000&keyword=${keyword}&category=${category}&species=${species}`);
    let filteredResults = response.data.results.filter(item => item.sex === sex);
    const totalPages = Math.ceil(filteredResults?.length / 6);
    const displayedObjects = filteredResults.slice(startIndex, endIndex);
    const sendData = {results: displayedObjects, totalPages: totalPages};
    return filteredData = sendData;
  } else if (keyword && category && !species && locationId && !radioSearch && sex) {
    const response = await axios.get(`/notices?&limit=2000&keyword=${keyword}&category=${category}&locationId=${locationId}`);
    let filteredResults = response.data.results.filter(item => item.sex === sex);
    const totalPages = Math.ceil(filteredResults?.length / 6);
    const displayedObjects = filteredResults.slice(startIndex, endIndex);
    const sendData = {results: displayedObjects, totalPages: totalPages};
    return filteredData = sendData;
  } else if (keyword && !category && species && locationId && !radioSearch && sex) {
    const response = await axios.get(`/notices?&limit=2000&keyword=${keyword}&species=${species}&locationId=${locationId}`);
    let filteredResults = response.data.results.filter(item => item.sex === sex);
    const totalPages = Math.ceil(filteredResults?.length / 6);
    const displayedObjects = filteredResults.slice(startIndex, endIndex);
    const sendData = {results: displayedObjects, totalPages: totalPages};
    return filteredData = sendData;
  } else if (keyword && category && species && locationId && !radioSearch && !sex) {
    const response = await axios.get(`/notices?page=${page}&keyword=${keyword}&category=${category}&species=${species}&locationId=${locationId}`);
    filteredData = response.data;
  } else if (!keyword && category && species && !locationId && radioSearch && sex) {
    let response;
    if(radioSearch === "Cheap") {
      response = await axios.get(`/notices?&limit=2000&category=${category}&species=${species}&byPrice=true`);
    } else if (radioSearch === "Expensive") {
      response = await axios.get(`/notices?&limit=2000&category=${category}&species=${species}&byPrice=false`);
    } else if (radioSearch === "Popular") {
      response = await axios.get(`/notices?&limit=2000&category=${category}&species=${species}&byPopularity=false`);
    } else  if (radioSearch === "Unpopular") {
      response = await axios.get(`/notices?&limit=2000&category=${category}&species=${species}&byPopularity=true`);
    }
    let filteredResults = response?.data?.results?.filter(item => item?.sex === sex);
    const totalPages = Math.ceil(filteredResults?.length / 6);
    const displayedObjects = filteredResults.slice(startIndex, endIndex);
    const sendData = {results: displayedObjects, totalPages: totalPages};
    return filteredData = sendData;
  } else if (!keyword && category && !species && locationId && radioSearch && sex) {
    let response;
    if(radioSearch === "Cheap") {
      response = await axios.get(`/notices?&limit=2000&category=${category}&locationId=${locationId}&byPrice=true`);
    } else if (radioSearch === "Expensive") {
      response = await axios.get(`/notices?&limit=2000&category=${category}&locationId=${locationId}&byPrice=false`);
    } else if (radioSearch === "Popular") {
      response = await axios.get(`/notices?&limit=2000&category=${category}&locationId=${locationId}&byPopularity=false`);
    } else  if (radioSearch === "Unpopular") {
      response = await axios.get(`/notices?&limit=2000&category=${category}&locationId=${locationId}&byPopularity=true`);
    }
    let filteredResults = response?.data?.results?.filter(item => item?.sex === sex);
    const totalPages = Math.ceil(filteredResults?.length / 6);
    const displayedObjects = filteredResults.slice(startIndex, endIndex);
    const sendData = {results: displayedObjects, totalPages: totalPages};
    return filteredData = sendData;
  } else if (!keyword && !category && species && locationId && radioSearch && sex) {
        let response;
    if(radioSearch === "Cheap") {
      response = await axios.get(`/notices?&limit=2000&species=${species}&locationId=${locationId}&byPrice=true`);
    } else if (radioSearch === "Expensive") {
      response = await axios.get(`/notices?&limit=2000&species=${species}&locationId=${locationId}&byPrice=false`);
    } else if (radioSearch === "Popular") {
      response = await axios.get(`/notices?&limit=2000&species=${species}&locationId=${locationId}&byPopularity=false`);
    } else  if (radioSearch === "Unpopular") {
      response = await axios.get(`/notices?&limit=2000&species=${species}&locationId=${locationId}&byPopularity=true`);
    }
    let filteredResults = response?.data?.results?.filter(item => item?.sex === sex);
    const totalPages = Math.ceil(filteredResults?.length / 6);
    const displayedObjects = filteredResults.slice(startIndex, endIndex);
    const sendData = {results: displayedObjects, totalPages: totalPages};
    return filteredData = sendData;
  } else if (!keyword && category && species && locationId && radioSearch && !sex) {
     if(radioSearch === "Cheap") {
      const response = await axios.get(`/notices?page=${page}&category=${category}&species=${species}&locationId=${locationId}&byPrice=true`);
      filteredData = response.data;
      return filteredData;
    } else if (radioSearch === "Expensive") {
      const response = await axios.get(`/notices?page=${page}&category=${category}&species=${species}&locationId=${locationId}&byPrice=false`);
      filteredData = response.data;
      return filteredData;
    } else if (radioSearch === "Popular") {
      const response = await axios.get(`/notices?page=${page}&category=${category}&species=${species}&locationId=${locationId}&byPopularity=false`);
      filteredData = response.data;
      return filteredData;
    } else  if (radioSearch === "Unpopular") {
      const response = await axios.get(`/notices?page=${page}&category=${category}&species=${species}&locationId=${locationId}&byPopularity=true`);
      filteredData = response.data;
      return filteredData;
  }
  } else if (!keyword && category && species && locationId && !radioSearch && sex) {
    const response = await axios.get(`/notices?&limit=2000&category=${category}&species=${species}&locationId=${locationId}`);
    let filteredResults = response.data.results.filter(item => item.sex === sex);
    const totalPages = Math.ceil(filteredResults?.length / 6);
    const displayedObjects = filteredResults.slice(startIndex, endIndex);
    const sendData = {results: displayedObjects, totalPages: totalPages};
    return filteredData = sendData;
  }
    return filteredData;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
 }
)