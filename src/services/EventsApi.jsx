// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const EventApi = createApi({
  reducerPath: 'EventApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:6500/' }),
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
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
  useGeteventscollectionQuery,
  useGeteventdetailsQuery,
 } = EventApi