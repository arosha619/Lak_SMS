import React, { useState, useEffect } from "react";
import { Avatar,Button,Divider  } from 'antd';
import { Table, Modal, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import { UserAddOutlined,ImportOutlined  } from '@ant-design/icons';
import axios from "axios";

function Contacts(props) {
  const [contact, setContact] = useState([]);
  const [_id, setid] = useState(" ");
  const [fname, setfname] = useState(" ");
  const [lname, selname] = useState(" ");
  const [number, setnumber] = useState(" ");
  const [gender, setgender] = useState(" ");
  const [address, setaddress] = useState(" ");
  const [dob, setdob] = useState(" ");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (_id,fname, lname, number, gender,address,dob) => {
    setShow(true);
    setid(_id);
    setfname(fname);
    selname(lname);
    setnumber(number);
    setgender(gender);
    setaddress(address);
    setdob(dob);
  }

  function onDelete(_id){
    console.log(_id);
    axios.delete("http://localhost:5000/contact/delete/"+_id ).then((res) =>{
       alert('Deleted Successfully'); 
       window.location.reload();
   }).catch((err) => {
       alert(err.message);
   })
  }

  const updateUser = (e) => {
    e.preventDefault();
    update(e)
  };

function update(){
  const newContact ={
    _id,
    fname,
    lname,
    number,
    gender,
    address,
    dob

  }

  axios.put("http://localhost:5000/contact/update/"+_id, newContact).then(()=>{
    setfname('');
    selname('');
    setnumber('');
    setgender('');
    setaddress('');
    setdob('');

    alert("Updated Successfully");
    window.location.reload();
  }).catch((err=>{
    alert(err)
  }))

 
}

  useEffect(() =>{

    function getcontact(){
          axios.get("http://localhost:5000/contact/").then((res) =>{
            setContact(res.data);
             console.log(res.data);
          }).catch((err) => {
              alert(err.message);
          })
    }
    getcontact();
     },[])

  return (
    <div>
  <div style={{paddingTop:"1vh",paddingLeft:"140vh"}}>
              <Button shape="round">
              <Avatar size={20} src="https://res.cloudinary.com/iplus/image/upload/v1647427398/new/4_q30zav.png" />
              Eshan Widisinghe
              </Button>
      </div>
      <h3 id="pagetitle">Contacts</h3>
      <div style={{paddingTop:"1vh",paddingLeft:"100vh"}}>
     
      <Link to="/addcontact" style={{ color: "white", textDecoration: "none" }}>
      <Button shape="round" icon={<UserAddOutlined />}>Add a contact</Button>{" "}
      </Link>

      <Button shape="round" icon={<ImportOutlined /> }>Import contact</Button>
      </div>
      <Divider/>
      <div style={{paddingRight:"3vh",paddingLeft:"3vh"}}>
      <Table striped bordered hover>

  <thead>
    <tr>
      <th></th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Number</th>
      <th>Gender</th>
      <th>Address</th>
      <th>DOB</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    {contact.map((Contact)=>{
      return(
        <tr key={Contact._id}>
       <td></td>   
      <td>{Contact.fname}</td>
      <td>{Contact.lname}</td>
      <td>{Contact.number}</td>
      <td>{Contact.gender}</td>
      <td>{Contact.address}</td>
      <td>{Contact.dob.split("T")[0]}</td>
      <td>
        <Button variant="outline-success" onClick={()=>handleShow(Contact._id,Contact.fname,Contact.lname,Contact.number,Contact.gender,Contact.address,Contact.dob)} >Edit</Button>
    </td>

    <td>
    <Button variant="outline-danger" onClick={()=>onDelete(Contact._id)}>Delete</Button>

    </td>
        </tr>
      )




    })}

  </tbody>
</Table>   




<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form  >
  <div style={{paddingBottom:"3vh",paddingTop:"1vh"}}> 
  <Form.Label>First Name</Form.Label>
  <Form.Control placeholder="First Name"
                value={fname}
  onChange={(e) => setfname(e.target.value)} required />
      </div>
      <div style={{paddingBottom:"3vh",paddingTop:"1vh"}}> 

  <Form.Label>Last Name</Form.Label >
        <Form.Control placeholder="Last Name" 
        value={lname}
   onChange={(e) => selname(e.target.value)} />
           </div>
           <div style={{paddingBottom:"5vh",paddingTop:"1vh"}}> 

           <Form.Label>Contact Number</Form.Label >
        <Form.Control placeholder="Contact Number" 
                value={number}
   onChange={(e) => setnumber(e.target.value)} />
   

<div style={{paddingBottom:"3vh",paddingTop:"1vh"}}> 

  <Form.Label>Gender</Form.Label>
  <Form.Control placeholder="Gender"
                value={gender}
  onChange={(e) => setgender(e.target.value)} required />
      </div>
      <div style={{paddingBottom:"3vh",paddingTop:"1vh"}}> 

      
  <Form.Label>Address</Form.Label>
  <Form.Control placeholder="Address"
                value={address}
  onChange={(e) => setaddress(e.target.value)} required />
      </div>
      
 

  <Form.Label>Date of Birth</Form.Label>
  <Form.Control placeholder="Date of Birth"
                value={dob}
  onChange={(e) => setdob.split("T")[0](e.target.value)} required />
      </div>
    

           
  
     <Button variant="outline-success" type="submit"  onClick={(e) => updateUser(e)}>Update Details</Button>
    
  </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
</div>

    </div>
    
  )
}

export default Contacts;