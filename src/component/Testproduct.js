import React from "react";
import carrot from "./img/carrot.webp";

const Testproduct = (props) => {
  const data =props.data;
  return (
    <>
   
    <div className="d-flex flex-wrap">

{
  data.map((iteam)=>(
    <div className="d-flex">
    <div className="card mt-3 ml-3" style={{height:'350px',width:'360px'}}>
      <div className="container text-center">
        <img
          classNname="card-img-top m-2"
          style={{ Width: "70px", maxHeight: "200px" }}
          src={`http://localhost:8080/product/image/${iteam.productImage}`}
          alt="Carrot image"
        />
      </div>
      <div className="card-body">
        <h1 className="card-title text-center">{iteam.productName}</h1>
      </div>
      <div className="card-footer text-center">
        <div className="d-flex">
        <button className="btn btn-warning text-black mr-2" onclick="#!"style={{height:'35px'}}>
          Add to cart
        </button>
        <p className="card-text text-center mt-2"> Rs {iteam.productPrice}/-<span style={{margin:'5px',fontSize:'7px',fontStyle:'italic'}}>Rs 500/-(10%)off</span></p>
      </div>
      </div>
    </div>
    </div>
  ))
}
       






      </div>
      </>
  );
};

export default Testproduct;
