import React from "react";
import Products from "./Products";

const USERHOME = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row mt-3 mx-2">
          {
            //list-Group Here
          }
          <div className="col-md-3">
            <div className="list-group mt-4">
              <a href="#!"className="list-group-item list-group-item-action active">
                All Products
              </a>
              <a href="#!" className="list-group-item list-group-item-action">
                Fruits
              </a>
              <a href="#!" className="list-group-item list-group-item-action">
                Vegetable
              </a>
              <a href="#!" className="list-group-item list-group-item-action">
                Drinks
              </a>
            </div>
          </div>
          <div className="col-md-9">
               <Products />

          </div>
        </div>
      </div>
    </div>
  );
};
export default USERHOME;