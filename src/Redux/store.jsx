import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Redux/features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})