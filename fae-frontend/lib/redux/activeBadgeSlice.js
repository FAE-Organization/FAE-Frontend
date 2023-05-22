import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    badgeName: '',
    badgeValue: ''
}

export const activeBadgeSlice = createSlice({
    name: 'activeBadgeSlice',
    initialState,
    reducers: {
        setBadgeName: (state, action) => {
            state.badgeName = action.payload
        },
        setBadgeValue: (state, action) => {
            state.badgeValue = action.payload
        }
    }
})

export const { setBadgeName, setBadgeValue } = activeBadgeSlice.actions

export default activeBadgeSlice.reducer