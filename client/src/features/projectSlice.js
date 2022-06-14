import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const initialState = {
  authorID: null,
  author: null,
  image: null,
  title: null,
  description: null,
  id: null,
  url: null,
};

// SignUp user
export const login = createAsyncThunk("project");

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setProject: (state, action) => {
      const { author, image, title, description, id, url, authorID } =
        action.payload;
      state.authorID = authorID;
      state.author = author;
      state.image = image;
      state.title = title;
      state.description = description;
      state.id = id;
      state.url = url;
    },
    clear: (state, action) => {
      state.authorID = null;
      state.author = null;
      state.image = null;
      state.title = null;
      state.description = null;
      state.id = null;
      state.url = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, (state) => {
      createEntityAdapter.removeAll(state);
    });
  },
});

export const { setProject, clear } = projectSlice.actions;
export default projectSlice.reducer;

export const selectCurrentAuthorID = (state) => state.project.authorID;
export const selectCurrentAuthor = (state) => state.project.author;
export const selectCurrentImage = (state) => state.project.image;
export const selectCurrentTitle = (state) => state.project.title;
export const selectCurrentDescription = (state) => state.project.description;
export const selectCurrentID = (state) => state.project.id;
export const selectCurrentUrl = (state) => state.project.url;
