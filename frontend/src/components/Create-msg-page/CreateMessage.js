import "./CreateMessage.css";
import React, { useState } from "react";
// import TextEditor from "./Texteditor";
import Header from "../header/Header";
import axios from "axios";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

export default function AddText() {
  const [text, setText] = useState("");

  function sendData(e) {
    e.preventDefault();

    const newMessage = {
      text,
    };

    if (!text) {
      alert("Please Provide values into each input field");
    } else
      axios
        .post("http://localhost:5000/message/add?user_id=1", newMessage)
        .then(() => {
          setText(" ");
          alert("Message Saved");
          console.log(newMessage);
        })
        .catch((err) => {
          alert(err);
        });
  }

  return (
    <div>
      <Header title="Create Message" />
      <div className="Box">
        <div>
          <input
            type="text"
            class="form-control"
            id="SMS"
            onChange={(e) => {
              setText(e.target.value);
            }}
            placeholder="Enter Message"
          ></input>
        </div>

        {/* <div className="editor">
        <TextEditor />
        
       
      </div> */}

        <div>
          <Link to="/CatogarizeMessage">
            <button type="Next" className="btnOne  btn-primary">
              Next{" "}
            </button>
          </Link>

          {/* <button  type="Next" className="btnOne  btn-primary" onClick={()=>{navigate("/CatogarizeMessage");sendData ();}}>save</button> */}

          <div>
            <button
              type="Save"
              className="btnTwo btn-primary"
              onClick={sendData}
            >
              Save
            </button>
          </div>
          {/* <div>
      <button type="Save" className="btnTwo btn-primary"  onClick={sendData}>Save</button>

     
      </div>  */}
        </div>
      </div>
    </div>
  );
}
