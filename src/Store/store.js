import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./auth";
import RecentSlice from "./recent";
import ExploreSlice from "./explore";
import BookStatusSlice from "./book";
import StaySlice from "./Stay";

const Store = configureStore({
    reducer:{
        auth:AuthSlice.reducer,
        history:RecentSlice.reducer,
        admin:ExploreSlice.reducer,
        book:BookStatusSlice.reducer,
        stay:StaySlice.reducer
    }
})
export default Store