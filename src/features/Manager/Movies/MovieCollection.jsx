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
    <div class="">
      {
        isLoading && <b>Loading...</b>
      }

      <div class="m-2 p-2">
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
                 </div>
                 </div>
               </div>
             })
           }
           </div>
      </div>
    </div>
  )
}

export default MovieCollection
