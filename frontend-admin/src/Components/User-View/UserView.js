import React from 'react';
import { useState,useEffect} from "react";
import axios from "axios";

function UserView() {
  const [data, setData] = useState([]);
   
   const loadData=()=>{
    axios.get("http://localhost:5000/userview/userview").then((res)=>{
      setData(res.data);
    }).catch((err)=>{
      alert(err.message)
    })}

  useEffect(() => { 
     loadData();
  }, []);
  
  return (
    
    <div style={{ marginTop: "100px" }}>
      <h3>User View</h3>
    <table className="styled-table">

      <thead>
        <tr>
          <th style={{ textAligan: "center" }}>No.</th>
          <th style={{ textAligan: "center" }}>First Name</th>
          <th style={{ textAligan: "center" }}>Last Name</th>
          <th style={{ textAligan: "center" }}>Company Name</th>
          <th style={{ textAligan: "center" }}>Bundle Name</th>
          <th style={{ textAligan: "center" }}>Remaining SMS</th>
          <th style={{ textAligan: "center" }}>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          return (
              <tr key={item.id}>
              <th scope="row">{index + 1}</th>
              <td>{item.firstname}</td>
              <td>{item.lastname}</td>
              <td>{item.companyname}</td>
              <td>{item.No_OF_SMS}</td>
              
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>

  )
}

export default UserView;