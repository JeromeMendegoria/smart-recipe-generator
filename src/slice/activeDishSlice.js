import { createSlice } from "@reduxjs/toolkit"

const activeDishSlice = createSlice({
  name: "activeDish",
  initialState: null,
  reducers: {
    setActiveDish: (state, action) => action.payload,
    clearActiveDish: () => null
  }
})

export const { setActiveDish, clearActiveDish } = activeDishSlice.actions
export default activeDishSlice.reducer
