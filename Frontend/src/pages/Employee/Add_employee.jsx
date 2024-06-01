import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Add_employee.css";

function Add_Employee() {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="AEheading">
        <b>Adding The Employee</b>
      </h1>
      <div className="AEcontainer">
        <div className="AEcontainer-1">
          <div className="AEcontainer-2">
            <div className="APtext_container">
              <p className="APtext">
                <b>Add Photo</b>
              </p>
              <p className="plus_text">+</p>
            </div>
            <div className="AEcontent">
              <table>
                <tr>
                  <td className="AEfirst">Employee ID</td>
                  <td className="AEsecond">
                    <input></input>
                  </td>
                </tr>
                <tr>
                  <td className="AEfirst">Employee Name</td>
                  <td className="AEsecond">
                    <input></input>
                  </td>
                </tr>
                <tr>
                  <td className="AEfirst">Address</td>
                  <td className="AEsecond">
                    <input></input>
                  </td>
                </tr>
                <tr>
                  <td className="AEfirst">Phone</td>
                  <td className="AEsecond">
                    <input></input>
                  </td>
                </tr>
              </table>
              <div className="buttons">
                <div>
                  <Button
                    onClick={() => navigate("/EALogin")}
                    className="btn-1"
                  >
                    Back
                  </Button>
                </div>
                <div>
                  <Button
                    onClick={() => navigate("/Confirm")}
                    className="btn-1"
                  >
                    Confirm
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Add_Employee;
