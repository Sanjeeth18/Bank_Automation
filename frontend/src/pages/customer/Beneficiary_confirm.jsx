import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'; 
import Button from 'react-bootstrap/Button'; 
import './Beneficiary_confirm.css';
import { useState } from 'react';
import { useEffect } from 'react';

function Beneficiary_Confirm() {
    const navigate = useNavigate();
    const [count,setcount]=useState(10);

    useEffect(()=>{
        if(count===0){
            navigate('/Beneficiary');
        }
        const timer=setTimeout(() => {
            setcount(count-1);
        }, 1000);

        return ()=> clearTimeout(timer);
    },[count])

    return (
        <>
            <h1 className='BCOheading'><b>Transaction Confirm</b></h1>
            <div className='BCOcontainer'>
                <div className='BCOcontainer-1'>
                    <div className='BCOcontainer-2' >
                        <div className='BCOProfile'>
                            <FontAwesomeIcon className='BCOicon' icon={faCircleCheck} />
                        </div>
                        <div className='BCOcontent'>
                            <div>
                                <p>Beneficiary was added was Successful</p>
                                <p className='count'>The page will automatically close in {count}...</p>
                            </div>
                            <div className='BCObuttons'>
                                <div >
                                    <Button  onClick={()=>navigate('/Beneficiary')}  className='btn-1'>OK</Button> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Beneficiary_Confirm;
