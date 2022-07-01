// Power of Redux Toolkit => 
import { createSlice } from "@reduxjs/toolkit"

export const counterSlice = createSlice({
    name : "counter",
    initialState : {
        value : 0
    },

    reducers : {
        increase : state => {
            state.value += 1
        },
        descrease : state => {
            state.value -= 1
        },
        reset : state => {
            state.value = 0
        }
    }
})

export const { increase, descrease, reset } = counterSlice.actions;

export default counterSlice.reducer