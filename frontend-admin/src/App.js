import React from 'react';
import './App.css';
import SideBar from './Components/SideBar/SideBar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddAdmin from '../src/Components/Add-Admin/AddAdmin';
import AddBundles from '../src/Components/Add-Bundles/AddBundles';
import ViewUsers from '../src/Components/User-View/UserView';
import Reports from '../src/Components/Reports/Reports';

function App() {
  return (
    <div className="App">
 
      <div className="header">
  
      <img className='logo1' src={require('../src/Components/images/logo.png')} alt='img'/>
      <h2 id='heading'>Admin Panel</h2>
        </div>
<div className="line"></div>

<div className='centerArea'>
     <div className="column left">
<SideBar/>
     </div>
     <div className="column right">
      <Router>
          <Routes>
            <Route  path="/Add-Admin"  element={<AddAdmin/>} />
            <Route path="/Add-Bundles"  element={<AddBundles/>} />
            <Route path="/View-Users"  element={<ViewUsers/>} />
            <Route path="/Reports"  element={<Reports/>} />
           
          </Routes>
        </Router>
      </div>
      </div>
    </div>
  );
}

export default App;
