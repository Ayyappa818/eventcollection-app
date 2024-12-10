// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const EventApi = createApi({
  reducerPath: 'EventApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:6600/' }),
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
    getmoviescollection: builder.query({
      query: () => ({
        url:`/movies`,
      }),
    }),
    getmoviedetails: builder.query({
      query: (id) => ({
        url:`/movies/${id}`,
        method:"GET",
        // body:id,
      }),
    }),
    addmovies: builder.mutation({
      query: (Movies) => ({
        url:`/addmovies`,
        method:"POST",
        body:Movies,
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
  useGetmoviescollectionQuery,
  useLazyGetmoviescollectionQuery,
  useGetmoviedetailsQuery,
  useAddmoviesMutation,
 } = EventApi