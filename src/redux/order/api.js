import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const orderApi = createApi({
  reducerPath: 'order',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://eliftech-back-beta.vercel.app/',
    // baseUrl: "https://eliftech-back-on7b.onrender.com/",
  }),
  tagTypes: ['Orders'],
  endpoints: builder => ({
    getOrders: builder.query({
      query: email => ({
        url: `orders?email=${email}`,
        method: 'GET',
      }),
      providesTags: ['Orders'],
    }),
    placeOrder: builder.mutation({
      query: body => ({
        url: 'orders',
        method: 'POST',
        body,
      }),
      providesTags: ['Orders'],
    }),
  }),
});

export default orderApi;
