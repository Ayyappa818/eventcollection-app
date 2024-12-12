import React from 'react'

function Home() {
  return (
    // <div class="">
    //     <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
    //       <div class="carousel-inner">
    //         <div class="carousel-item active">
    //           <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1726036566435_playcardnewweb.jpg" class="d-block w-100" alt="..."/>
    //         </div>
    //         <div class="carousel-item">
    //           <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1733918555238_prasadsmultiplexwebnew.jpg" class="d-block w-100" alt="..."/>
    //         </div>
    //         <div class="carousel-item">
    //           <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1733226379444_hyderabad1.jpg" class="d-block w-100" alt="..."/>
    //         </div>
    //       </div>
    //       <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    //         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    //         <span class="visually-hidden">Previous</span>
    //       </button>
    //       <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    //         <span class="carousel-control-next-icon" aria-hidden="true"></span>
    //         <span class="visually-hidden">Next</span>
    //       </button>
    //     </div>
    // </div>
    <div>
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1726036566435_playcardnewweb.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1733226379444_hyderabad1.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1733918555238_prasadsmultiplexwebnew.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Home
