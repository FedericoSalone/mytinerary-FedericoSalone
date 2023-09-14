import { createReducer } from "@reduxjs/toolkit";
import { userSignUp, userSignIn, userLogOut ,logInWithToken } from "../actions/userActions";

const initialState = {
    user: {},
    token: "",
};

export const userReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(userSignUp.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        })
        .addCase(userSignIn.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        })
        .addCase(logInWithToken.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        })
        .addCase(userLogOut, (state) => {
            state.user = null;
            state.token = null;
        })
});

export default userReducer;

