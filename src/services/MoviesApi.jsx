// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const MoviesApi = createApi({
  reducerPath: 'MoviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:6400/' }),
  endpoints: (builder) => ({
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
      getfiltermovies: builder.mutation({
        query: (data) => ({
          url:`/mfilter`,
          method:"POST",
          body:data,
        }),
      }),
      getdeletemovies: builder.mutation({
        query: (id) => ({
          url:`/mdelete/${id}`,
          method:"DELETE",
          body:id,
        }),
      }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
    useGetmoviescollectionQuery,
    useLazyGetmoviescollectionQuery,
    useGetmoviedetailsQuery,
    useAddmoviesMutation,
    useGetfiltermoviesMutation,
    useGetdeletemoviesMutation,
 } = MoviesApi