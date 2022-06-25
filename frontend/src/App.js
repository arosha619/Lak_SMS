import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import "react-toastify/dist/ReactToastify.css";
import { useAuthContext } from "./context/Authcontext/AuthContext";
import AppRoutes from "./Routes/AppRoutes";
import AuthRoutes from "./Routes/AuthRoutes";

function App() {
  const { user } = useAuthContext();
  console.log("user", user);

  return (
    <div className="App">
      <Router>{user ? <AppRoutes /> : <AuthRoutes />}</Router>
    </div>
  );
}

export default App;
