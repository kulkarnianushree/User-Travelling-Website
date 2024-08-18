import { createSlice } from "@reduxjs/toolkit";

const initialRecentState = { history:'', City: '' };

const RecentSlice = createSlice({
    name: 'history',
    initialState: initialRecentState,
    reducers: {
        setHistory(state, action) {
            state.history = action.payload.UserData;
            state.City = action.payload.city;
            console.log(state.City)
        }
    }
});

export const Recentaction = RecentSlice.actions;
export default RecentSlice;
