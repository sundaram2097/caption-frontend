import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return <>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="!#">Color Suggection</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse " id="navbarNav">
    <div className='mx-auto'>
    <ul className="navbar-nav  ">
      
      <li className="nav-item active px-4">
      <Link to='login' className=''>Login</Link>
      
      </li>
      
     
      <li className="nav-item active">
        <Link to='register'>Register</Link>
       
      </li>
      
    </ul>
    </div>
    
  </div>
</nav>
  </>
}

export default Navbar