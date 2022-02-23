import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home-page/Home";
import CreateMessage from "./components/Create-msg-page/CreateMessage";
import Profile from "./components/profile-page/Profile";
import Contacts from "./components/contacts-page/Contacts";
import Settings from "./components/settings-page/Settings";
import SmsBundles from "./components/sms-bundles-page/SmsBundles";
import ContactUs from "./components/contact-us-page/ContactUs";
import SideBar from "./components/sidebar/SideBar";


function App() {
  return (
    <div className="App">

      
      <div className="column left" >
      <SideBar />
      </div>
    
    
      <div className="column right">
      <Router>
          <Routes>
            <Route  path="/home"  element={<Home/>} />
            <Route path="/create-message"  element={<CreateMessage/>} />
            <Route path="/profile"  element={<Profile/>} />
            <Route path="/contacts"  element={<Contacts/>} />
            <Route path="/settings"  element={<Settings/>} />
            <Route path="/SMS-Bundles"  element={<SmsBundles/>} />
            <Route path="/contact-us"  element={<ContactUs/>} />
            
          </Routes>
        </Router>
      </div>
      
  
    </div>
    
  );
}

export default App;
