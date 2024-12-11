import React from 'react'

function SideEventbar() {
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
        <button class="btn btn-outline-primary p-1 m-1">Today</button>
        <button class="btn btn-outline-primary p-1 m-1">Tomorrow</button>
        <button class="btn btn-outline-primary p-1 m-1">This Weekend</button><br />
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
        <button class="btn btn-outline-primary p-1 m-1">Telugu</button>
        <button class="btn btn-outline-primary p-1 m-1">English</button>
        <button class="btn btn-outline-primary p-1 m-1">Tamil</button>
        <button class="btn btn-outline-primary p-1 m-1">Hindi</button>
        <button class="btn btn-outline-primary p-1 m-1">Kannada</button>
        <button class="btn btn-outline-primary p-1 m-1">Malayalam</button>
        <button class="btn btn-outline-primary p-1 m-1">Bengali</button>
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
        <button class="btn btn-outline-primary p-1 m-1">Comedy Shows</button>
        <button class="btn btn-outline-primary p-1 m-1">Music Shows</button>
        <button class="btn btn-outline-primary p-1 m-1">Workshops</button>
        <button class="btn btn-outline-primary p-1 m-1">New Year Parties</button>
        <button class="btn btn-outline-primary p-1 m-1">Kids</button>
        <button class="btn btn-outline-primary p-1 m-1">Meetups</button>
        <button class="btn btn-outline-primary p-1 m-1">Performances</button>
        <button class="btn btn-outline-primary p-1 m-1">Screening</button>
        <button class="btn btn-outline-primary p-1 m-1">Exhibitions</button>
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
        <button class="btn btn-outline-primary p-1 m-1">Telugu</button>
        <button class="btn btn-outline-primary p-1 m-1">English</button>
        <button class="btn btn-outline-primary p-1 m-1">Tamil</button>
        <button class="btn btn-outline-primary p-1 m-1">Hindi</button>
        <button class="btn btn-outline-primary p-1 m-1">Kannada</button>
        <button class="btn btn-outline-primary p-1 m-1">Malayalam</button>
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
        <button class="btn btn-outline-primary p-1 m-1">Free</button>
        <button class="btn btn-outline-primary p-1 m-1">0-500</button>
        <button class="btn btn-outline-primary p-1 m-1">501-2000</button>
        <button class="btn btn-outline-primary p-1 m-1">Above 2000</button>
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
