import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useGetfiltermoviesMutation } from '../../../services/MoviesApi';

function FilterMovie() {
  var {search}= useLocation();
  //  console.log(search.substring(1).replaceAll('=',':').split('&'))
  var [MfilterdataFn]=useGetfiltermoviesMutation();
  var arr = [];
  var [moviefilter,setMoviefilter]=useState([]);

  useEffect(()=>{
    var MF = search.substring(1).replaceAll('=',':').split('&')
     async function fetchData() {
      MF.forEach((m)=>{
        var ar=m.split(':')
        var obj={}
        obj[ar[0]]=ar[1]
        arr.push(obj)
       //  console.log(obj)
        console.log(arr)
       })
       var filterdata = await MfilterdataFn(arr)
       setMoviefilter(filterdata.data)
       console.log(moviefilter)
     }
     fetchData()
   },[search])
  return (
    <div>
      <div class="m-2 p-2">
        <h1>Movie Collection</h1>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4 p-2 m-2">
      {
        moviefilter?.map((item)=>{
            return <div class="col hov p-0 m-2 rounded">
            <div class="card h-100">
                <Link  to={`/movie/movieitem/${item._id}`}>
                <img src={item.movieImage} class="card-img-top" style={{height:'300px'}} alt="..."/>
                </Link>
              <div class="card-body">
              <h3 class="card-title">{item.movieTitle}</h3>
              <p class="card-title">{item.movieCensor}</p>
              <p class="card-title">{item.releaseDate}</p>
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

export default FilterMovie
