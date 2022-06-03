import { configureStore } from '@reduxjs/toolkit'
import tasksSlice from './tasksSlice'

const store = configureStore({
  reducer: tasksSlice,
  devTools:true,
})

export default store