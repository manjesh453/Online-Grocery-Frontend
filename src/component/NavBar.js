import React from "react";
import { Link } from "react-router-dom";
import { FaServicestack } from "react-icons/fa";
import { Route, Routes } from "react-router-dom";
import LOGIN from "./Login";
import USERHOME from "./UserHome";
import REGISTER from "./Register";
import CART from "./Cart";

const Navigator = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "orange" }}
      >
        <Link
          to="/home"
          style={{ textDecoration: "none", color: "black", fontSize: "50px" }}
        >
          Online Shopping
        </Link>

        <div className="text-center ml-4">
          <form className="d-none d-md-flex ms-4 mt-2">
            <input
              className="form-control border-3"
              type="search"
              placeholder="Search"
            />
          </form>
        </div>
        {
          //this is login button*****************************************************************************************
        }
        <div className="collapse navbar-collapse  justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item active mr-3">
              <Link
                to="/cart"
                style={{ textDecoration: "none", color: "black" }}
              >
                {" "}
                <FaServicestack style={{ fontSize: "40px" }} />5
              </Link>
            </li>

            <li className="nav-item active ml-4 ">
              <Link
                to="/login"
                style={{
                  fontSize: "35px",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Login
              </Link>
            </li>
            <li className="nav-item active ml-4 mr-5">
              <Link
                to="/register"
                style={{
                  fontSize: "35px",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/login" element={<LOGIN />} />
        <Route path="/home" element={<USERHOME />} />
        <Route path="/register" element={<REGISTER />} />
        <Route path="/cart" element={<CART />} />
      </Routes>
    </div>
  );
};
export default Navigator;
