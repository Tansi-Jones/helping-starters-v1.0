import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const initialState = {
  uID: null,
  user: null,
  token: null,
  email: null,
};

// SignUp user
export const login = createAsyncThunk("auth");

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { name, accessToken, _id, email } = action.payload;
      state.uID = _id;
      state.user = name;
      state.token = accessToken;
      state.email = email;
    },
    logOut: (state, action) => {
      state.uID = null;
      state.user = null;
      state.token = null;
      state.email = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, (state) => {
      createEntityAdapter.removeAll(state);
    });
  },
});

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;

export const selectCurrentUID = (state) => state.auth.uID;
export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
export const selectCurrentEmail = (state) => state.auth.email;
