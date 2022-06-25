import Header from "../header/Header";
import "./CatogarizeMsg.css";
import React,{useState} from "react";
import { Link } from "react-router-dom";


function CatogarizeMessage() {
  const[selects,setSelects] =useState();
  const [Gender, setGender] = useState("");
  const [Location, setLocation] = useState("");
  const [Age, setAge] = useState("");


 
  return (
    
    <div>
    <Header title="Categorising Message" />
    <div>Gender
     
      <h1>{Gender}</h1>
      <select value={Gender} onchange={e=>setGender(e.target.value)}>
     
        <option></option>
        <option>Male</option>
        <option>Female</option>

    </select>

    


    </div>




     
   
     <div>Location 
     <h1>{Location}</h1>
     <select value={selects}  onchange={e=>setLocation(e.target.value)}>
      <option></option>
       <option>Colombo</option>
       <option>Gampaha</option>
       <option>Kalutara</option>
       <option>Kandy</option>
       <option>Matale</option>
       <option>Nuwara Eliya</option>
       <option>Galle</option>
       <option>Matara</option>
       <option>Hambantota</option>
       <option>Jaffna</option>
       <option>Kilinochchi</option>
       <option>Mannar</option>
       <option>Vavuniya</option>
       <option>Mullativu</option>
       <option>Battocaola</option>
       <option>Ampara</option>
       <option>Trincomalee</option>
       <option>Kurunegala</option>
       <option>Puttalam</option>
       <option>Anuradhapura</option>
       <option>Polonnaruwa</option>
       <option>Badulla</option>
       <option>Monegarala</option>
       <option>Ratnapura</option>
       <option>Kegalle</option>

       </select>
       </div>

       <div className="Age">

           <div><p>Age</p></div>
       <div><input type ="text" className="EnterAge" id="SMS" 
 placeholder="Enter Age"  onChange={(e) => setAge(e.target.value)} ></input></div>
 
     



    </div>

    <h5>Gender: {Gender}</h5>
     <h5>Location: {Location}</h5>
     <h5>Age: {Age}</h5>
  
       
    
    <Link to="/ScheduleMessage">
    {/* <Button id="nextbutton1" variant="warning" onClick={sendData} >Next</Button> */}
      
    <button type="Next" className="btnThree  btn-primary" >Next  </button> 
        </Link>
      
  
     
       
 
   </div>
  
  )
}

export default  CatogarizeMessage;