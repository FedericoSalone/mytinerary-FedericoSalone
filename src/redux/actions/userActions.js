import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";

import LS from "../../utils/LS";
import { toast } from "react-toastify";

export const userSignUp = createAsyncThunk("userSignUp", async (userData) => {
    try {
        const res = await axios.post("http://localhost:3000/api/signup", {
            ...userData,
        });
        return res.data;
    } catch (error) {
        console.log(error);
        toast.error(error.response.data.error);
        throw new Error(error);
    }
});

export const userSignIn = createAsyncThunk("userSignIn", async (userData) => {
    try {
        const res = await axios.post("http://localhost:3000/api/signin", {
            ...userData,
        });
        return res.data;
    } catch (error) {
        toast.error(error.response.data.error);
        console.log(error);
        throw new Error(error);
    }
});

export const logInWithToken = createAsyncThunk("logInWithToken", async () => {
    const token = LS.getText("token");
    try {
        const res = await axios.get("http://localhost:3000/api/signin/token", {
            headers: {
                Authorization: "Bearer " + token,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
});

export const userLogOut = createAction("userLogOut", () => {
    return {
        payload: "",
    };
});

