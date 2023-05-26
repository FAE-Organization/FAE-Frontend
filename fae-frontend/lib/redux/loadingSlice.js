import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isUserCardLoading: false,
    isPageLoading: false
}

export const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        setIsUserCardLoading: (state, action) => {
            state.isUserCardLoading = action.payload
        },
        setIsPageLoading: (state, action) => {
            state.isPageLoading = action.payload
        }
    }
})

export const { setIsUserCardLoading, setIsPageLoading } = loadingSlice.actions

export default loadingSlice.reducer

