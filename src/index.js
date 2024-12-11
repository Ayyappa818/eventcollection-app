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
import EventCollection from './features/Manager/Event/EventCollection';
import AboutEvent from './features/Manager/Event/AboutEvent';
import AddEvents from './features/Manager/Event/AddEvents';
import MovieCollection from './features/Manager/Movies/MovieCollection';
import AboutMovie from './features/Manager/Movies/AboutMovie';
import AddMovies from './features/Manager/Movies/AddMovies';
import Allmovies from './features/Manager/Movies/Allmovies';
import FilterMovie from './features/Manager/Movies/FilterMovie';
import Allevents from './features/Manager/Event/Allevents';
import FilterEvent from './features/Manager/Event/FilterEvent';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {
        path:"/allevent",
        element:<Allevents></Allevents>,
        children:[
          {
            path:"/allevent/",
            element:<EventCollection></EventCollection>
          },
          {
            path:"/allevent/filterevents",
            element:<FilterEvent></FilterEvent>
          }
        ]
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
        path:"/allmovie",
        element:<Allmovies></Allmovies>,
        children:[
          {
            path:"/allmovie/",
            element:<MovieCollection></MovieCollection>
          },
          {
            path:"/allmovie/filtermovies",
            element:<FilterMovie></FilterMovie>
          }
        ]
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
