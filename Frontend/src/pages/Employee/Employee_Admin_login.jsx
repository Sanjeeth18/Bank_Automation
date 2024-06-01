import React from "react";
import customer from "../images/customer.jpg";
import employee from "../images/employee.jpg";
import background from "../images/background.jpg";
import branch from "../images/bramch.png";
import "./Employee_Admin_login.css";
import { useAdminEmp } from "../../component/AdminEmpContext";
import { useNavigate } from "react-router-dom";

function Employee_login() {
  const { admin_emp } = useAdminEmp();
  const navigate=useNavigate();

  return (
    <>
      <div
        className="Epadding"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          paddingTop: 0,
        }}
      >
        {admin_emp === 1 ? (
          <>
            <h1>
              <b> Admin Login </b>
            </h1>

            <div className="Econtainer">
              <div className="Econtainer-1">
                <div className="Econtainer-2">
                  <div onClick={()=>navigate('/Add_cus')} className="ECtexts">Customer</div>
                  <div>
                    <img onClick={()=>navigate('/Add_cus')} src={customer} alt="Customer" className="Cimage-1" />
                  </div>
                </div>
                <div className="Econtainer-3">
                  <div onClick={()=>navigate('/Add_emp')}  className="EEtexts">Employee</div>
                  <div>
                    <img onClick={()=>navigate('/Add_emp')}  src={employee} alt="Employee" className="Eimage-1" />
                  </div>
                </div>
                <div className="Econtainer-4">
                  <div onClick={()=>navigate('/Add_branch')}   className="EBtexts">Branch</div>
                  <div>
                    <img  onClick={()=>navigate('/Add_branch')}   src={branch} alt="Employee" className="Bimage-1" />
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <h1>
              <b> Employee Login</b>
            </h1>
            <div className="Econtainer">
              <div className="Econtainer-1">
                <div className="Econtainer-5">
                  <div onClick={()=>navigate('/Add_cus')} className="EECtexts">Customer</div>
                  <div>
                    <img onClick={()=>navigate('/Add_cus')} src={customer} alt="Customer" className="ECimage-1" />
                  </div>
                </div>
                <div className="Econtainer-6">
                  <div onClick={()=>navigate('/Add_emp')}  className="EEEtexts">Employee</div>
                  <div>
                    <img onClick={()=>navigate('/Add_emp')}   src={employee} alt="Employee" className="EEimage-1" />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Employee_login;
