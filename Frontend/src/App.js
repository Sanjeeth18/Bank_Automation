import './App.css'
import React from 'react';
import {BrowserRouter as Router,Routes,Route}  from 'react-router-dom'
import Opening from "./components/Opening";
import Employee_login from './components/Employee_login'
import Emp_login from './components/Emp_login'
import Customer_login from './components/Customer_login'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Opening/>}/>
          <Route path='/EMlogin' element={<Employee_login/>}/>
          <Route path='/EAlogin' element={<Emp_login/>}/>
          <Route path='/Clogin' element={<Customer_login/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
