import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const orderApi = createApi({
    reducerPath: "order",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://eliftech-back-on7b.onrender.com/",
    }),
    endpoints: (builder) => ({
        placeOrder: builder.mutation({
            query: (body) => ({
                url: "orders",
                method: "POST",
                body,
            }),
        }),
    }),
});

export default orderApi;
