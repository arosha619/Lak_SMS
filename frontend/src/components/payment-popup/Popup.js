import React from 'react';
import '../payment-popup/popup.css';

function Popup(props) {
  return (props.trigger) ? (
    <div className='popup' >
      <div className='popup-inner' >
        <button className='close-btn' onClick={()=> props.setTrigger(false)} ><img id='close' src={require('../images/remove.png')} alt='img'/></button>
        
        {props.children}
      </div>
      </div>
  ) : ""; 
}

export default Popup;