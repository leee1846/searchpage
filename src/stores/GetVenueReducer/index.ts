import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import data from "../../venueSample.json";

const venueList = data.venueList;

export const venueState: typeof venueList | [] = [];

const venueSlice = createSlice({
  name: "venue-list",
  initialState: venueState,
  reducers: {
    searchVenueList: (
      state,
      { payload }: PayloadAction<{ inputValue: string }>
    ) => {
      const inputValue = payload.inputValue.replace(/\s/gi, "");

      return venueList.filter((list) => {
        const contentsToCompare = (
          list.hostName +
          list.venueName +
          list.address
        ).replace(/\s/gi, "");
        return contentsToCompare.includes(inputValue);
      });
    },
  },
});

export const { searchVenueList } = venueSlice.actions;
export default venueSlice.reducer;
