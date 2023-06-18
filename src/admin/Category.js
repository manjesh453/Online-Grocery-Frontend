import React from "react";

function Category() {
  return (
    <div>
      <table className="table mt-1 mx-3">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Category Name</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Fruits</td>
            <td>
              <button className="btn btn-warning mr-2"data-toggle="modal"
          data-target="#exampleModal1">Update</button>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Bakery</td>
            <td>
              <button className="btn btn-warning mr-2" data-toggle="modal"
          data-target="#exampleModal1">Update</button>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Drinks</td>
            <td>
              <button className="btn btn-warning mr-2" data-toggle="modal"
          data-target="#exampleModal1">Update</button>
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
          Add Category
        </button>
      </div>

      {/* Model for add category */}

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
                  Add Category
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
                <form >
                  <div className="form-group">
                    <label for="Addcategory">Enter New Category</label>
                    <input
                      type="text"
                      className="form-control"
                      id="addcategory"
                    />
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

          {/* Model for update */}

          <div>
        <div
          className="modal fade"
          id="exampleModal1"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                 Update Category
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
                <form >
                  <div className="form-group">
                    <label for="Addcategory">Enter Update Category Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="addcategory"
                    />
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
export default Category;
