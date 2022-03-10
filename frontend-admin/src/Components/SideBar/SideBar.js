import React from 'react';
import '../SideBar/sidebar.css'
import { SideBarData } from '../SideBar/SideBarData';

function SideBar() {

   
  const navigate = (link) => {
   window.location.pathname = link;
  };

  return (
    <div className="sidebar">
      
      

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
              
              <div id="icon">{val.icon}</div> 
              
            </li>
            
          );
        })}
         
      </ul>
      
    </div>
  );
}

export default SideBar;