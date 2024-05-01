// @ts-nocheck
import { configureStore } from '@reduxjs/toolkit';
import { NewsReducer } from './news/newsSlice';
import { FriendsReducer } from './friends/friendsSlice';
import { NoticesReducer } from './notices/noticesSlice';
import { authReducer } from './auth/authSlice';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
  import storage from 'redux-persist/lib/storage';

  const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
  };

const store = configureStore({
    reducer: {
        news: NewsReducer,
        friends: FriendsReducer,
        notices: NoticesReducer,
        auth: persistReducer(authPersistConfig, authReducer),
    },
    middleware: getDefaultMiddleware => 
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
})

export default store
export const persistor = persistStore(store);