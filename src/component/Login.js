import React from "react";
const LOGIN = () => {
  return (
    <div className="container text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card mt-3">
              <div
                className="card-header text-clack"
                style={{ backgroundColor: "#ffff6f" }}
              >
                <h3>Login</h3>
              </div>
              <div className="card-body">
                <form action="#!">
                  <div className="form-group">
                    <label>Email address</label>
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      name="password"
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                    />
                  </div>
                  <a href="#!" className="text-black">
                    If not register click here!!
                  </a>
                  <div className="container text-center mt-2">
                    <button type="submit" className="btn btn-success  mr-2">
                      Submit
                    </button>
                    <button type="reset" className="btn btn-warning ">
                      Reset
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
    
  );
};
export default LOGIN;
