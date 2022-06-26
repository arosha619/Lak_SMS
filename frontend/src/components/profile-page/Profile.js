import React from 'react';
import { Avatar,Row, Col,Card,Typography, Space,Button,Image } from 'antd';

const { Text } = Typography;



function Profile() {
  
  return (
    
    <div>

      <div style={{paddingTop:"1vh",paddingLeft:"140vh"}}>
              <Button shape="round">
              <Avatar size={20} src="https://res.cloudinary.com/iplus/image/upload/v1647427398/new/4_q30zav.png" />
              Eshan Widisinghe
              </Button>
      </div>
      <h3 id="pagetitle">Profile</h3>
      <div style={{paddingLeft:"3vh",paddingBottom:"2vh"}}>
      <Card
    hoverable
    style={{ width: '140vh' }}
   
  >
      <Row>
      <Col span={5}>     
       <Avatar size={164} src="https://res.cloudinary.com/iplus/image/upload/v1647427398/new/4_q30zav.png" />
      </Col>
      <Col span={19}>
        <div style={{paddingTop:"5vh"}}>
      <h3 style={{color:"rgba(252, 198, 52, 0.904)"}}>Eshan Widisinghe</h3>
      <h5 style={{color:'#5579C6'}}>CEO of Coolbit</h5>   
      </div>
        </Col>
    </Row>
    <div style={{paddingTop:"5vh",paddingLeft:"2vh"}}>
    <Row>
      <Col span={12}>

      <Typography.Title type="secondary" level={4} style={{ margin: 0 }}>
      Basic Information  .......................................     
      </Typography.Title>
      <Row>
      <Col span={4}>
      <div  style={{paddingTop:"2vh"}}>

      <Space direction="vertical">
      <Typography.Title level={5} style={{ margin: 0 }}>
      First Name:  
      </Typography.Title>
      <Typography.Title level={5} style={{ margin: 0 }}>
      Last Name: 
      </Typography.Title><Typography.Title level={5} style={{ margin: 0 }}>
      Birth Day: 
      </Typography.Title>
     </Space>
    </div>
      </Col>

      <Col span={20}>
      <div  style={{paddingTop:"2vh"}} >

      <Space direction="vertical">
      <Typography.Title level={5} style={{ margin: 0,color:'#5579C6' }} >
      Eshan
      </Typography.Title>
      <Typography.Title level={5} style={{ margin: 0 ,color:'#5579C6'}}>
      Widisinghe
      </Typography.Title><Typography.Title level={5} style={{ margin: 0,color:'#5579C6' }}>
       98/12/23
      </Typography.Title>
     </Space>
     </div>
      </Col>
      </Row>
      

      </Col>

      <Col >
      <Typography.Title type="secondary" level={4} style={{ margin: 0 }}>
      Contact Information ..................................... 
      </Typography.Title>

      <Row>
      <Col span={5}>
      <div  style={{paddingTop:"2vh"}}>

      <Space direction="vertical">
      <Typography.Title level={5} style={{ margin: 0 }}>
      Phone:
      </Typography.Title>
      <Typography.Title level={5} style={{ margin: 0 }}>
      Address: 
      </Typography.Title><Typography.Title level={5} style={{ margin: 0 }}>
      E-mail:
      </Typography.Title>
      <div  style={{paddingTop:"4vh"}}>
      <Typography.Title level={5} style={{ margin: 0 }}>
      Company : 
      </Typography.Title>
      <Typography.Title level={5} style={{ margin: 0 }}>
      Address: 
      </Typography.Title>
      </div>
     </Space>
    </div>
      </Col>

      <Col span={19}>
      <div  style={{paddingTop:"2vh"}} >
      <Space direction="vertical">
      <Typography.Title level={5} style={{ margin: 0,color:'#5579C6' }} >
      +94 777 677 777   
      </Typography.Title>
      <Typography.Title level={5} style={{ margin: 0 ,color:'#5579C6'}}>
      Sri Lanka
      </Typography.Title><Typography.Title level={5} style={{ margin: 0,color:'#5579C6' }}>
      124@gmail.com
      </Typography.Title>
      <div  style={{paddingTop:"4vh"}}>
      <Typography.Title level={5} style={{ margin: 0,color:'#5579C6'  }}>
       bla bla (PVT) Ltd
      </Typography.Title>
      <Typography.Title level={5} style={{ margin: 0,color:'#5579C6'  }}>
       No 45/24, main street,Nittabuwa,Sri Lanka
      </Typography.Title>
      </div>
     </Space>
     </div>
      </Col>
      </Row>
      </Col>
    </Row>
    </div>
</Card>
      </div>
    </div>
  )
}

export default Profile;