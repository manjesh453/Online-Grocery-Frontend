import React from "react";

function Subcategory() {
  return (
    <div>
      <table className="table mt-1 mx-3">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">SubCategory</th>
            <th scope="col">Category</th>

            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Seasonal</td>
            <td>Fruits</td>
            <td>
              <button className="btn btn-warning mr-2">Update</button>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Cake</td>
            <td>Bakery</td>
            <td>
              <button className="btn btn-warning mr-2">Update</button>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Soft Drinks</td>
            <td>Drinks</td>
            <td>
              <button className="btn btn-warning mr-2">Update</button>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="text-center">
        <button
          className="btn-success"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Add Subcategory
        </button>
      </div>

      {/* Model */}

      <div>
        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add Subcategory
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {/* form to Addcategory */}
                <form>
                  <div className="form-group">
                    <label for="Addsubcategory">Enter New Subcategory</label>
                    <input
                      type="text"
                      className="form-control"
                      id="addsubcategory"
                    />

                    <div class="input-group mb-3 mt-2">
                      <div class="input-group-prepend">
                        <label
                          class="input-group-text"
                          for="inputGroupSelect01"
                        >
                          Category
                        </label>
                      </div>
                      <select class="custom-select" id="inputGroupSelect01">
                        <option selected>Choose...</option>
                        <option value="1">Fruits</option>
                        <option value="2">Bakery</option>
                        <option value="3">Drinks</option>
                      </select>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-success">
                    Submit
                  </button>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Subcategory;
