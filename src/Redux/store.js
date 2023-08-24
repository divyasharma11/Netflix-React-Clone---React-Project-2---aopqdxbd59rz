import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './loginSlice'
import movieReducer from './movieApiSlice'
import pageReducer from './pageSlice'
import updateReducer from './updatePasswordSlice'
export const store = configureStore({
  reducer: {
    login:loginReducer,
    movie:movieReducer,
    page:pageReducer,
    updatepassword:updateReducer,
  },
})