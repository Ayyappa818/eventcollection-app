// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const EventApi = createApi({
  reducerPath: 'EventApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:6400/' }),
  endpoints: (builder) => ({
    geteventscollection: builder.query({
      query: () => ({
        url:`/events`,
        // method:"",
        // body:,
      }),
    }),
    geteventdetails: builder.query({
      query: (id) => ({
        url:`/events/${id}`,
        method:"GET",
        // body:id,
      }),
    }),
    addevents: builder.mutation({
      query: (Events) => ({
        url:`/addevents`,
        method:"POST",
        body:Events,
      }),
    }),
    getfilterevents: builder.mutation({
      query: (data) => ({
        url:`/efilter`,
        method:'POST',
        body:data,
      }),
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
  useGeteventscollectionQuery,
  useLazyGeteventscollectionQuery,
  useGeteventdetailsQuery,
  useAddeventsMutation,
  useGetfiltereventsMutation,
 } = EventApi