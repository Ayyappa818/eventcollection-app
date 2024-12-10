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
        
      <input type="date" name="" id="" />
      </div>
    </div>
  </div>
  <br />
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Location
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body p-2 m-2">
        
      </div>
    </div>
  </div>
  <br />
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Language
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body p-2 m-2">
      <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
        <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off"/>
        <label class="btn btn-outline-primary rounded m-2 p-2" for="btncheck1">Today</label>

        <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off"/>
        <label class="btn btn-outline-primary rounded m-2 p-2" for="btncheck2">Tomorrow</label>
      
        <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off"/>
        <label class="btn btn-outline-primary rounded m-2 p-2" for="btncheck3">This Weekend</label>
      </div>
      </div>
    </div>
  </div>
  <br />
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        Categories
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body p-2 m-2">
      <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
        <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off"/>
        <label class="btn btn-outline-primary rounded m-2 p-2" for="btncheck1">Today</label>

        <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off"/>
        <label class="btn btn-outline-primary rounded m-2 p-2" for="btncheck2">Tomorrow</label>
      
        <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off"/>
        <label class="btn btn-outline-primary rounded m-2 p-2" for="btncheck3">This Weekend</label>
      </div>
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
      <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
        <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off"/>
        <label class="btn btn-outline-primary rounded m-2 p-2" for="btncheck1">Today</label>

        <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off"/>
        <label class="btn btn-outline-primary rounded m-2 p-2" for="btncheck2">Tomorrow</label>
      
        <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off"/>
        <label class="btn btn-outline-primary rounded m-2 p-2" for="btncheck3">This Weekend</label>
      </div>
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
