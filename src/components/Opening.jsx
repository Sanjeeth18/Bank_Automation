import React from 'react'
import customer from './images/customer.jpg'
import employee from './images/employee.jpg'
import background from "./images/background.jpg"
import './Opening.css'

function Opening() {
  return (
    <>
        <div className='Opadding' style={{backgroundImage:`url(${background})`,
                    backgroundSize:'cover',
                    backgroundRepeat:'no-repeat',
                    paddingTop: 0
            }}>
            <h1><b>Welcome to Bank Automation System</b></h1>
            <div className='Ocontainer'>
                <div className='Ocontainer-1'>
                    <div className='Ocontainer-2'>
                        <div className='OCtexts'>
                            Customer
                        </div>
                        <div>
                            <img src={customer} alt='Customer' className='Cimage'/>
                        </div>
                    </div>
                    <div className='Ocontainer-3'>
                        <div className='OEtexts'>
                                Employee
                        </div>
                        <div >
                            <img src={employee} alt='Employee' className='Eimage'/>
                        </div>           
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Opening