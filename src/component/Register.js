import React from "react";

const REGISTER = () => {
  return (
    <div className="container-fluid">
<div className="row mt-3">
<div className="col-md-3 offset-md-5">
<div className="card text-center"style={{width:'400px'}}>
<div className="card-header text-black " style={{ backgroundColor: "#ffff6f" }}>
     <h3>Sign Up Here!!</h3>
</div>
<div className="card-body px-5">
<form action="#!" >
  <div className="form-group">
    <label for="name" style={{fontSize:'20px'}}>FullName</label>
    <input type="text" className="form-control" id="name" name="user_name"/>
   </div>
   <div className="form-group">
    <label for="email" style={{fontSize:'20px'}}>E-mail</label>
    <input type="email" className="form-control" id="email" name="email"/>
   </div>
   <div className="form-group">
    <label for="password" style={{fontSize:'20px'}}>Password</label>
    <input type="password" className="form-control" id="password" name="password"/>
   </div>
   <div className="form-group">
    <label for="phone" style={{fontSize:'20px'}}>Phone Number</label>
    <input type="number" className="form-control " id="phone" name="phone"/>
   </div>
   <div className="form-group">
    <label for="address" style={{fontSize:'20px'}}>Address</label>
   <textarea name="address"style={{height:'200px'}}className="form-control"></textarea>
    </div>
   <div className="container text-center">
   <button type="submit" className="btn btn-success mr-4">Register</button>
   <button className="btn btn-warning">Reset</button>
   
   </div>
   </form>
   </div>
</div>
</div>
</div>
</div>
  );
};
export default REGISTER;
