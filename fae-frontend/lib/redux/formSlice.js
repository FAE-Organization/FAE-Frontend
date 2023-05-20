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
        min: 0,
        max: Infinity
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
            const updatedLocation = action.payload

            const currentLength = state.subcategories.length
            const updatedLength = updatedLocation.length

            if (currentLength < updatedLength) {
                const newSubcategories = updatedLocation.filter(entry => !state.subcategories.includes(entry))
                state.subcategories.push(...newSubcategories)
                state.subcategories.sort()
            } else if (currentLength > updatedLength) {
                const newSubcategories = state.subcategories.filter(entry => !updatedLocation.includes(entry));
                state.subcategories = newSubcategories.sort();
            }
        },
        updateGame: (state, action) => {
            state.game = action.payload
        },
        updateLocation: (state, action) => {
            state.location = action.payload
        },
        updateSiteType: (state, action) => {
            const updatedSiteType = action.payload

            const currentLength = state.siteType.length
            const updatedLength = updatedSiteType.length

            if (currentLength < updatedLength) {
                const newSiteType = updatedSiteType.filter(entry => !state.siteType.includes(entry))
                state.siteType.push(...newSiteType)
                state.siteType.sort()
            } else if (currentLength > updatedLength) {
                const newSiteType = state.siteType.filter(entry => !updatedSiteType.includes(entry))
                state.siteType = newSiteType.sort()
            }
        },
        updateSalary: (state, action) => {
            const { currency, compensationType, min, max } = action.payload;
            state.salary.currency = currency
            state.salary.compensationType = compensationType
            state.salary.min = min
            state.salary.max = max
        },
        updateExperience: (state, action) => {
            const updatedExperience = action.payload

            const currentLength = state.experience.length
            const updatedLength = updatedExperience.length

            if (currentLength < updatedLength) {
                const newExperience = updatedExperience.filter(entry => !state.experience.includes(entry))
                state.experience.push(...newExperience)
                state.experience.sort()
            } else if (currentLength > updatedLength) {
                const newExperience = state.experience.filter(entry => !updatedExperience.includes(entry))
                state.experience = newExperience.sort()
            }
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