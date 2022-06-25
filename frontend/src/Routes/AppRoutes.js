import { Route, Routes, Navigate } from "react-router-dom";

import Home from "../components/home-page/Home";
import CreateMessage from "../components/Create-msg-page/CreateMessage";
import Profile from "../components/profile-page/Profile";
import Contacts from "../components/contacts-page/Contacts";
import Settings from "../components/settings-page/Settings";
import SmsBundles from "../components/sms-bundles-page/SmsBundles";
import ContactUs from "../components/contact-us-page/ContactUs";
import SideBar from "../components/sidebar/SideBar";
import Notfound from "../notfound";
import { ToastContainer } from "react-toastify";

const AppRoutes = () => {
  return (
    <div style={{ display: "flex" }}>
      <div className="column left" style={{ flex: 1 }}>
        <SideBar />
      </div>
      <div className="column right" style={{ flex: 4 }}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create-message" element={<CreateMessage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/SMS-Bundles" element={<SmsBundles />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        <ToastContainer />
      </div>
    </div>
  );
};

export default AppRoutes;
