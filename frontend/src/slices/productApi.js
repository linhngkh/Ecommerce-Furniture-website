//register api service to help fetching data from backend api
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:5000/api";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;
