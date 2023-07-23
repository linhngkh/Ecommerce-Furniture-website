import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//keep empty "" if we use proxy
const baseQuery = fetchBaseQuery({
  baseUrl: "https://backend-stores.vercel.app",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    headers.set("Access-Control-Allow-Origin", "*");
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User"],
  endpoints: (builder) => ({}),
});
