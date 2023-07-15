import React from "react";
import { Link } from "react-router-dom";
import Products from "./Products";

const UserHome = () => {


  return (
    <div>
      <div className="container-fluid">
        <div className="row mt-3 mx-2">
          <div className="col-md-3">
            <div className="list-group mt-4">
              <Link to="/" className="list-group-item list-group-item-action active">
                All Products
              </Link>
              <Link to="/category/1" className="list-group-item list-group-item-action">
                Fruits
              </Link>
              <Link to="/category/2" className="list-group-item list-group-item-action">
                Vegetable
              </Link>
              <Link to="category/3" className="list-group-item list-group-item-action">
                Drinks
              </Link>
            </div>
          </div>
          <div className="col-md-9">           
               
          <Products/>
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
