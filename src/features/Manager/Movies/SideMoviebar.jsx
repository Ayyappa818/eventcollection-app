import React from 'react'

function SideMoviebar() {
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
        
      <input type="date" name="" id="" />
      </div>
    </div>
  </div>
  <br />
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Language
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body p-2 m-2">
        <button class="btn btn-outline-primary">Telugu</button>
        <button class="btn btn-outline-primary">English</button>
        <button class="btn btn-outline-primary">Tamil</button>
        <button class="btn btn-outline-primary">Hindi</button>
        <button class="btn btn-outline-primary">Kannada</button>
        <button class="btn btn-outline-primary">Malayalam</button>
      </div>
    </div>
  </div>
  <br />
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Geners
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body p-2 m-2">
        
      </div>
    </div>
  </div>
  <br />
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        Format
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body p-2 m-2">
        
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
        
      </div>
    </div>
  </div>
</div>
<br />
<button type="button" class="btn btn-outline-danger">Browse by Cinemas</button>
    </div>
  )
}

export default SideMoviebar
