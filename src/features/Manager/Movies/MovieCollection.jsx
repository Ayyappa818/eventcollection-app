import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useGetmoviescollectionQuery, useLazyGetmoviescollectionQuery } from '../../../services/MoviesApi';

function MovieCollection() {
  var {isLoading,data}=useGetmoviescollectionQuery();
  var[MovieFn]=useLazyGetmoviescollectionQuery();
  useEffect(()=>{
    MovieFn();
  },[MovieFn])
  console.log(isLoading)
  console.log(data)
  return (
    <div class="d-flex">
      {
        isLoading && <b>Loading...</b>
      }
      {/* <div class="w-25">
        {
          !isLoading && <SideMoviebar></SideMoviebar>
        }
      </div> */}

      <div class="w-75 m-2 p-2">
        <h1>Movie Collection</h1>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-4 p-2 m-2">
      {
        !isLoading && data?.map((m)=>{
            return <div class="col hov p-0 m-2 rounded">
            <div class="card h-100">
                <Link  to={`/movie/movieitem/${m._id}`}><img src={m.movieImage} class="card-img-top" style={{height:'300px'}} alt="..."/></Link>
              <div class="card-body">
              <h3 class="card-title">{m.movieTitle}</h3>
              <p class="card-title">{m.movieCensor}</p>
              <p class="card-title">{m.releaseDate}</p>
              {/* <div class="card-title">{
              m.language.map((l)=>{
                return <p>{l}</p>
              })
              }</div> */}
            </div>
            </div>
          </div>
        })
      }
      </div>
      </div>

{/* * <div class="w-75 m-2 p-2">
        <h1>Movie Collection</h1>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 p-2 m-2">
      {
        !isLoading && data?.map((m)=>{
            return <div class="col hov rounded">
            <div class="card h-100">
                <Link  to={`/movie/movieitem/${m._id}`}><img src={m.movieImage} class="card-img-top" style={{height:'300px'}} alt="..."/></Link>
              <div class="card-body">
              <h3 class="card-title">MovieTitle :{m.movieTitle}</h3>
              <h5 class="card-title">MovieType :{m.movieType}</h5>
              <b>Description :</b><p class="card-text">{m.aboutUs}</p>
            </div>
            </div>
          </div>
        })
      }
      </div>
      </div> */}

    </div>
  )
}

export default MovieCollection
