import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const orderApi = createApi({
    reducerPath: "order",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/",
    }),
    endpoints: (builder) => ({
        getShops: builder.mutation({
            query: (body) => ({
                url: "orders",
                method: "POST",
                body,
            }),
        }),
    }),
});

export default orderApi;
