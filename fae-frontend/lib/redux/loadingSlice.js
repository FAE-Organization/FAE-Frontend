import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isUserCardLoading: false
}

export const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        setIsUserCardLoading: (state, action) => {
            state.isUserCardLoading = action.payload
        }
    }
})

export const { setIsUserCardLoading } = loadingSlice.actions

export default loadingSlice.reducer

