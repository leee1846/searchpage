import { combineReducers, configureStore } from "@reduxjs/toolkit";
import venueSlice from "./GetVenueReducer/index";
import logger from "redux-logger";

const reducer = combineReducers({
  venueSlice,
});

const store = configureStore({
  reducer,
  middleware: [logger],
});

export default store;

export type ReducerType = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;
