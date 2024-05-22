import './App.css'
import React from 'react'
import {BrowserRouter as Router,Routes,Route}  from 'react-router-dom'
import Opening from "./pages/Opening";
import Employee_login from './pages/Employee_login'
import Emp_login from './pages/Emp_login'
import Customer_login from './pages/Customer_login'
import Customer from './pages/Customer';
import Transaction from './pages/Transaction';
import Maketransaction from './pages/Maketransaction';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Opening/>}/>
          <Route path='/EMlogin' element={<Employee_login/>}/>
          <Route path='/EAlogin' element={<Emp_login/>}/>
          <Route path='/Clogin' element={<Customer_login/>}/>
          <Route path='/Cus_page' element={<Customer/>}/>
          <Route path='/Transaction' element={<Transaction/>}/>
          <Route path='/Make' element={<Maketransaction/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
