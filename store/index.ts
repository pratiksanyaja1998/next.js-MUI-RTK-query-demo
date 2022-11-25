import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./reducer";
import logger from "redux-logger"
import { persistReducer, persistStore  } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { userSlice } from "./userSlice";
import { setupListeners } from '@reduxjs/toolkit/query'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['auth'],
}

const rootReducer = combineReducers({
  auth : authReducer,
  [userSlice.reducerPath]: userSlice.reducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(userSlice.middleware, logger)
})

export const persistor = persistStore(store)

setupListeners(store.dispatch)