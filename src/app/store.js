import { configureStore } from "@reduxjs/toolkit";
import countersSlice from "../featurs/countersSlice";
import postSlice from "../featurs/posts/postsSlice"
const store = configureStore({
    reducer:{
        counters : countersSlice,
        posts :  postSlice,
    }
});
export default store;