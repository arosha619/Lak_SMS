import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./components/login/Login";
import SignUp from "./components/login/SignUp";

function Full() {
  return (
    <div className="full">
      <div className="log">
        <Router>
          <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/signup" element={<SignUp/>} />
          </Routes>
        </Router>
      </div>

      
    </div>
  );
}

export default Full;
