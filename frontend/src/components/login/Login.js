import React from "react";
import  {useState}  from "react";
import { Link, useNavigate } from "react-router-dom";
import M from "materialize-css";
import "./login.css";

// import { GoogleLogin } from 'react-google-login';


const Login = () => {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const responseGoogle = (response) => {
  //   console.log(response);
  // }

  const postData = () => {
    fetch("/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: password,
        email: email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.err) {
          M.toast({ html: data.err, classes: "#f44336 red" });
        } else {
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));

          M.toast({
            html: "login successfully",
            classes: "#00c853 green accent-4",
          });
          history.push("/home");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="login-container">
      
        <div className="eclips3"></div>
        <div className="eclips2"></div>
        <div className="eclips1"></div>
        <div className="login-right">
        <div className="logo">
        <img id='logo' src={require('../images/logo.png')} alt='img'/>
        </div>
        
      </div>

      <div className="log-detail">
        <h2>LAK SMS</h2>
        
        <input
          type="text"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <h6>
        Already do not have an account ?<Link to="/signup" > SignUp</Link>
        </h6>
        <button
          className="btn"
          onClick={() => {
            postData();
          }}
        >
          Login
        </button>

         {/* <div className="google_login">
        <GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />

        </div>  */}

       </div>
     
      </div>  
    
  );
  
};

export default Login;















 