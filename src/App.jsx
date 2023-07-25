import React from 'react';
import Login from '../src/components/Login'
import Dashboard from '../src/components/Dashboard';
import Navbar from '../src/components/Navbar'
import { BrowserRouter as Router,Routes, Route, BrowserRouter} from "react-router-dom";
import './index.css';

function App() {
  return (
  
   
        
      <><Navbar /><Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Dashboard" element={<Dashboard />} />


    </Routes></>
 
  
   
  );
}

export default App;
