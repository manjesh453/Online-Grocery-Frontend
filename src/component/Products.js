import React from "react";
import carrot from "./img/carrot.webp";

const Products = () => {
  return (
    <div>
      <div className="d-flex">
        <div className="card mt-3 ml-3" style={{height:'350px',width:'360px'}}>
          <div className="container text-center">
            <img
              classNname="card-img-top m-2"
              style={{ Width: "70px", maxHeight: "200px" }}
              src={carrot}
              alt="Carrot image"
            />
          </div>
          <div className="card-body">
            <h1 className="card-title text-center">Apple</h1>
          </div>
          <div className="card-footer text-center">
            <div className="d-flex">
            <button className="btn btn-warning text-black mr-2" onclick="#!"style={{height:'35px'}}>
              Add to cart
            </button>
            <p className="card-text text-center mt-2"> Rs 400/-<span style={{margin:'5px',fontSize:'7px',fontStyle:'italic'}}>Rs 500/-(10%)off</span></p>
          </div>
          </div>
        </div>

        </div>
      </div>
  );
};

export default Products;
