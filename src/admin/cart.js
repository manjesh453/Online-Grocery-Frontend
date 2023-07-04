import React from "react";

const cart = () => {
  return (
    <div>
      <table className="table mt-1 mx-3">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">ProductName</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Total Amount</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Apple</td>
            <td>5</td>
            <td>400</td>
            <td>2000</td>
            <td>
                <button className="btn btn-warning mr-2">Update</button>
                <button className="btn btn-danger">Delete</button> 
            </td>
          </tr>
          <tr>
          <th scope="row">2</th>
            <td>Banana</td>
            <td>2</td>
            <td>100</td>
            <td>200</td>
            <td>
                <button className="btn btn-warning mr-2">Update</button>
                <button className="btn btn-danger">Delete</button> 
            </td>
          </tr>
          <tr>
          <th scope="row">3</th>
            <td>Grapes</td>
            <td>4</td>
            <td>300</td>
            <td>1200</td>
            <td>
                <button className="btn btn-warning mr-2">Update</button>
                <button className="btn btn-danger">Delete</button> 
            </td>
          </tr>
          <tr>
          <th scope="row" colSpan={5} className="text-right" style={{fontStyle:'italic',fontWeight:'bold'}}>ToTal:</th>
          <td className="text-center" style={{fontStyle:'italic',fontWeight:'bold',fontSize:'25px'}}>34637 /-</td>
          </tr>
        </tbody>
      </table>
      <div className="text-center">
        <button className="btn-success" style={{color:'black'}}>Check Out</button>
      </div>
    </div>
  );
};
export default cart;
