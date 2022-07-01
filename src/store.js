import { configureStore } from "@reduxjs/toolkit"
import counterReducer from './counterSlice'

export default configureStore({
    reducer : counterReducer // add reducers here 
})