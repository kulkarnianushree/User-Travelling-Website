import { createSlice } from "@reduxjs/toolkit";

const initialExploreState = {Explore:[]}

const ExploreSlice = createSlice({
    name:'Explore',
    initialState:initialExploreState,
    reducers:{
        AddtoItem(state,action){
            state.Explore=action.payload
        }
    }
})

export const Exploreaction = ExploreSlice.actions
export default ExploreSlice
