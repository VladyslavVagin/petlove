import { createSlice } from '@reduxjs/toolkit';
import { register } from './operations';

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
  };

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: builder => {
      builder
        .addCase(register.pending, state => {
          state.isLoading = true;
        })
        .addCase(register.fulfilled, (state, action) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
          state.isLoading = false;
        })
        .addCase(register.rejected, state => {
          state.isLoading = false;
        })
    }
})

export const authReducer = authSlice.reducer;