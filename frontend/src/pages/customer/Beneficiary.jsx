import React from 'react';
import Button from 'react-bootstrap/Button'; 
import { useNavigate } from 'react-router-dom';
import './Beneficiary.css';

function Beneficiary() {

    const navigate=useNavigate();

    return (
        <>
            <h1 className='Bheading'><b>Add Beneficiary</b></h1>
            <div className='Bcontainer'>
                <div className='Bcontainer-1'>
                    <div className='Bcontainer-2'>
                        <div className='Bcontent'>
                        <table>
                                <tr>
                                    <td className='Bfirst'>Account Number</td>
                                    <td className='Bsecond'>
                                        <input></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='Bfirst'>IFSC Code</td>
                                    <td className='Bsecond'>
                                        <input></input>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='Bfirst'>Customer Name</td>
                                    <td className='Bsecond'>
                                        <input></input>
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td className='Bfirst'>Phone</td>
                                    <td className='Bsecond'>
                                        <input></input>
                                    </td>
                                </tr>
                            </table>
                            <div className='Bbuttons'>
                                <div>
                                    <Button onClick={() => navigate('/Cus_page')} className='btn-1'>Back</Button>
                                </div>
                                <div>
                                    <Button onClick={() => navigate('/BConfirm')} className='btn-1'>Confirm</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Beneficiary;
