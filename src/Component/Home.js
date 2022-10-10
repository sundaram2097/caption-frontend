import React from 'react'
import {Link} from 'react-router-dom'

function Home() {
  
  return<>
  {/* <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://i.ytimg.com/vi/FZrHoAUkHpE/maxresdefault.jpg" className="d-block w-100" alt="womens"/>
    </div>
    <div className="carousel-item">
      <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DctI1XUjueaE&psig=AOvVaw3XyBjmoI84tBlBXckN4k_n&ust=1665477012007000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMjf_L6f1foCFQAAAAAdAAAAABAK" className="d-block w-100" alt="womens2"/>
    </div>
    <div className="carousel-item">
      <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fdemos.devexpress.com%2FASPxImageAndDataNavigationDemos%2FImageSlider%2FSlideShow.aspx&psig=AOvVaw3XyBjmoI84tBlBXckN4k_n&ust=1665477012007000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCMjf_L6f1foCFQAAAAAdAAAAABAq" className="d-block w-100" alt="women3"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> */}
<div className='container-fluid'>

<div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="https://i.ytimg.com/vi/FZrHoAUkHpE/maxresdefault.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
  
    
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  <div className='col-6'></div>
  <div className="d-grid gap-2 col-6 mx-auto">
  
 <Link to='/monday'><button className=' btn btn-outline-warning' >Monday</button></Link>
 
 <Link to='/tuesday'><button className='btn btn-outline-warning'>Tuesday</button></Link>
 <Link to='/wednesday'><button className='btn btn-outline-warning'>Wednesday</button></Link>
 <Link to='/thursday'><button className='btn btn-outline-warning'>Thursday</button></Link>
 <Link to='/friday'><button className='btn btn-outline-warning'>Friday</button></Link><br/>
 <Link to='/saturday'><button className='btn  btn-secondary'>Saturday</button></Link>
 <Link to='/sunday'><button className='btn  btn-secondary'>Sunday</button></Link>
 
</div>
</div> 
  </>
}

export default Home