import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const url = "https://0ma3z85s0l.execute-api.us-east-2.amazonaws.com/api";
// export const url = "http://localhost:5000/api";

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
