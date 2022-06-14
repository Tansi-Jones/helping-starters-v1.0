import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQuery } from "../api";

export const authApi = createApi({
  reducerPath: "userAuthApi",
  baseQuery,
  endpoints: (builder) => ({
    userSignIn: builder.mutation({
      query: (credentials) => ({
        url: "/signin",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    userSignUp: builder.mutation({
      query: (credentials) => ({
        url: "/signup",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    forgotPassword: builder.mutation({
      query: (credentials) => ({
        url: `/user/forgot-password/${credentials.uID}`,
        method: "POST",
        headers: Headers,
        body: { ...credentials },
      }),
    }),
  }),
});

export const {
  useUserSignInMutation,
  useUserSignUpMutation,
  useForgotPasswordMutation,
} = authApi;
