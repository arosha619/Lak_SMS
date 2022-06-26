import React from 'react';
import { Avatar,Row, Col,Button   } from 'antd';

function Settings() {
  return (
    <div>
 <div style={{paddingTop:"1vh",paddingLeft:"140vh"}}>
              <Button shape="round">
              <Avatar size={20} src="https://res.cloudinary.com/iplus/image/upload/v1647427398/new/4_q30zav.png" />
              Eshan Widisinghe
              </Button>
      </div>
      <h3 id="pagetitle">Settings</h3>
      <div style={{paddingTop:"3vh",paddingLeft:"19vh",paddingRight:"6vh"}}>
      <center>

      <Row gutter={16}>
      <Col className="gutter-row" span={6}>
      <img src="https://res.cloudinary.com/iplus/image/upload/v1647438661/new/0privacy_policy_hn4fjb.png" style={{width:150}} />
        <Button  >Privacy & Seurity</Button>
      </Col>
      <Col className="gutter-row" span={7}>
      <img src="https://res.cloudinary.com/iplus/image/upload/v1647438661/new/about_us_sp7tlu.png" style={{width:200}} />
           <Button>About Us</Button>
      </Col>
    </Row>

        
    </center>
    </div>
    </div>
  )
}

export default Settings;