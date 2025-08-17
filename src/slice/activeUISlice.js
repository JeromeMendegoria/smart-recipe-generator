import { createSlice } from "@reduxjs/toolkit";

const activeUISlice = createSlice({
    name: "activeUI",
    initialState: "active-dishes",
    reducers: {
        setActiveUI: (state, action) => action.payload 
    }
})

export const { setActiveUI } = activeUISlice.actions
export default activeUISlice.reducer