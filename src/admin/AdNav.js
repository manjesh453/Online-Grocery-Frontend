import React from "react";
import { Link } from "react-router-dom";
import { FaServicestack ,FaExternalLinkAlt} from "react-icons/fa";
import { Route,Routes } from "react-router-dom";
import cart from "./cart";



const AdNav = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "orange" }}
      >
       
        <a style={{ textDecoration: "none",color:'black',fontSize:'50px'}}>Online Shopping</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {
          //this is login button*****************************************************************************************
        }
        <div className="collapse navbar-collapse  justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item active mr-3">
             <Link to="/cart" style={{textDecoration: "none",color:'black'}}> <FaServicestack style={{ fontSize: "40px" }} />5</Link>
            </li>
            <li className="nav-item active mr-3 ml-4">
            <Link to="/" style={{textDecoration: "none",color:'black'}}> < FaExternalLinkAlt style={{ fontSize: "40px" }} /></Link>
             
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
          <Route path="/cart" element={<cart/>}/>
        </Routes>
    </div>
  );
};
export default AdNav;
