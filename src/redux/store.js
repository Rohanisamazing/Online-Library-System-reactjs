// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

const store = configureStore({
  reducer: { reducer }, // The `reducer` should be wrapped as `reducer: reducer`
});

export default store;