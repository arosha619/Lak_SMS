import React from "react";
import "./SMSBundles.css";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import {useState,useEffect} from 'react';
import axios from 'axios';
<<<<<<< HEAD
import Header from "../header/Header";
=======
import { PayPalButton } from "react-paypal-button-v2";
import Modal from 'react-bootstrap/Modal';
>>>>>>> b18c23f6b8dea75e6782cf9f5fc8b5cbd67cbfac


function SmsBundles() {
//model
const [showModel, setShowModel] = useState(false);

const handleClose = () => setShowModel(false);
const handleShow = () => setShowModel(true);



//fetch bundle data
const [data, setData] = useState([]);
const [bundleName, setBundleName] = useState([]);
const [bundleprice, setBundlePrice] = useState([]);
const [sms, setSMS] = useState([]);


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

const openModal = (name, price,no_of_sms) => {
  handleShow();
  setBundleName(name);
  setBundlePrice(price);
  setSMS(no_of_sms);
}

//payments

const payments =(payer)=>{
const d = new Date();
const newpayment={
  payername:payer,
  bundleName,
  bundleprice,
  sms,
  d
}
console.log(newpayment);
axios.post("http://localhost:5000/payment/add",newpayment).then(()=>{

  }).catch((err)=>{
   alert(err)
  })


}
  return (
<<<<<<< HEAD
    <div><Header title="SMS Bundles" />
    
      
=======
    
    <div>
      <h3 id="pagetitle">SMS Bundles</h3>
>>>>>>> b18c23f6b8dea75e6782cf9f5fc8b5cbd67cbfac
      
      
      
      <div className="container">
        {data.map((item)=>(
          <Card style={{ width: "18rem", height: "27rem" }}>
          <Card.Body className="cardbody">
            <div className="card-header">
              <Card.Title className="cardtitle" id="BundleName" >{item.Bundle_name}</Card.Title>
            </div>
            <Card.Text className="cardtext">
              <h6 >Number of SMS</h6>
             <h5>{item.No_OF_SMS}</h5> 
            </Card.Text>
            <Card.Text className="cardtext">
              <h6>price</h6>
              <h5>{item.Price}.USD</h5> 
            </Card.Text>
             
            <Button id="btn" onClick={()=>openModal(item.Bundle_name, item.Price,item.No_OF_SMS)} >BUY</Button>{" "}
          </Card.Body>
        </Card>
        
        ))}


        <div>
        
        <Modal  show={showModel} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
        <Modal.Title   >Payment methods</Modal.Title>
       
          
          
        </Modal.Header>
        <Modal.Body >Bundle Name :{bundleName} | Price :{bundleprice} | No oF SMS :{sms}  </Modal.Body>
        
        
        
          <PayPalButton
          options={{
            clientId: "AW5W56RAp0ijf9MLTQMkfPKjqdVOTKsnaRS2PxlnNMOnEG4KaFgQyz7-V9xUlmxoKhBrNhe5Who3NLSB",
            
          }}
        amount={bundleprice}
        shippingPreference="NO_SHIPPING"
        // default is "GET_FROM_FILE"
        onSuccess={(details, data) => {
          
          
          payments(details.payer.name.given_name);
          alert("Transaction completed by " + details.payer.name.given_name);
         
        }}
        
      />
        <Modal.Footer>

 
        </Modal.Footer>
        
      
      </Modal>
      
        </div>
       

       
      
  </div>
       
  
    </div>
    
    
    
  );
}

export default SmsBundles;
