import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";

const initialState = {
  userData: {
    "id": "",
    "username": "",
    "bio": "",
    "pronouns": "pronouns",
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
  }
};

export const saveUserProfile = createAsyncThunk(
  "userProfile/saveUserProfile",
  async (userId, thunkAPI) => {
    const url = process.env.NODE_ENV == 'development' ?
      `http://localhost:3001/api/profile?id=${userId}` : `${process.env.NEXT_PUBLIC_BACKEND_BASE_URI}/api/profile?id=${userId}`;
    const { userData } = thunkAPI.getState().userProfile;

    try {
      await axios.post(url, userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      return { ...state, userData: action.payload[0] };
    },
    setUsername: (state, action) => {
      return {
        ...state,
        userData: {
          ...state.userData,
          name: action.payload
        }
      };
    },
    setBio: (state, action) => {
      return {
        ...state,
        userData: {
          ...state.userData,
          bio: action.payload
        }
      };
    },
    setPronouns: (state, action) => {
      return {
        ...state,
        userData: {
          ...state.userData,
          pronouns: action.payload
        }
      };
    },
    setTwitch: (state, action) => {
      return {
        ...state,
        userData: {
          ...state.userData,
          twitch: action.payload
        }
      };
    },
    setYoutube: (state, action) => {
      return {
        ...state,
        userData: {
          ...state.userData,
          youtube: action.payload
        }
      };
    },
    setDiscord: (state, action) => {
      return {
        ...state,
        userData: {
          ...state.userData,
          discord: action.payload
        }
      };
    },
    setTwitter: (state, action) => {
      return {
        ...state,
        userData: {
          ...state.userData,
          twitter: action.payload
        }
      };
    },
    setProfilePic: (state, action) => {
      const { payload } = action;
      state.userData.profilePic = payload;
    },
    setEmail: (state, action) => {
      return {
        ...state,
        userData: {
          ...state.userData,
          email: action.payload
        }
      };
    },
    setSalary: (state, action) => {
      const { currency, compensationType, amount } = action.payload;
      const salary = {};
      salary.amount = amount
      salary.currency = currency
      salary.compensationType = compensationType
      return {
        ...state,
        userData: {
          ...state.userData,
          salary
        }
      };
    },
    setGame: (state, action) => {
      return {
        ...state,
        userData: {
          ...state.userData,
          game: action.payload
        }
      };
    },
    setRegion: (state, action) => {
      return {
        ...state,
        userData: {
          ...state.userData,
          region: action.payload
        }
      };
    },
    setExperience: (state, action) => {
      return {
        ...state,
        userData: {
          ...state.userData,
          experience: action.payload
        }
      };
    },
    setSiteType: (state, action) => {
      return {
        ...state,
        userData: {
          ...state.userData,
          siteType: action.payload
        }
      };
    },
    setTags: (state, action) => {
      return {
        ...state,
        userData: {
          ...state.userData,
          tags: action.payload
        }
      };
    },
    setRoles: (state, action) => {
      return {
        ...state,
        userData: {
          ...state.userData,
          roles: action.payload
        }
      };
    },
    setShowcase: (state, action) => {
      return {
        ...state,
        userData: {
          ...state.userData,
          showcase: action.payload
        }
      };
    },
    setDesign: (state, action) => {
      return {
        ...state,
        userData: {
          ...state.userData,
          design: action.payload
        }
      };
    },
    setEvents: (state, action) => {
      return {
        ...state,
        userData: {
          ...state.userData,
          events: action.payload
        }
      };
    },
    setArticles: (state, action) => {
      return {
        ...state,
        userData: {
          ...state.userData,
          articles: action.payload
        }
      };
    },
    setObserver: (state, action) => {
      return {
        ...state,
        userData: {
          ...state.userData,
          observer: action.payload
        }
      };
    },
    setEditing: (state, action) => {
      return {
        ...state,
        userData: {
          ...state.userData,
          editing: action.payload
        }
      };
    },
    setCasting: (state, action) => {
      return {
        ...state,
        userData: {
          ...state.userData,
          casting: action.payload
        }
      };
    },
  }
})

export const {
  setUserData,
  setUsername,
  setBio,
  setPronouns,
  setTwitch,
  setYoutube,
  setDiscord,
  setTwitter,
  setProfilePic,
  setEmail,
  setSalary,
  setGame,
  setRegion,
  setExperience,
  setSiteType,
  setTags,
  setRoles,
  setShowcase,
  setDesign,
  setEvents,
  setArticles,
  setObserver,
  setEditing,
  setCasting,
} = userProfileSlice.actions

export default userProfileSlice.reducer;