import { Route, Routes, Navigate } from "react-router-dom";

import Login from "../components/login/Login";
import SignUp from "../components/login/SignUp";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default AuthRoutes;
