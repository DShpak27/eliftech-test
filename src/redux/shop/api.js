import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const shopApi = createApi({
    reducerPath: "shop",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/",
    }),
    endpoints: (builder) => ({
        getShops: builder.query({
            query: () => ({
                url: "pharms",
                method: "GET",
            }),
            providesTags: ["Shops"],
        }),
        getShopPrice: builder.query({
            query: (id) => ({
                url: `pharms/${id}/prices`,
                method: "GET",
            }),
            providesTags: ["Price"],
        }),
    }),
});

export default shopApi;
