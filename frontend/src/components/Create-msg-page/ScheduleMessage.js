import React ,{useState} from "react";
import "antd/dist/antd.css";
import "./ScheduleMessage.css"
import Header from "../header/Header";

import {DatePicker} from "antd";
import {TimePicker} from "antd";



function Pick(){
    // const[date,setDate]=useState();

    //  console.log("Date",date);
     return(
        <div><Header title="Schedule Message" />
  
         {/* <div className="main">
             <h1 >Select the Date{Date}</h1>
             <input type="date"  onChange={e=>setDate(e.target.value)} /> */}

             <div classname ="app"></div>
             
             <h4>Select the Date </h4><DatePicker/>
             <h4>Select the Time </h4><TimePicker/>

             <div>  <button type="Submit" className="btnFour btn-primary" >Submit  </button> </div>
               </div>
            //    </div>
     );
}
export default Pick; 