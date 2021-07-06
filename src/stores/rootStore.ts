import { combineReducers, configureStore } from "@reduxjs/toolkit";
import venueSlice from "./GetVenueReducer/index";
import logger from "redux-logger";
import pageNumberSlice from "./PageNumberReducer/index";

const reducer = combineReducers({
  venueSlice,
  pageNumberSlice,
});

const store = configureStore({
  reducer,
  middleware: [logger],
});

export default store;

export type ReducerType = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;
