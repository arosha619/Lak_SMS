import React from "react";
import { Button } from "react-bootstrap";
import "../Add-Bundles/AddBundle.css";

function AddBundles() {
  return (
    <div>
      <div className="title">
        <h5>Bundle Management</h5>
      </div>
     

      <div >
      <table>
  <tr>
    <th></th>
    <th>Bundle Name</th>
    <th>Price</th>
    <th>No of SMS</th>
    <th>Delete</th>
  </tr>
  <tr>
    <td></td>
    <td>Free</td>
    <td>Rs.500</td>
    <td>100</td>
    <td><img id="delete" src={require('../images/delete.png')} alt="delete"/></td>
  </tr>
  <tr>
    <td></td>
    <td>Super</td>
    <td>RS.1000</td>
    <td>500</td>
    <td><img id="delete" src={require('../images/delete.png')} alt="delete"/></td>
  </tr>
  <tr>
    <td></td>
    <td>Blaster</td>
    <td>Rs.1500</td>
    <td>750</td>
    <td><img id="delete" src={require('../images/delete.png')} alt="delete"/></td>
  </tr>
  <tr>
    <td></td>
    <td>Buddy</td>
    <td>Rs.750</td>
    <td>250</td>
    <td><img id="delete" src={require('../images/delete.png')} alt="delete"/></td>
</tr>
</table>
      </div>
      <Button id="Addrow" variant="secondary">+Add row</Button>
    </div>
  );
}

export default AddBundles;
