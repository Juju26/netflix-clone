import { createSlice } from "@reduxjs/toolkit";

export const userSlice =createSlice({
    name: "user",
    initialState:{
        user: null,
    },

    reducers:{
        // type : "login",
        login: (state, action)=>{
            state.user =action.payload;
        },

        // type: "logout",
        logout: (state) =>{
            state.user=null;
        },

    },
});

export const {login,logout} =userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;