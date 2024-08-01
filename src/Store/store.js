import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./auth";
import RecentSlice from "./recent";
import ExploreSlice from "./explore";

const Store = configureStore({
    reducer:{
        auth:AuthSlice.reducer,
        history:RecentSlice.reducer,
        admin:ExploreSlice.reducer
    }
})
export default Store