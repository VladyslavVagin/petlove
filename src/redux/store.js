import { configureStore } from '@reduxjs/toolkit';
import { NewsReducer } from './news/newsSlice';
import { FriendsReducer } from './friends/friendsSlice';
import { NoticesReducer } from './notices/noticesSlice';

const store = configureStore({
    reducer: {
        news: NewsReducer,
        friends: FriendsReducer,
        notices: NoticesReducer,
    }
})

export default store