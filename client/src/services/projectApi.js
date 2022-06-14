import { createApi } from "@reduxjs/toolkit/query/react";

import { baseQuery } from "../api";

export const projectApi = createApi({
  reducerPath: "projectApi",
  baseQuery,
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => ({
        url: "/project",
        method: "GET",
      }),
    }),
    createProject: builder.mutation({
      query: (credentials) => ({
        url: "/project",
        method: "POST",
        body: { ...credentials },
      }),
    }),
  }),
});

export const { useGetProjectsQuery, useCreateProjectMutation } = projectApi;
