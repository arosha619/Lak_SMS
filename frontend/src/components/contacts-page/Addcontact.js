import React, { useState,useEffect } from "react"
import axios from "axios";
import { Form, Card, Button } from "react-bootstrap";
import "./addContact.css"
import ColumnGroup from "antd/lib/table/ColumnGroup";

export default function Addcontact() {
  const [fname, setfname] = useState("");
  const [lname, selname] = useState("");
  const [number, setnumber] = useState("");
  const [gender, setgender] = useState("");
  const [address, setaddress] = useState("");
  const [dob, setdob] = useState("");
  const [formError, setFormError] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  function sendData(e) {
    // if (!(fname.trim().length > 2)) {
    //   alert("Invalid 'From' value!")
    //   return
    // } else if (!(lname.trim().length > 2)) {
    //   alert("Error")
    //   return
    // }
    e.preventDefault();

    const newContact = {
      fname,
      lname,
      number,
      gender,
      address,
      dob
    }
    // console.log(newContact)
    setFormError(validate(newContact))
    
    setIsSubmit(true)

    
  }

  const validate = (values)=>{
    const error = {};
    if(!values.fname){
      error.fname = "First Name is required!"
    }
    if(!values.lname){
      error.lname = "Last Name is required!"
    }
    if(!values.number){
      error.number = "Contact Number is required!"
    }
    if(!values.gender){
      error.gender = "Gender is required!"
    }
    if(!values.address){
      error.address = "Address is required!"
    }
    if(!values.dob){
      error.dob = "Date Of Birth is required!"
    }
    return error;

  }

  useEffect(()=>{
    
    const newContact = {
      fname,
      lname,
      number,
      gender,
      address,
      dob
    }
    if(Object.keys(formError).length===0 && isSubmit){
      axios.post("http://localhost:5000/contact/add", newContact).then(() => {
      ("Timetable added")
      setfname('');
      selname('');
      setnumber('');
      setgender('');
      setaddress('');
      setdob('');
      alert("Contact added Successfull");
      window.location = `/contacts`;


    }).catch((err) => {
      alert("error");
    })
    }
  },[isSubmit,formError])
  return (
    <div>
      <div style={{ paddingleft: "5vh", paddingBottom: "15vh", paddingTop: "15vh" }}>

        <Card style={{ width: '58rem' }}>
          <Card.Body>


            <Form onSubmit={sendData}>
              <div style={{ paddingBottom: "3vh", paddingTop: "1vh" }}>
                <Form.Label>First Name</Form.Label>
                <Form.Control placeholder="First Name"
                  onChange={(e) => setfname(e.target.value)} requried="true" />
                  <p>{formError.fname}</p>
              </div>
              <div style={{ paddingBottom: "3vh", paddingTop: "1vh" }}>

                <Form.Label>Last Name</Form.Label >
                <Form.Control placeholder="Last Name"
                  onChange={(e) => selname(e.target.value)} />
                  <p>{formError.lname}</p>
              </div>
              <div style={{ paddingBottom: "5vh", paddingTop: "1vh" }}>

                <Form.Label>Contact Number</Form.Label >
                <Form.Control placeholder="Contact Number"
                  onChange={(e) => setnumber(e.target.value)} />
                  <p>{formError.number}</p>
              </div>
              <Form.Label>Gender</Form.Label >
              <Form.Control placeholder="Gender"
                onChange={(e) => setgender(e.target.value)} />
                <p>{formError.gender}</p>

              <div style={{ paddingBottom: "5vh", paddingTop: "1vh" }}>

                <Form.Label>Address</Form.Label >
                <Form.Control placeholder="Address"
                  onChange={(e) => setaddress(e.target.value)} />
                  <p>{formError.address}</p>
              </div>
              <div style={{ paddingBottom: "5vh", paddingTop: "1vh" }}>

                <Form.Label>Date Of Birth</Form.Label >
                <Form.Control placeholder="Date Of Birth"
                  onChange={(e) => setdob(e.target.value)} />
                  <p>{formError.dob}</p>
              </div>
              <div style={{ paddingBottom: "5vh", paddingTop: "1vh" }}>


              </div>

              <Button variant="outline-success" type="submit">Add Contact</Button>


            </Form>

          </Card.Body>
        </Card>
      </div>

    </div>

  )
}
