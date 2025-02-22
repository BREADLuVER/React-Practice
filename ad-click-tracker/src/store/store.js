import { configureStore } from '@reduxjs/toolkit';
import clickReducer from '../features/clickSlice';

export const store = configureStore({
  reducer: {
    clicks: clickReducer
  }
});