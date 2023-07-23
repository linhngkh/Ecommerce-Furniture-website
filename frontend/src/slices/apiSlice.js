import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//keep empty "" if we use proxy
const baseQuery = fetchBaseQuery({
  baseUrl: "https://backend-stores.vercel.app",
  prepareHeaders: (headers, { getState }) => {
    headers.set("Access-Control-Allow-Origin", "*");
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User"],
  endpoints: (builder) => ({}),
});
