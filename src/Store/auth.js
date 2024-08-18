import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { token: '', email: '', LoginStatus: false }

const AuthSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        Login(state, action) {
            state.token = action.payload.Token;
            state.email = action.payload.Email;
            state.LoginStatus = true;
            localStorage.setItem('Token', state.token);
            localStorage.setItem('Email', state.email);
        },
        Logout(state,action){
            state.token = '';
            state.email = ''
            state.LoginStatus = false;
            localStorage.removeItem('Token')
            localStorage.removeItem('Email')
        }
    }
})

export const Authaction = AuthSlice.actions;
export default AuthSlice;
