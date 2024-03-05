import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const shopApi = createApi({
    reducerPath: "shop",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/",
    }),
    endpoints: (builder) => ({
        getShops: builder.query({
            query: () => ({
                url: "shops",
                method: "GET",
            }),
        }),
        getShopPrice: builder.query({
            query: (id) => ({
                url: `shops/${id}/price`,
                method: "GET",
            }),
        }),
    }),
});

export default shopApi;
