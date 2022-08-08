import "../App.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";

export default function Navbar() {
  const [qty,setQty]=useState(0)
  const qtys=JSON.parse(localStorage.getItem("qty"));
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-light pink '>
        <div className='container '>
          <NavLink className='navbar-brand  fw-bolder fs-3' to='/'>
            FAMILY COLLECTION  
          </NavLink>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav mx-auto mb-2  mb-lg-0 py-4 '>
              <li className='nav-item mx-1'>
                <NavLink
                  className='nav-link active mx-2 fs-5 text-default fw-bold'
                  aria-current='page'
                  to='/'
                >
                  HOME
                </NavLink>
              </li>

              <li className='nav-item mx-2'>
                <NavLink className='nav-link  fs-5  fw-bold' to='/about'>
                  ABOUTS
                </NavLink>
              </li>
              <li className='nav-item mx-2'>
                <NavLink className='nav-link  fs-5   fw-bold' to='/Contacts'>
                  CONTACTS
                </NavLink>
              </li>
            </ul>
          
            {/* <div className='buttons btx ' > */}
              <NavLink
                to='/login'
                className='btn  btn-outline-dark  m-1 fw-bold'
              >
                <i className='fa fa-sign-in me-1' aria-hidden='true'></i>Login
              </NavLink>
              <NavLink
                to='/register'
                className='btn  btn-outline-dark m-1 fw-bold'
              >
                <i className='fa fa-user-plus' aria-hidden='true'></i>Register
              </NavLink>
              <NavLink to='/cart' className='btn  btn-dark m-1 fw-bold'>
                <i className='fa fa-shopping-cart' aria-hidden='true'></i> cart
                ({qtys})
              </NavLink>
            {/* </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
