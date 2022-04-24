import {React, useState } from "react";
import M from "materialize-css";
import  {Link,useNavigate}  from "react-router-dom";
const SignUp = () => {
  const history = useNavigate();

  const [firstname, setfirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyname, setCompanyname] = useState("");
  const [address, setAddress] = useState("");
  const [designation, setDesignation] = useState("");
  const [contactno, setContactno] = useState("");

  const postData = () => {
    fetch("http://localhost:6000/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: firstname,
        lasttname: lastname,
        dob: dob,
        password: password,
        email: email,
        companyname: companyname,
        address: address,
        designation: designation,
        contactno: contactno,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.err) {
          M.toast({ html: data.err, classes: "#f44336 red" });
        } else {
          M.toast({ html: data.msg, classes: "#00c853 green accent-4" });
          history.push("/signin");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="reg">
      <div className="reg-detail">
        <h2>Register</h2>
        <input
          type="text"
          placeholder="Enter name"
          value={firstname}
          onChange={(e) => setfirstname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        /> 
        <input
          type="text"
          placeholder="Enter date of birth"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Company name"
          value={companyname}
          onChange={(e) => setCompanyname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter designation"
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Contact No"
          value={contactno}
          onChange={(e) => setContactno(e.target.value)}
        />
        <button
          className="btn "
          onClick={() => postData()}
        >
          SignUp
        </button>
        <h6>
          <Link to="/">Already have an account ?</Link>
        </h6>
      </div>
    </div>
  );
};

export default SignUp;
