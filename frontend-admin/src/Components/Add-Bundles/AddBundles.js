import "../Add-Bundles/AddBundle.css";
import React, { useState } from "react";
import axios from "axios";
import { Button } from 'react-bootstrap';



function AddBundles() {
  
const [Bundle_name,setName]=useState("");
const [Price,setPrice]=useState("");
const [No_OF_SMS,setSMS]=useState("");

function sendData(e){
  e.preventDefault();

  const newBundle={
    Bundle_name,
    Price,
    No_OF_SMS
  }
  if (!Bundle_name || !Price || !No_OF_SMS) 
  {
    alert("Please Provide values into each input field");
  }

  else{
  axios.post("http://localhost:5000/bundle/add",newBundle).then(()=>{
    alert("bundle added!")
  }).catch((err)=>{
   alert(err)
  })}
  

}
  

  return (
    <div>
      
      <div className="title">
        <h5>Bundle Management</h5>
      </div>
      <div className="container" >
      {/* form for add bundle */}
      <div style={{ marginTop: "70px" }}>
        <div
          style={{
            margin: "auto",
            padding: "10px",
            textAlign: "center",
          }}
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Bundle Name"
            onChange={(e)=>{setName(e.target.value);}}
            
            
          />
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            name="price"
            placeholder="Bundle price"
            onChange={(e)=>{setPrice(e.target.value);}}
            
          />
          <label htmlFor="no_of_sms">no_of_sms</label>
          <input
            type="text"
            id="no_of_sms"
            name="no_of_sms"
            placeholder="no_of_sms"
            onChange={(e)=>{setSMS(e.target.value);}}
            
           
          /><br/>
           <Button id="savebutton" variant="warning" onClick={sendData} >Save</Button>
        </div>
      </div>
      </div>

      <div>
        
      </div>
    </div>
  );
}

export default AddBundles;
