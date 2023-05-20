import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { formSlice } from "./formSlice";
import { userSlice } from "./userSlice";

export const store = configureStore({
    reducer: {
        form: formSlice.reducer,
        user: userSlice.reducer
    },
})