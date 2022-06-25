import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./SignUp.css";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";

const SignUp = (props) => {
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      dob: "",
      email: "",
      password: "",
      companyname: "",
      address: "",
      designation: "",
      contactno: "",
    },
    validationSchema: yup.object({
      firstname: yup.string().strict().trim().required("this field required"),

      lastname: yup.string().strict().trim().required("this field required"),

      dob: yup.string().strict().trim().required("this field required"),

      email: yup.string().strict().trim().required("this field required"),
      password: yup.string().strict().trim().required("this field required"),
      companyname: yup.string().strict().trim().required("this field required"),

      address: yup.string().strict().trim().required("this field required"),

      designation: yup.string().strict().trim().required("this field required"),

      contactno: yup.string().strict().trim().required("this field required"),
    }),
    onSubmit: (data) => {
      console.log(data);
      axios
        .post("http://localhost:5000/signup", data)
        .then((res) => {
          toast.success("Successfully Register");
          navigate("/");
        })
        .catch((err) => {
          toast.error(err.response.data);
        });
    },
  });
  

  return (
    

    <div className="mycard">
      <div className="card auth-card input-field">
        <h3 id="reg">Register</h3>

        <form autoComplete="off" onSubmit={formik.handleSubmit}>
          <input
            placeholder="Enter firstname"
            name="firstname"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstname}
          />
          {formik.errors.firstname ? (
            <div className="text-danger">{formik.errors.firstname}</div>
          ) : null}

          <input
            placeholder="Enter lastname"
            name="lastname"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastname}
          />
          {formik.errors.lastname ? (
            <div className="text-danger">{formik.errors.lastname}</div>
          ) : null}

          <input
            placeholder="Enter date of birth"
            type="text"
            onfocus="(this.type='date')"
            name="dob"
            onChange={formik.handleChange}
            value={formik.values.dob}
          />
          {formik.errors.dob ? (
            <div className="text-danger">{formik.errors.dob}</div>
          ) : null}

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

          <input
            placeholder="Enter Company name"
            name="companyname"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.companyname}
          />
          {formik.errors.companyname ? (
            <div className="text-danger">{formik.errors.companyname}</div>
          ) : null}

          <input
            placeholder="Enter Address"
            name="address"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.address}
          />
          {formik.errors.address ? (
            <div className="text-danger">{formik.errors.address}</div>
          ) : null}

          <input
            placeholder="Enter designation"
            name="designation"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.designation}
          />
          {formik.errors.designation ? (
            <div className="text-danger">{formik.errors.designation}</div>
          ) : null}

          <input
            placeholder="Enter Contact No"
            name="contactno"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.contactno}
          />
          {formik.errors.contactno ? (
            <div className="text-danger">{formik.errors.contactno}</div>
          ) : null}

          <button
            type="submit"
            className="btn waves-effect waves-light #ff3d00 dark blue accent-3"
          >
            SignUP
          </button>
        </form>
        <h6>
          <Link to="/">Already have an account ?</Link>
        </h6>
      </div>
    </div>
  );
};

export default SignUp;
