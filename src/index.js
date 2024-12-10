import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { store } from './app/store'
import { Provider } from 'react-redux'
import EventCollection from './features/Manager/EventCollection';
import AboutEvent from './features/Manager/AboutEvent';
import AddEvents from './features/Manager/AddEvents';
import MovieCollection from './features/Manager/MovieCollection';
import AboutMovie from './features/Manager/AboutMovie';
import AddMovies from './features/Manager/AddMovies';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/event",
        element:<EventCollection></EventCollection>
      },
      {
        path:"/event/eventitem/:id",
        element:<AboutEvent></AboutEvent>
      },
      {
        path:"/addevent",
        element:<AddEvents></AddEvents>
      },
      {
        path:"/movie",
        element:<MovieCollection></MovieCollection>
      },
      {
        path:"/movie/movieitem/:id",
        element:<AboutMovie></AboutMovie>
      },
      {
        path:"/addmovie",
        element:<AddMovies></AddMovies>
      }
    ]
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
