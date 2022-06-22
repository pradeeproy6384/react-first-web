import React from "react";
import { NavLink } from "react-router-dom";
import slogo from '../images/logo.png';
// import plogo from '../components/Logo';
const Navbar = () => {
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark"> <NavLink className="navbar-brand" to="/"><img src={slogo} alt="logo" /></NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active"> <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink> </li>
                    <li className="nav-item"> <NavLink className="nav-link" to="/about">About</NavLink> </li>
                    <li className="nav-item"> <NavLink className="nav-link" to="/gallery">Gallery</NavLink> </li>
                    <li className="nav-item"> <NavLink className="nav-link" to="/master">Master Plan</NavLink> </li>
                    <li className="nav-item"> <NavLink className="nav-link" to="/floor">Floor Plan</NavLink> </li>
                    <li className="nav-item"> <NavLink className="nav-link" to="/contact">Contact Us</NavLink> </li>
                </ul>
            </div>
        </nav> 
        </>
    )
}
export default Navbar;