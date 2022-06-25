import React from "react";
import { Link } from "react-router-dom";
import GoogleLogin from "react-google-login";
import "./login.css";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuthContext } from "../../context/Authcontext/AuthContext";

//import facebookLogin from 'facebook-login';
//import { message } from 'antd';
//import { toast } from 'react-toastify';
//import  {useState}  from "react";

const clientId =
  "146026151331-clc6akmqeo9i9ldbbhrkvboice7269no.apps.googleusercontent.com";

const Login = (props) => {
  const { setUser } = useAuthContext();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup.string().strict().trim().required("this field required"),
      password: yup.string().strict().trim().required("this field required"),
    }),
    onSubmit: (data) => {
      console.log(data);
      axios
        .post("http://localhost:5000/login", data)
        .then((res) => {
          localStorage.setItem("auth", JSON.stringify(res.data));

          toast.success("Successfully Login 😍 ");

          console.log("login data", res.data);

          // navigate("/side");
          setUser(res.data);
        })
        .catch((err) => {
          toast.error(err.response.data);
        });
    },
  });

  return (
    <div className="login-container">
      <div className="eclips3"></div>
      <div className="eclips2"></div>
      <div className="eclips1"></div>
      <div className="login-right">
        <div className="logo">
          <img className="logo" src={require("../images/logo.png")} alt="img" />
        </div>
      </div>

      <div className="log-detail">
        <h2 className="loginhead">Login</h2>
        <div className="card auth-log input-field">
          <form autoComplete="off" onSubmit={formik.handleSubmit}>
            <input
              placeholder="Enter email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />

            {formik.errors.email ? (
              <div className="text-danger">{formik.errors.email}</div>
            ) : null}

            <input
              placeholder="Enter password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password ? (
              <div className="text-danger">{formik.errors.password}</div>
            ) : null}

            <h6>
              <Link to="/forgotpassword"> ForgotPassword</Link>
            </h6>

            <h6>
              Already do not have an account ?<Link to="/signup"> SignUp</Link>
            </h6>
            <button
              type="submit"
              className="btn waves-effect waves-light #ff3d00 yellow accent-3"
            >
              login
            </button>
          </form>

          <div>
            <GoogleLogin
              clientId={clientId}
              buttonText="Login with Google"
              // onSuccess={onSuccess}
              // onFailure={onFailure}
              cookiePolicy={"single_host_origin"}
              style={{ marginTop: "100px" }}
              isSignedIn={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
