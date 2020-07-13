import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar =()=> {
    return(
        <>
            <nav className="navbar navbar-expand-lg">
  <NavLink className="navbar-brand" to="/">SPORTS SHOE</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">

      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home</NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="/product">Product</NavLink>
      </li>

      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>
      
    </ul>
  </div>
</nav>
        </>
    )
}
export default Navbar;