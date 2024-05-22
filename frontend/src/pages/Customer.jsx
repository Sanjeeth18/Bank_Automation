import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; 
import Button from 'react-bootstrap/Button'; // Import Button component from react-bootstrap
import './Customer.css';

function Customer() {
    const navigate = useNavigate();
    const parameter={
        date:'16-07-2004',
        to:'Sanjeeth',
        amount:'10000',
        receiver:'Daksha',
        balance:'100'
    };
    return (
        <>
            <h1 className='Cuheading'><b>Customer Login</b></h1>
            <div className='Cucontainer'>
                <div className='Cucontainer-1'>
                    <div className='Cucontainer-2' >
                        <div className='Profile'>
                            <FontAwesomeIcon className='icon' icon={faUser} />
                        </div>
                        <div className='Ccontent'>
                            <table>
                                <tr>
                                    <td className='first'>Customer ID</td>
                                    <td className='second'></td>
                                </tr>
                                <tr>
                                    <td className='first'>Account Number</td>
                                    <td className='second'></td>
                                </tr>
                                <tr>
                                    <td className='first'>IFSC Code</td>
                                    <td className='second'></td>
                                </tr>
                                <tr>
                                    <td className='first'>Customer Name</td>
                                    <td className='second'></td>
                                </tr>
                                <tr>
                                    <td className='first'>Address</td>
                                    <td className='second'></td>
                                </tr>
                                <tr>
                                    <td className='first'>Phone</td>
                                    <td className='second'></td>
                                </tr>
                            </table>
                            <div className='buttons'>
                                <div >
                                    <Button  onClick={()=>navigate('/Transaction')}  className='btn-1' variant='primary'>Transaction</Button> 
                                </div>
                                <div >
                                    <Button onClick={()=>navigate('/Make')} className='btn-2'>Make Transaction</Button> 
                                </div>
                                <div >
                                    <Button  onClick={()=>navigate('/Clogin')}  className='btn-2' variant='primary'>Log Out</Button> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Customer;
