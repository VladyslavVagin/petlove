import { createSlice } from "@reduxjs/toolkit";
import { fetchFriends } from "./operations";

const initialState = {
    friends: [],
    isLoadingFriends: false,
    isErrorFriends: false
}

export const friendsSlice = createSlice({
    name: "friends",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchFriends.fulfilled, (state, {payload}) => {
          state.isLoadingFriends = false;
          state.isErrorFriends = false;
          state.friends = payload;
        }).addCase(fetchFriends.pending, (state) => {
            state.isLoadingFriends = true;
            state.isErrorFriends = false;
        }).addCase(fetchFriends.rejected, (state) => {
            state.isLoadingFriends = false;
            state.isErrorFriends = true;
        })
    }
})

export const FriendsReducer = friendsSlice.reducer;