import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Add_customer.css";

function Add_Customer() {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="ACheading">
        <b>Adding The Customer</b>
      </h1>
      <div className="ACcontainer">
        <div className="ACcontainer-1">
          <div className="ACcontainer-2">
            <div className="APtext_container">
              <p className="APtext">
                <b>Add Photo</b>
              </p>
              <p className="plus_text">+</p>
            </div>
            <div className="ACcontent">
              <table>
                <tr>
                  <td className="ACfirst">Customer ID</td>
                  <td className="ACsecond">
                    <input></input>
                  </td>
                </tr>
                <tr>
                  <td className="ACfirst">Account Number</td>
                  <td className="ACsecond">
                    <input></input>
                  </td>
                </tr>
                <tr>
                  <td className="ACfirst">IFSC Code</td>
                  <td className="ACsecond">
                    <input></input>
                  </td>
                </tr>
                <tr>
                  <td className="ACfirst">Customer Name</td>
                  <td className="ACsecond">
                    <input></input>
                  </td>
                </tr>
                <tr>
                  <td className="ACfirst">Address</td>
                  <td className="ACsecond">
                    <input></input>
                  </td>
                </tr>
                <tr>
                  <td className="ACfirst">Phone</td>
                  <td className="ACsecond">
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

export default Add_Customer;
