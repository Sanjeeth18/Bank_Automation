import React from 'react'
import employee from './images/employee.jpg'
import background from "./images/background.jpg"
import './Emp_login.css'

function Emp_login() {


  return (
    <>
        <div className='Empadding' style={{backgroundImage:`url(${background})`,
                    backgroundSize:'cover',
                    backgroundRepeat:'no-repeat',
                    paddingTop: 0
            }}>
            <h1><b>Employee/Admin Login</b></h1>
            <div className='Emcontainer'>
                <div className='Emcontainer-1'>
                    <div>
                        <img src={employee} alt='Employee' className='Emimage'/>
                    </div>
                    <div>
                        <form>
                            <label>Full Name</label>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Emp_login