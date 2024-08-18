import { createSlice } from "@reduxjs/toolkit";

const initialExploreState = { Explore: [],Place:[],Book:[]};

const ExploreSlice = createSlice({
    name: 'Explore',
    initialState: initialExploreState,
    reducers: {
        AddtoItem(state, action) {
            state.Explore = action.payload.Data;
            state.Place = action.payload.Place
        },
        AddtoBooklist(state,action){
            state.Book = action.payload
        }
    }
});

export const Exploreaction = ExploreSlice.actions;
export default ExploreSlice;
