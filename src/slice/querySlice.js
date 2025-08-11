import { createSlice } from "@reduxjs/toolkit";

const querySlice = createSlice({
    name: "queryResult",
    initialState: [],
    reducers: {
        setQueryResult: (state, action) => { return action.payload },
        removeQueryResultt: (state, action) => { return [] } ,
    }
})

export const { setQueryResult, removeQueryResult } = querySlice.actions;
export default querySlice.reducer;