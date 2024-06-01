import React from 'react';
import employee from '../images/employee.jpg';
import background from "../images/background.jpg";
import './Emp_login.css';
import { useNavigate } from 'react-router-dom';
import { useAdminEmp } from '../../component/AdminEmpContext';

function Emp_login() {
    const navigate = useNavigate();
    const { setAdminEmp } = useAdminEmp();

    const change = () => {
        //setAdminEmp(0);
        navigate('/EMlogin');
    };

    return (
        <>
            <div className='Empadding' style={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                paddingTop: 0
            }}>
                <h1><b>Employee/Admin Login</b></h1>
                <div className='Emcontainer'>
                    <div className='Emcontainer-1'>
                        <img onClick={() => navigate('/EAlogin')} src={employee} alt='Employee' className='Emimage' />
                        <form onSubmit={(e) => { e.preventDefault(); change(); }}>
                            <div>
                                <h1>Login</h1>
                                <label>Employee ID</label><br />
                                <input type='text' /><br />
                                <label>Password</label><br />
                                <input type='password' />
                                <input type='submit' value='Submit' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Emp_login;
