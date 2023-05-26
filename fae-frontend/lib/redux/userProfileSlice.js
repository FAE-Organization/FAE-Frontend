import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    "id": "",
    "username": "",
    "bio": "",
    "pronouns": "",
    "twitch": "",
    "youtube": "",
    "discord": "",
    "twitter": "",
    "profilePic": "",
    "email": "",
    "salary": {
        "amount": 0,
        "currency": "",
        "compensationType": ""
    },
    "game": "",
    "region": "",
    "experience": "",
    "siteType": "",
    "tags": [],
    "roles": [],
    "showcase": [],
    "design": [],
    "events": [{}],
    "articles": [{}],
    "observer": '',
    "editing": '',
    "casting": '',
};

export const userProfileSlice = createSlice({
    name: 'userProfile',
    initialState,
    reducers: {
        setUserProfile: (state, action) => {
            state.userProfileData = action.payload
        },
    }
})

export const { setUserProfile } = userProfileSlice.actions

export default userProfileSlice.reducer
