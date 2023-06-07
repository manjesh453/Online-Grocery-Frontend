import React from "react";
import { FaServicestack } from "react-icons/fa";

const Navigator = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "yellow" }}
      >
        <a className="navbar-brand" href="#" style={{ fontSize: "50px" }}>
          OnlineShopping
        </a>
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
              <a className="nav-link" href="#!">
                <FaServicestack style={{ fontSize: "30px" }} />5
              </a>
            </li>

            <li className="nav-item active ml-6">
              <a className="nav-link" href="#!" style={{ fontSize: "30px" }}>
                Login
              </a>
            </li>
            <li className="nav-item active">
              <a
                className="nav-link ml-2 mr-2"
                href="#!"
                style={{ fontSize: "30px" }}
              >
                Register
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navigator;
