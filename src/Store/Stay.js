import { createSlice } from "@reduxjs/toolkit";

const initialStayState = {Stay:[]}

const StaySlice = createSlice({
    name:'Stay',
    initialState:initialStayState,
    reducers:{
        SetStay(state,action){
            state.Stay=action.payload
        }
    }
})
export const Stayaction = StaySlice.actions
export default StaySlice