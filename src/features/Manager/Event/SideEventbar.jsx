import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

function SideEventbar() {
  var [toggle,setToggle]=useState(true);
  var [searchparams]=useSearchParams();
  var navigate = useNavigate();
  useEffect(()=>{
    function Toggle(){
      setToggle(!toggle);
    }
  Toggle();
  },[])
  // useEffect(()=>{
  //   setToggle(prevToggle => !prevToggle);
  // },[])
  function filtevent(ev,obj){
    searchparams.append(Object.keys(obj)[0],Object.values(obj)[0])
    navigate({
      pathname:'/allevent/filterevents',
      search:searchparams.toString()
    })
  }
  return (
    <div class='w-100 p-2 m-2'>
        <div><h3>Filter</h3></div>
        <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
        Date
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body p-2 m-2">
        <button class={toggle?"btn btn-outline-primary p-1 m-1":"btn btn-primary p-1 m-1"}>Today</button>
        <button class={toggle?"btn btn-outline-primary p-1 m-1":"btn btn-primary p-1 m-1"}>Tomorrow</button>
        <button class={toggle?"btn btn-outline-primary p-1 m-1":"btn btn-primary p-1 m-1"}>This Weekend</button><br />
        <input type="date" name="" id="" />
      </div>
    </div>
  </div>
  <br />
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Languages
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body p-2 m-2">
        <button class="btn btn-outline-primary p-1 m-1" onClick={(event)=>{filtevent(event,{language:'Telugu'})}}>Telugu</button>
        <button class="btn btn-outline-primary p-1 m-1" onClick={(event)=>{Toogleevent(event,{language:'Telugu'})}}>Telugu</button>
        <button class="btn btn-outline-primary p-1 m-1" onClick={(event)=>{filtevent(event,{language:'English'})}}>English</button>
        <button class="btn btn-outline-primary p-1 m-1" onClick={(event)=>{filtevent(event,{language:'Tamil'})}}>Tamil</button>
        <button class="btn btn-outline-primary p-1 m-1" onClick={(event)=>{filtevent(event,{language:'Hindi'})}}>Hindi</button>
        <button class="btn btn-outline-primary p-1 m-1" onClick={(event)=>{filtevent(event,{language:'Kannada'})}}>Kannada</button>
        <button class="btn btn-outline-primary p-1 m-1" onClick={(event)=>{filtevent(event,{language:'Malayalam'})}}>Malayalam</button>
        <button class="btn btn-outline-primary p-1 m-1" onClick={(event)=>{filtevent(event,{language:'Bengali'})}}>Bengali</button>
      </div>
    </div>
  </div>
  <br />
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Categories
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body p-2 m-2">
        <button class="btn btn-outline-primary p-1 m-1" onClick={(event)=>{filtevent(event,{category:'Concert'})}}>Concert</button>
        <button class="btn btn-outline-primary p-1 m-1" onClick={(event)=>{filtevent(event,{category:'Comedy'})}}>Comedy Shows</button>
        <button class="btn btn-outline-primary p-1 m-1" onClick={(event)=>{filtevent(event,{category:'Music'})}}>Music Shows</button>
        <button class="btn btn-outline-primary p-1 m-1" onClick={(event)=>{filtevent(event,{category:'Fashion'})}}>Fashion</button>
        <button class="btn btn-outline-primary p-1 m-1" onClick={(event)=>{filtevent(event,{category:'Festival'})}}>Festival</button>
        <button class="btn btn-outline-primary p-1 m-1" onClick={(event)=>{filtevent(event,{category:'Business'})}}>Business</button>
        <button class="btn btn-outline-primary p-1 m-1" onClick={(event)=>{filtevent(event,{category:'Sports'})}}>Sports</button>
        <button class="btn btn-outline-primary p-1 m-1" onClick={(event)=>{filtevent(event,{category:'Education'})}}>Education</button>
        {/* <button class="btn btn-outline-primary p-1 m-1">Exhibitions</button>
        <button class="btn btn-outline-primary p-1 m-1">Performances</button>
        <button class="btn btn-outline-primary p-1 m-1">New Year Parties</button>
        <button class="btn btn-outline-primary p-1 m-1">Workshops</button> */}
      </div>
    </div>
  </div>
  <br />
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        More Filters
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body p-2 m-2">
        {/* <button class="btn btn-outline-primary p-1 m-1">Telugu</button>
        <button class="btn btn-outline-primary p-1 m-1">English</button>
        <button class="btn btn-outline-primary p-1 m-1">Tamil</button>
        <button class="btn btn-outline-primary p-1 m-1">Hindi</button>
        <button class="btn btn-outline-primary p-1 m-1">Kannada</button>
        <button class="btn btn-outline-primary p-1 m-1">Malayalam</button> */}
      </div>
    </div>
  </div>
  <br />
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
        Price
      </button>
    </h2>
    <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body p-2 m-2">
        <button class="btn btn-outline-primary p-1 m-1" onClick={(event)=>{filtevent(event,{price:'Free'})}}>Free</button>
        <button class="btn btn-outline-primary p-1 m-1" onClick={(event)=>{filtevent(event,{price:'500'})}}>0-500</button>
        <button class="btn btn-outline-primary p-1 m-1" onClick={(event)=>{filtevent(event,{price:'1500'})}}>501-2000</button>
        <button class="btn btn-outline-primary p-1 m-1" onClick={(event)=>{filtevent(event,{price:'2000'})}}>Above 2000</button>
      </div>
    </div>
  </div>
</div>
<br />
<button type="button" class="btn btn-outline-danger">Browse by Venue</button>
</div>
  )
}

export default SideEventbar
