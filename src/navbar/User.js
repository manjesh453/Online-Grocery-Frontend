import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Category from '../admin/Category';
import Subcategory from '../admin/Subcategory';

const User = () => {

    return (
        <div className="container-xxl position-relative bg-white d-flex p-0">
        {/* Sidebar Start */}
        <div className="sidebar pe-4 pb-3">
          <nav className="navbar bg-light navbar-light">
            <Link to="/adminshop" className="navbar-brand mx-4 mb-3">
              <h3 className="text-primary">
                <i className="fa fa-hashtag me-2"></i>DASHMIN
              </h3>
            </Link>
            <div className="navbar-nav w-100">
              <Link to="/" className="nav-item nav-link active">
                <i className="fa fa-tachometer-alt me-2"></i>Dashboard
              </Link>
              <Link to="/category" className="nav-item nav-link">
                <i className="fa fa-th me-2"></i>Category
              </Link>
              <Link to="/subcategory" className="nav-item nav-link">
                <i className="fa fa-keyboard me-2"></i>Subcategory
              </Link>
              <Link to="/product" className="nav-item nav-link">
                <i className="fa fa-table me-2"></i>Products
              </Link>
              <a href="/product" className="nav-item nav-link">
                <i className="fa fa-chart-bar me-2"></i>Order
              </a>
              <a href="" className="nav-item nav-link">
                <i className="fa fa-chart-bar me-2"></i>Users
              </a>
            </div>
          </nav>
        </div>
        {/* Sidebar End */}

        {/* Content Start */}
        <div className="content">
          {/* Navbar Start */}
          <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
            <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
              <h2 className="text-primary mb-0">
                <i className="fa fa-hashtag"></i>
              </h2>
            </a>
            <a href="#" className="sidebar-toggler flex-shrink-0">
              <i className="fa fa-bars"></i>
            </a>
            <form className="d-none d-md-flex ms-4 mt-2">
              <input
                className="form-control border-3" 
                type="search"
                placeholder="Search"
                
              />
            </form>
            <div className="navbar-nav align-items-center ms-auto">
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle mt-2 md-2"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  User Setting
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">
                  My Profile
                  </a>
                  <a className="dropdown-item" href="#">
                    Setting
                  </a>
                  <a className="dropdown-item" href="#">
                    Log Out
                  </a>
                </div>
              </div>
            </div>
          </nav>
          {/* Navbar End */}
         
          {/* Back to Top */}
          <div className="container">
                <Routes>
                    
                <Route exact path="/category" element={<Category/>}/>
          <Route exact path="/subcategory" element={<Subcategory/>}/>
                </Routes>
            </div>
        </div>
       
      </div>
       
            

    );
};

export default User;

