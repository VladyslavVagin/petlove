// @ts-nocheck
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from "react-toastify";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
  };

  export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
      try {
        const res = await axios.post('/users/signup', credentials);
        setAuthHeader(res.data.token);
        toast.success(`Welcome ${res?.data?.name}`);
        return res.data;
      } catch (error) {
        toast.error('ERROR, Invalid data');
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
      try {
        const res = await axios.post('/users/signin', credentials);
        setAuthHeader(res.data.token);
        toast.success(`Welcome ${res.data.name}`);
        return res.data;
      } catch (error) {
        toast.error('ERROR, Invalid data');
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
      await axios.post('/users/signout');
      clearAuthHeader();
    } catch (error) {
      toast.error('Error, server not answer');
      return thunkAPI.rejectWithValue(error.message);
    }
  });

  export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
  
      if (persistedToken === null) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
      }
  
      try {
        setAuthHeader(persistedToken);
        const res = await axios.get('/users/current/full');
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const editUser = createAsyncThunk(
    'auth/edit',
    async (credentials, thunkAPI) => {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
  
      if (persistedToken === null) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
      }
  
      try {
        setAuthHeader(persistedToken);
        const res = await axios.patch('/users/current/edit', credentials);
        return res.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const addPet = createAsyncThunk("auth/addPet", 
   async (petData, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.post('/users/current/pets/add', petData);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
   }
  )

  export const removePet = createAsyncThunk("auth/removePet", 
  async (id, thunkAPI) => {
   const state = thunkAPI.getState();
   const persistedToken = state.auth.token;

   if (persistedToken === null) {
     return thunkAPI.rejectWithValue('Unable to fetch user');
   }

   try {
     setAuthHeader(persistedToken);
     const res = await axios.delete(`/users/current/pets/remove/${id}`);
     return res.data;
   } catch (error) {
     return thunkAPI.rejectWithValue(error.message);
   }
  }
 )

 export const viewedPet = createAsyncThunk("auth/viewedPet", 
 async (id, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (persistedToken === null) {
    return thunkAPI.rejectWithValue('Unable to fetch user');
  }

  try {
    setAuthHeader(persistedToken);
    const res = await axios.get(`/notices/${id}`);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
 }
)