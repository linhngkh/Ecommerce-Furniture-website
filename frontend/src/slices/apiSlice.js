import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//keep "" bc we use proxy
const baseQuery = fetchBaseQuery({ baseUrl: "" });

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ["User"], 
    endpoints: (builder) => ({})
})