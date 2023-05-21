import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    subcategories: []
}

export const filterSubcategorySlice = createSlice({
    name: 'filterSubcategoryDoNotChange',
    initialState,
    reducers: {
        setSubcategories: (state, action) => {
            state.subcategories = action.payload
        }
    }
})

export const { setSubcategories } = filterSubcategorySlice.actions
export default filterSubcategorySlice.reducer