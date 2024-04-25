import { configureStore } from '@reduxjs/toolkit';
import { NewsReducer } from './news/newsSlice';

const store = configureStore({
    reducer: {
        news: NewsReducer,
    }
})

export default store