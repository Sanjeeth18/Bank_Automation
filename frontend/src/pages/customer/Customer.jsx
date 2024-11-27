import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Button from "../../component/Button";
import "./Customer.css";

function Customer() {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="Cuheading">
        <b>Customer Login</b>
      </h1>
      <div className="Cucontainer">
        <div className="Cucontainer-1">
          <div className="Cucontainer-2">
            <div className="Profile">
              <FontAwesomeIcon className="icon" icon={faUser} />
            </div>
            <div className="Ccontent">
              <table>
                <tr>
                  <td className="first">Customer ID</td>
                  <td className="second"></td>
                </tr>
                <tr>
                  <td className="first">Account Number</td>
                  <td className="second"></td>
                </tr>
                <tr>
                  <td className="first">IFSC Code</td>
                  <td className="second"></td>
                </tr>
                <tr>
                  <td className="first">Customer Name</td>
                  <td className="second"></td>
                </tr>
                <tr>
                  <td className="first">Address</td>
                  <td className="second"></td>
                </tr>
                <tr>
                  <td className="first">Phone</td>
                  <td className="second"></td>
                </tr>
              </table>
              <div className="buttons">
                <div>
                  <Button
                    onClick={() => navigate("/Transaction")}
                    customstyle={{
                      width: "130px",
                      height: "50px",
                      fontSize: "15px",
                      backgroundColor: "lightgreen",
                      marginBottom: "10%",
                    }}
                    value="Transaction"
                  ></Button>
                </div>
                <div>
                  <Button
                    onClick={() => navigate("/Make")}
                    customstyle={{
                      width: "150px",
                      height: "50px",
                      fontSize: "15px",
                      backgroundColor: "lightgreen",
                      marginBottom: "10%",
                    }}
                    value="Make Transaction"
                  ></Button>
                </div>
                <div>
                  <Button
                    onClick={() => navigate("/Beneficiary")}
                    customstyle={{
                      width: "130px",
                      height: "50px",
                      fontSize: "15px",
                      backgroundColor: "lightgreen",
                      marginBottom: "10%",
                    }}
                    Value="Add Beneficiary"
                  ></Button>
                </div>
                <div>
                  <Button
                    onClick={() => navigate("/Clogin")}
                    customstyle={{
                      width: "130px",
                      height: "50px",
                      fontSize: "15px",
                      backgroundColor: "lightgray",
                    }}
                    value="Log Out"
                  ></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Customer;
