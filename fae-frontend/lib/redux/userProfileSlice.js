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
        // setUserProfile: (state, action) => {
        //     state.userProfileData = action.payload
        // },
        setId: (state, action) => {
            state.id = action.payload
        },
        setUsername: (state, action) => {
            state.username = action.payload
        },
        setBio: (state, action) => {
            state.bio = action.payload
        },
        setPronouns: (state, action) => {
            state.pronouns = action.payload
        },
        setTwitch: (state, action) => {
            state.twitch= action.payload
        },
        setYoutube: (state, action) => {
            state.youtube = action.payload
        },
        setDiscord: (state, action) => {
            state.discord = action.payload
        },
        setTwitter: (state, action) => {
            state.twitter = action.payload
        },
        setProfilePic: (state, action) => {
            state.profilePic = action.payload
        },
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setSalary: (state, action) => {
            const { currency, compensationType, amount} = action.payload;
            state.salary.amount = amount
            state.salary.currency = currency
            state.salary.compensationType = compensationType
        },
        setGame: (state, action) => {
            state.game = action.payload
        },
        setRegion: (state, action) => {
            state.region = action.payload
        },
        setExperience: (state, action) => {
            state.experience = action.payload
        },
        setSiteType: (state, action) => {
            state.siteType = action.payload
        },
        setTags: (state, action) => {s
            state.tags = action.payload
        },
        setRoles: (state, action) => {
            state.roles = action.payload
        },
        setShowcase: (state, action) => {
            state.showcase = action.payload
        },
        setDesign: (state, action) => {
            state.design = action.payload
        },
        setEvents: (state, action) => {
            state.events = action.payload
        },
        setArticles: (state, action) => {
            state.articles = action.payload
        },
        setObserver: (state, action) => {
            state.observer = action.payload
        },
        setEditing: (state, action) => {
            state.editing = action.payload
        },
        setCasting: (state, action) => {
            state.casting = action.payload
        },
    }
})

export const { setUserProfile } = userProfileSlice.actions

export default userProfileSlice.reducer
