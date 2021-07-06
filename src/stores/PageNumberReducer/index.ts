import { createSlice } from "@reduxjs/toolkit";

const initialState = 1;

const pageNumberSlice = createSlice({
  name: "pagenumber",
  initialState,
  reducers: {
    changePageNumber: (state, { payload }) => payload,
  },
});

export const { changePageNumber } = pageNumberSlice.actions;
export default pageNumberSlice.reducer;
