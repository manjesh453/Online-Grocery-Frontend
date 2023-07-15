import axios from "axios";
import React, { useEffect, useState } from "react";

function Category() {
  const [category , setCategory]= useState([]);

  useEffect(()=>{
axios.get('http://localhost:8080/api/category/').then(res=>{
  console.log(res)
  setCategory(res.data)
}).catch(error=>{
  console.log(error)
})
  },[])


  const edit=(id)=>{
console.log("edit"+id)

  }
  const remove=(id)=>{

// alert("deleted sucessfully");

    console.log("delete"+id)

  }

  const add=async(e)=>{
    e.preventDefault();
    const categoryName = e.target.newcategory.value;
   
  await  axios.post(`http://localhost:8080/api/category/`,categoryName,{
headers:{
  'Content-Type': 'application/json',
  'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyYXlhbWFqaGltYW5qZXNoNDJAZ21haWwuY29tIiwiZXhwIjoxNjg5NDMzODI4LCJpYXQiOjE2ODk0MTU4Mjh9.Jndet3Y_MD_ybMLE2R6MnzVzif2gkqVln0SpZPaRZic'
}
    }).then(res=>{
      console.log(res)

      
    }).catch(error=>{
      console.log(error)
    })

  }
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
         {
          category.map((data,index)=>(
            <tr key={index}>
            <th scope="row">{data.categoryId}</th>
            <td>{data.categoryName}</td>
            <td>
              <button className="btn btn-warning mr-2"data-toggle="modal"
          data-target="#exampleModal1" onClick={()=>{edit(data.categoryId)}}>Update</button>
              <button className="btn btn-danger" onClick={() => remove(data.categoryId)}>Delete</button>
            </td>
          </tr>
          ))
         }
         


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
                <form onSubmit={add}>
                  <div className="form-group">
                    <label for="Addcategory">Enter New Category</label>
                    <input
                      type="text"
                      className="form-control"
                      name="newcategory"
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
                <form>
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
