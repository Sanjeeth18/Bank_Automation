import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'; 
import Button from 'react-bootstrap/Button'; // Import Button component from react-bootstrap
import './Transaction.css';

function Transaction({Transactions}) {
    const navigate = useNavigate();
    const [toggle,settoggle]=useState(0);
    const handle=()=>{
        settoggle(toggle==0?1:0);
        console.log(toggle);
    }

    return (
        <>
            <h1 className='Theading'><b>Transaction Details</b></h1>
            <div className='Tcontainer'>
                <div className='Tcontainer-1'>
                    <div className='Tcontainer-2' >
                        <div className='Profile'>
                            <FontAwesomeIcon className='icon' icon={faUser} />
                        </div>
                        <div className='Tcontent'>
                        <table>
                                <tr>
                                    <td className='Tfirst'>Date</td>
                                    <td className='Tfirst'>Receiver</td>
                                    <td className='Tfirst'>Amount</td>
                                    <td className='Tfirst'>Remaining</td>
                                </tr>
                                {Transactions!=null?(Transactions.map(transaction=>{
                                    <tr key={transaction.id}>
                                        <td className='Tsecond'>transaction.date</td>
                                        <td className='Tsecond'>transaction.receiver</td>
                                        <td className='Tsecond'>transaction.amount</td>
                                        <td className='Tsecond'>transaction.balance</td>
                                    </tr>
                                })):(
                                <tr>
                                    <td colSpan={4} className='NTsecond'>NO Transactions were made</td>
                                </tr>)}
                            </table>
                            <div className='Tbuttons'>
                                <div >
                                    <Button onClick={()=>navigate('/Cus_page')} className='btn-1' variant='primary'>Back</Button> 
                                </div>
                                <div >
                                    <Button onClick={()=>navigate('/Make')} className='btn-2'>Make Transaction</Button> 
                                </div>
                                <div >
                                    <Button  onClick={()=>navigate('/Clogin')}  className='btn-3' variant='primary'>Log Out</Button> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Transaction;
