import React from 'react'
import customer from './images/customer.jpg'
import employee from './images/employee.jpg'
import background from "./images/background.jpg"
import branch from './images/bramch.png'
import './Employee_login.css'
import { useNavigate } from 'react-router-dom'

function Employee_login() {

    const navigate=useNavigate();

  return (
    <>
        <div className='Epadding' style={{backgroundImage:`url(${background})`,
                    backgroundSize:'cover',
                    backgroundRepeat:'no-repeat',
                    paddingTop: 0
            }}>
            <h1><b>Employee/Admin Login</b></h1>
            <div className='Econtainer'>
                <div className='Econtainer-1'>
                    <div className='Econtainer-2'>
                        <div  className='ECtexts'>
                            Customer
                        </div>
                        <div>
                            <img  src={customer} alt='Customer' className='Cimage-1'/>
                        </div>
                    </div>
                    <div className='Econtainer-3'>
                        <div className='EEtexts'>
                                Employee
                        </div>
                        <div >
                            <img src={employee} alt='Employee' className='Eimage-1'/>
                        </div>           
                    </div>
                    <div className='Econtainer-4'>
                        <div className='EBtexts'>
                                Branch
                        </div>
                        <div >
                            <img src={branch} alt='Employee' className='Bimage-1'/>
                        </div>           
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Employee_login