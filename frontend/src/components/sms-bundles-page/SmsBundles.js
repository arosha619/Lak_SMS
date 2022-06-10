import React from "react";
import "./SMSBundles.css";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import {useState,useEffect} from 'react';
import axios from 'axios';


function SmsBundles() {
  
//fetch bundle data
const [data, setData] = useState([]);
const loadData=()=>{
  axios.get("http://localhost:5000/bundle/").then((res)=>{
    setData(res.data);
    console.log(res.data)
  }).catch((err)=>{
    alert(err.message)
  })}

useEffect(() => { 
   loadData();
}, []);

  return (
    <div>
      <h3 id="pagetitle">SMS Bundles</h3>
      
      
      <div className="container">
        {data.map((item)=>(
          <Card style={{ width: "18rem", height: "25rem" }}>
          <Card.Body className="cardbody">
            <div className="card-header">
              <Card.Title className="cardtitle">{item.Bundle_name}</Card.Title>
            </div>
            <Card.Text className="cardtext">
              <h6 >Number of SMS</h6>
             <h5>{item.No_OF_SMS}</h5> 
            </Card.Text>
            <Card.Text className="cardtext">
              <h6>price</h6>
              <h5>Rs.{item.Price}</h5> 
            </Card.Text>
            <Button id="btn"  >BUY</Button>{" "}
          </Card.Body>
        </Card>
        ))}
       

       
      
  </div>
       
  
    </div>
  );
}

export default SmsBundles;
