import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchReducer from "./searchSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchReducer,
    chat:chatSlice
  },
});

export default store;
