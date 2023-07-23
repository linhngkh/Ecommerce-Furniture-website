import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//keep empty "" because we use proxy
const baseQuery = fetchBaseQuery({
  baseUrl: "https://backend-stores.vercel.app",
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User"],
  endpoints: (builder) => ({}),
});
