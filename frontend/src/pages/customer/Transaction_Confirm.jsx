import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'; 
import Button from 'react-bootstrap/Button'; 
import './Transaction_Confirm.css';

function Transaction_Confirm() {
    const navigate = useNavigate();
    return (
        <>
            <h1 className='TCOheading'><b>Transaction Confirm</b></h1>
            <div className='TCOcontainer'>
                <div className='TCOcontainer-1'>
                    <div className='TCOcontainer-2' >
                        <div className='TCOProfile'>
                            <FontAwesomeIcon className='TCOicon' icon={faCircleCheck} />
                        </div>
                        <div className='TCOcontent'>
                            <div>
                                <p>Your Transaction was Successful</p>
                            </div>
                            <table>
                                <tr>
                                    <td className='TCOfirst'>Receiver name </td>
                                    <td className='TCOsecond'></td>
                                </tr>
                                <tr>
                                    <td className='TCOfirst'>IFSC Code</td>
                                    <td className='TCOsecond'></td>
                                </tr>
                                <tr>
                                    <td className='TCOfirst'>Amount</td>
                                    <td className='TCOsecond'></td>
                                </tr>
                            </table>
                            <div className='TCObuttons'>
                                <div >
                                    <Button  onClick={()=>navigate('/Cus_page')}  className='btn-1'>OK</Button> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Transaction_Confirm;
