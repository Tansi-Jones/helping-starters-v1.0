import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const url = "http://localhost:5000/api";

export const baseQuery = fetchBaseQuery({
  baseUrl: url,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("authorization", `Bearer: ${token}`);
    }
    return headers;
  },
});
