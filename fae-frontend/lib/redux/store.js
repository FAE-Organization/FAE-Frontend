import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { filterSubcategorySlice } from "./filterSubcategorySlice";
import { formSlice } from "./formSlice";
import { loadingSlice } from "./loadingSlice";
import { userSlice } from "./userSlice";

export const store = configureStore({
    reducer: {
        form: formSlice.reducer,
        user: userSlice.reducer,
        filterSubcategoryDoNotChange: filterSubcategorySlice.reducer,
        loading: loadingSlice.reducer
    },
})