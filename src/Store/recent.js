import { createSlice } from "@reduxjs/toolkit";

const initialHistoryState = { history:''};

const recentSlice = createSlice({
    name: 'recent',
    initialState: initialHistoryState,
    reducers: {
        setHistory(state, action) {
            state.history = action.payload;
        }

    }
});

export const Recentaction = recentSlice.actions;
export default recentSlice;
