import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from "react-toastify";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

// const clearAuthHeader = () => {
//     axios.defaults.headers.common.Authorization = '';
//   };

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
        console.log(res);
        setAuthHeader(res.data.token);
        toast.success(`Welcome ${res.data.name}`);
        return res.data;
      } catch (error) {
        toast.error('ERROR, Invalid data');
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  