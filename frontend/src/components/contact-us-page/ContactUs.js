import React from 'react';
import { Avatar,Row, Col,Button,Image   } from 'antd';

function ContactUs() {
  return (
    <div>
<div style={{paddingTop:"1vh",paddingLeft:"140vh"}}>
              <Button shape="round">
              <Avatar size={20} src="https://res.cloudinary.com/iplus/image/upload/v1647427398/new/4_q30zav.png" />
              Eshan Widisinghe
              </Button>
      </div>
      <h3 id="pagetitle">Contact Us</h3>
      <div style={{paddingTop:"1vh",paddingLeft:"19vh",paddingRight:"6vh"}}>
      <center>

      <Row gutter={16}>
      <Col className="gutter-row" span={6}>
      <img src={"https://res.cloudinary.com/iplus/image/upload/v1647443172/new/location_iz06rb.png"} style={{width:100}} />
      <h4>Address</h4>
      <p>No 11/2A,Main road,Narahenpita,Colombo 05</p>
      </Col>
          <Col className="gutter-row" span={7}>
          <div style={{paddingLeft:"10vh"}}>

          <img src={"https://res.cloudinary.com/iplus/image/upload/v1647443172/new/phone_qfkl1o.png"} style={{width:100}} />
          <h4>Telephone</h4>
          <p>Hotline [+94]766-321-084</p>
          <p>Mobile [+94]716-351-064</p>

          </div>

      </Col>
    </Row>  
    </center>

    </div>
   
      <div style={{paddingLeft:"49vh",paddingTop:"2vh"}} >
      <h2>Follow Us On</h2>
      <img src={"https://res.cloudinary.com/iplus/image/upload/v1647443172/new/Facebook-Logo-Square-768x768_lzqmwe.png"} style={{width:100}} />
      <img src={"https://res.cloudinary.com/iplus/image/upload/v1647443172/new/twitter_vunbg1.png"} style={{width:100}} />

      </div>
     


    </div>
  )
}

export default ContactUs;