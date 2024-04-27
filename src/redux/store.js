import { configureStore } from '@reduxjs/toolkit';
import { NewsReducer } from './news/newsSlice';
import { FriendsReducer } from './friends/friendsSlice';

const store = configureStore({
    reducer: {
        news: NewsReducer,
        friends: FriendsReducer,
    }
})

export default store