// import { configureStore } from "@reduxjs/toolkit";
// import { mainReducer } from "./mainSlice";

// export const store = configureStore({
//   reducer: {
//     main:mainReducer
//   },
// });
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { mainReducer } from './main/mainSlice';
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
// import {contactsReducer} from './contacts/contactsSlice';
// import { filterReducer } from './contacts/filterSlice';
import { authReducer } from './auth/authSlice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    main:mainReducer
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);