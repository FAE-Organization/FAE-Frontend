import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // users: [],
    users: 0,
    usersByFilter: [],
    usersBySearch: {
        initialLoad: true,
        data: []
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.users = action.payload
        },
        setUsersByFilter: (state, action) => {
            state.usersByFilter = action.payload
        },
        setUsersBySearch: (state, action) => {
            state.usersBySearch = action.payload
        }
    }
})

export const { setUser, setUsersByFilter, setUsersBySearch } = userSlice.actions

export default userSlice.reducer
