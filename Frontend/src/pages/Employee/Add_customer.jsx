import React from "react";
import { useNavigate } from "react-router-dom";
import "./Add_customer.css";
import Button from "../../component/Button";

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
                    customstyle={{
                      width: "130px",
                      height: "50px",
                      fontSize: "15px",
                      backgroundColor: "lightgreen",
                    }}
                    value="Back"
                    onClick={() => navigate("/EALogin")}
                  />
                </div>
                <div>
                  <Button
                    customstyle={{
                      width: "130px",
                      height: "50px",
                      fontSize: "15px",
                      backgroundColor: "lightgreen",
                    }}
                    value="Confirm"
                    onClick={() => navigate("/Confirm")}
                  />
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
