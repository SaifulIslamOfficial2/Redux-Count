import { configureStore } from "@reduxjs/toolkit";
import countersSlice from "../featurs/countersSlice"

const store = configureStore({
    reducer:{
        counters : countersSlice,
    }
});
export default store;