import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./login.css";
import { message } from "antd";

//import { toast } from 'react-toastify';

const ForgotPaswword = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");

  const postData = () => {
    fetch("http://localhost:5000/  ", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.err) {
          message.error(data.err);
        } else {
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));

          message.success("Reset password success ");
          history.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="login-container">
      <div className="log-detail">
        <h2>Reset Password</h2>
        <div className="card auth-log input-field">
          <input
            type="text"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            className="btn waves-effect waves-light #ff3d00 dark blue accent-3"
            onClick={() => {
              postData();
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPaswword;
