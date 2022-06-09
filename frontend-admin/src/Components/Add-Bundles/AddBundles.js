import "../Add-Bundles/AddBundle.css";
import React, { useState,useEffect} from "react";
import axios from "axios";
import { Button } from 'react-bootstrap';



function AddBundles() {
  //add bundle data
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
    loadData();
    setName(" ");
    setPrice(" ");
    setSMS(" ");

    alert("bundle added!")
    
  }).catch((err)=>{
   alert(err)
  })} 
}
//fetch bundle data
   const [data, setData] = useState([]);
   
   const loadData=()=>{
    axios.get("http://localhost:5000/bundle/").then((res)=>{
      setData(res.data);
    }).catch((err)=>{
      alert(err.message)
    })}

  useEffect(() => { 
     loadData();
  }, []);
  
//delete
const onRemove = (id) => {
  axios.delete("http://localhost:5000/bundle/delete/" + id)
    .then(() => {
      loadData();
      alert("Successfully deleted");
    })
    .catch((err) => {
      alert(err.res.data);
    })
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

      {/* display data*/}


      <div style={{ marginTop: "100px" }}>
        <table className="styled-table">
          <thead>
            <tr>
              <th style={{ textAligan: "center" }}>No.</th>
              <th style={{ textAligan: "center" }}>Bundle Name</th>
              <th style={{ textAligan: "center" }}>Price</th>
              <th style={{ textAligan: "center" }}>No of SMS</th>
              <th style={{ textAligan: "center" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                  <tr key={item.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.Bundle_name}</td>
                  <td>{item.Price}</td>
                  <td>{item.No_OF_SMS}</td>
                  <td>
                   
                    <button
                      className="btn btn-Delete"
                      onClick={() => onRemove(item._id)}>
                        <img id="delete" src={require("../images/delete.png")} alt="delete"/>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default AddBundles;
