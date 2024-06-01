import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Opening from './pages/Opening';
import Employee_login from './pages/Employee/Employee_Admin_login';
import Emp_login from './pages/Employee/Emp_login';
import Customer_login from './pages/customer/Customer_login';
import Customer from './pages/customer/Customer';
import Transaction from './pages/customer/Transaction';
import Maketransaction from './pages/customer/Maketransaction';
import Beneficiary from './pages/customer/Beneficiary';
import Transaction_Confirm from './pages/customer/Transaction_Confirm';
import Beneficiary_Confirm from './pages/customer/Beneficiary_confirm';
import { AdminEmpProvider } from './component/AdminEmpContext';
import Add_Customer from './pages/Employee/Add_customer';
import Confirm from './pages/Employee/confirm';
import Add_Employee from './pages/Employee/Add_employee';
import Add_Branch from './pages/Employee/Add_branch';
import SwipeableComponent from './component/Swipable';

function App() {
  return (
    <AdminEmpProvider>
      <Router>
        <Routes>
          
          <Route path='/' element={<SwipeableComponent targetPage='/Transaction' previousPage='/'><Opening /></SwipeableComponent>} />
          <Route path='/EMlogin' element={<SwipeableComponent targetPage='/Transaction' previousPage='/' ><Employee_login /></SwipeableComponent>} />
          <Route path='/EAlogin' element={<SwipeableComponent><Emp_login /></SwipeableComponent>} />
          <Route path='/Clogin' element={<SwipeableComponent><Customer_login /></SwipeableComponent>} />
          <Route path='/Cus_page' element={<SwipeableComponent><Customer /></SwipeableComponent>} />
          <Route path='/Transaction' element={<SwipeableComponent><Transaction /></SwipeableComponent>} />
          <Route path='/Make' element={<SwipeableComponent><Maketransaction /></SwipeableComponent>} />
          <Route path='/Beneficiary' element={<SwipeableComponent><Beneficiary /></SwipeableComponent>} />
          <Route path='/TConfirm' element={<SwipeableComponent><Transaction_Confirm /></SwipeableComponent>} />
          <Route path='/BConfirm' element={<SwipeableComponent><Beneficiary_Confirm /></SwipeableComponent>} />
          <Route path='/Add_cus' element={<SwipeableComponent><Add_Customer/></SwipeableComponent>}/>
          <Route path='/Add_emp' element={<SwipeableComponent><Add_Employee/></SwipeableComponent>}/>
          <Route path='/Add_branch' element={<SwipeableComponent><Add_Branch/></SwipeableComponent>}/>
          <Route path='/Confirm' element={<SwipeableComponent><Confirm/></SwipeableComponent>}/>
          
        </Routes>
      </Router>
    </AdminEmpProvider>
  );
}

export default App;
