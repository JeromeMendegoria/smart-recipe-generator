// activeUI slice
import { createSlice } from "@reduxjs/toolkit";

const activeUISlice = createSlice({
    name: "activeUI",
    initialState: "character",
    reducers: {
        setActiveUI: (state, action) => action.payload 
    }
})

export const { setActiveUI } = activeUISlice.actions
export default activeUISlice.reducer