import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
    subcategories: []
}

export const filterSubcategorySlice = createSlice({
    name: 'filterSubcategoryDoNotChange',
    initialState,
    reducers: {
        setSubcategories: (state, action) => {
            state.subcategories = action.payload
        },
        setCategories: (state, action) => {
            state.categories = action.payload
        }
    }
})

export const { setSubcategories, setCategories } = filterSubcategorySlice.actions
export default filterSubcategorySlice.reducer