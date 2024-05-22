import './App.css'
import React from 'react'
import {BrowserRouter as Router,Routes,Route}  from 'react-router-dom'
import Opening from "./pages/Opening";
import Employee_login from './pages/Employee/Employee_login'
import Emp_login from './pages/Employee/Emp_login'
import Customer_login from './pages/customer/Customer_login'
import Customer from './pages/customer/Customer';
import Transaction from './pages/customer/Transaction';
import Maketransaction from './pages/customer/Maketransaction';
import Beneficiary from './pages/customer/Beneficiary';
import Transaction_Confirm from './pages/customer/Transaction_Confirm';
import Beneficiary_Confirm from './pages/customer/Beneficiary_confirm';

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
          <Route path='/Beneficiary' element={<Beneficiary/>}/>
          <Route path='/TConfirm' element={<Transaction_Confirm/>}/>
          <Route path='/BConfirm' element={<Beneficiary_Confirm/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
