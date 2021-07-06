import { createSlice } from "@reduxjs/toolkit";
import * as data from "../../venueSample.json";

export const venueState = data.venueList;

const venueSlice = createSlice({
  name: "venue",
  initialState: venueState,
  reducers: {
    getVenueList: () => {},
  },
});

export const { getVenueList } = venueSlice.actions;
export default venueSlice.reducer;
