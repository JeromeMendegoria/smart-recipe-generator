import { createSlice } from "@reduxjs/toolkit";

const querySlice = createSlice({
    name: "query",
    initialState: {
        queryResult: [],
        loading: false
    },
    reducers: {
        setQueryResult: (state, action) => { 
            state.queryResult = action.payload
            state.loading = false
        },
        removeQueryResultt: (state, action) => { 
            state.queryResult = [] 
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        }
    }
})

export const { setQueryResult, removeQueryResult, setLoading } = querySlice.actions;
export default querySlice.reducer;