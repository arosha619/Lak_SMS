import React from "react";
import { useState } from "react";
import "./SMSBundles.css";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Popup from "../payment-popup/Popup";
import {Form} from "react-bootstrap"
import {Row} from "react-bootstrap"
import {Col} from "react-bootstrap"

function SmsBundles() {
  const[ButtonPopup,setButtonPopup] =useState(false);
  return (
    <div>
      <h3 id="pagetitle">SMS Bundles</h3>
      

      <div className="container">
        <Card style={{ width: "18rem", height: "25rem" }}>
          <Card.Body className="cardbody">
            <div className="card-header">
              <Card.Title className="cardtitle">Free</Card.Title>
            </div>
            <Card.Text className="cardtext">
              <h6>Number of SMS</h6>
              500 SMS
            </Card.Text>
            <Card.Text className="cardtext">
              <h6>price</h6>
              Rs.100
            </Card.Text>
            <Button id="btn" onClick={()=>setButtonPopup(true) } >BUY</Button>{" "}
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", height: "25rem" }}>
          <Card.Body className="cardbody">
            <div className="card-header">
              <Card.Title className="cardtitle">Buddy</Card.Title>
            </div>
            <Card.Text className="cardtext">
              <h6>Number of SMS</h6>
              500 SMS
            </Card.Text>
            <Card.Text className="cardtext">
              <h6>price</h6>
              Rs.100
            </Card.Text>
            <Button id="btn" onClick={()=>setButtonPopup(true) } >BUY</Button>{" "}
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", height: "25rem" }}>
          <Card.Body className="cardbody">
            <div className="card-header">
              <Card.Title className="cardtitle">Super</Card.Title>
            </div>
            <Card.Text className="cardtext">
              <h6>Number of SMS</h6>
              500 SMS
            </Card.Text>
            <Card.Text className="cardtext">
              <h6>price</h6>
              Rs.100
            </Card.Text>
            <Button id="btn" onClick={()=>setButtonPopup(true) } >BUY</Button>{" "}
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", height: "25rem" }}>
          <Card.Body className="cardbody">
            <div className="card-header">
              <Card.Title className="cardtitle">Blaster</Card.Title>
            </div>
            <Card.Text className="cardtext">
              <h6>Number of SMS</h6>
              500 SMS
            </Card.Text>
            <Card.Text className="cardtext">
              <h6>price</h6>
              Rs.100
            </Card.Text>
            <Button id="btn" onClick={()=>setButtonPopup(true) } >BUY</Button>{" "}
          </Card.Body>
        </Card>
  </div>
  <Popup trigger={ButtonPopup} setTrigger={ setButtonPopup} >
        <h1>Payments</h1>
<br></br>
        <Form>
  <Row className="mb-3">
    <Form.Group as={Col} >
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" placeholder="Enter FirstName" />
    </Form.Group>

    <Form.Group as={Col} >
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" placeholder="Enter LastName" />
    </Form.Group>

  </Row>
  <Row className="mb-3">
  <Form.Group as={Col} >
      <Form.Label>Bundle Name</Form.Label>
      <Form.Control type="text"  />
    </Form.Group>
   
  <Form.Group as={Col} >
      <Form.Label>Bundle Price</Form.Label>
      <Form.Control type="text"  />
    </Form.Group>   

    </Row>

  <Row className="mb-3">
  <Form.Group as={Col} >
      <Form.Label>Card Number</Form.Label>
      <Form.Control type="text" placeholder="Enter Card Number" />
    </Form.Group>
   
  <Form.Group as={Col} >
      <Form.Label>Security No</Form.Label>
      <Form.Control type="password" placeholder="xxx" />
    </Form.Group>   

    </Row>

  <br></br>
  <Button id="btn-2" type="submit">Confirm & Pay</Button>
</Form>

        </Popup>
    </div>
  );
}

export default SmsBundles;
