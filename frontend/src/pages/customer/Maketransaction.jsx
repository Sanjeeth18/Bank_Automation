import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button'; 
import './Maketransaction.css';

function Maketransaction() {
    const navigate = useNavigate();
    const [receiver, setReceiver] = useState([]);
    const [select, setSelect] = useState(0);

    useEffect(() => {
        setReceiver(['Sanjeeth']);
    }, []);

    const handleSelectChange = (event) => {
        setSelect(event.target.value);
    };

    return (
        <>
            <h1 className='MTheading'><b>Make A Transaction</b></h1>
            <div className='MTcontainer'>
                <div className='MTcontainer-1'>
                    <div className='MTcontainer-2'>
                        <div className='MTcontent'>
                            <div>
                                <div className='TO'>
                                    <h2>TO:</h2>
                                    <select className='select' onChange={handleSelectChange} value={select}>
                                        <option >Select a Receiver</option>
                                        {receiver.length > 0 ? (
                                            receiver.map((rec, index) => (
                                                <option key={index} >{rec}</option>
                                            ))
                                        ) : (
                                            <option disabled>There are no Receivers</option>
                                        )}
                                    </select>
                                    
                                </div>
                                {select !=0 && (
                                    <>
                                        <div className='Rselected'>
                                            <div className='texts'>
                                                <label >
                                                    Amount   
                                                </label>
                                            </div>
                                            <div>
                                                <input type='number'></input>
                                            </div>
                                        </div>
                                        <div className='divtable'>
                                            <table>
                                                <tr>
                                                    <td className='MTfirst'>Account Number</td>
                                                    <td className='MTsecond'></td>
                                                </tr>
                                                <tr>
                                                    <td className='MTfirst'>IFSC Code</td>
                                                    <td className='MTsecond'></td>
                                                </tr>
                                                <tr>
                                                    <td className='MTfirst'>Customer Name</td>
                                                    <td className='MTsecond'></td>
                                                </tr>
                                                
                                                <tr>
                                                    <td className='Bfirst'>Phone</td>
                                                    <td className='Bsecond'></td>
                                                </tr>
                                            </table>
                                        </div>
                                        
                                    </>
                                )}
                            </div>
                            <div className='MTbuttons'>
                                <div>
                                    <Button onClick={() => navigate('/Transaction')} className='btn-1'>Back</Button>
                                </div>
                                <div>
                                    <Button onClick={() => navigate('/Beneficiary')} className='btn-1'>Add Beneficiary</Button>
                                </div>
                                <div>
                                    <Button onClick={() => navigate('/TConfirm')} className='btn-2'>Confirm</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Maketransaction;
