import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import { EventApi } from '../services/EventsApi'
import { MoviesApi } from '../services/MoviesApi'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [EventApi.reducerPath]: EventApi.reducer,
    [MoviesApi.reducerPath]: MoviesApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(EventApi.middleware,MoviesApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)