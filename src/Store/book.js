import { createSlice } from "@reduxjs/toolkit";

const initialBookingStatus = {BookStatus:[], status:'pending..'}

const BookStatusSlice = createSlice({
    name:'Bookstatus',
    initialState:initialBookingStatus,
    reducers:{
        setBookstatus(state,action){
            state.BookStatus = action.payload
            state.status = 'Confirmed'
        }
    }
})
export const BookActions = BookStatusSlice.actions
export default BookStatusSlice
