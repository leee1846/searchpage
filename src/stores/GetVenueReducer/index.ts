import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as data from "../../venueSample.json";

const venueList = data.venueList;

export const venueState: typeof venueList | [] = [];

const venueSlice = createSlice({
  name: "venue",
  initialState: venueState,
  reducers: {
    searchList: (state, { payload }: PayloadAction<{ inputValue: string }>) => {
      const inputValue = payload.inputValue.replace(/\s/gi, "");
      const filteredList = venueList.filter((list) => {
        const contentToCompare = (
          list.hostName +
          list.venueName +
          list.address
        ).replace(/\s/gi, "");
        return contentToCompare.includes(inputValue);
      });
      return filteredList;
    },
  },
});

export const { searchList } = venueSlice.actions;
export default venueSlice.reducer;
