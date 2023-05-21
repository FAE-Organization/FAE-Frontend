import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category: '',
    subcategories: [],
    game: '',
    location: '',
    siteType: [],
    salary: {
        currency: 'usd',
        compensationType: 'hourly',
        min: -1,
        max: -1
    },
    experience: [],
}

export const formSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        updateCategory: (state, action) => {
            state.category = action.payload
        },
        updateSubcategory: (state, action) => {
            state.subcategories = action.payload
        },
        updateGame: (state, action) => {
            state.game = action.payload
        },
        updateLocation: (state, action) => {
            state.location = action.payload
        },
        updateSiteType: (state, action) => {
            state.siteType = action.payload
        },
        updateSalary: (state, action) => {
            const { currency, compensationType, min, max } = action.payload;
            state.salary.currency = currency
            state.salary.compensationType = compensationType
            state.salary.min = min
            state.salary.max = max
        },
        updateExperience: (state, action) => {
            state.experience = action.payload
        }
    }
})

export const {
    updateCategory,
    updateSubcategory,
    updateGame,
    updateLocation,
    updateSiteType,
    updateSalary,
    updateExperience
} = formSlice.actions

export default formSlice.reducer