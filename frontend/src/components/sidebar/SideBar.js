import React from 'react';
import { SideBarData } from './SideBarData';
import './SideBar.css';
import { useAuthContext } from "../../context/Authcontext/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';


function SideBar() {
  const navigateLogOut = useNavigate();
  const { logout } = useAuthContext();
   
  const navigate = (link) => {
   window.location.pathname = link;
  };

  return (
    <div className="sidebar">
      
      <img id='logo' src={require('../images/logo.png')} alt='img'/>

      <ul className="sidebarlist">
        {SideBarData.map((val, key) => {
          return (
            <li
              className="sidebarlistitems"
              key={key}
              id={window.location.pathname  === val.link  ? "active" : ''}
              onClick={() => {
                navigate(val.link)
              }}
            >
              
              <div id="icon">{val.icon}</div>   <div id="title">{val.title}</div>
              
            </li>
            
          );
        })}
         
      </ul>
      

      <Button id='logout' className="btn waves-effect waves-light #ffb300 yellow accent-3" onClick={() => logout(navigateLogOut)} style={{color:"black"}}>logout</Button>
      

    </div>
  );
}

export default SideBar;
