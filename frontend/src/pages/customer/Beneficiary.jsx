import React from "react";
import { useNavigate } from "react-router-dom";
import "./Beneficiary.css";
import Button from "../../component/Button";

function Beneficiary() {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="Bheading">
        <b>Add Beneficiary</b>
      </h1>
      <div className="Bcontainer">
        <div className="Bcontainer-1">
          <div className="Bcontainer-2">
            <div className="Bcontent">
              <table>
                <tr>
                  <td className="Bfirst">Account Number</td>
                  <td className="Bsecond">
                    <input></input>
                  </td>
                </tr>
                <tr>
                  <td className="Bfirst">IFSC Code</td>
                  <td className="Bsecond">
                    <input></input>
                  </td>
                </tr>
                <tr>
                  <td className="Bfirst">Customer Name</td>
                  <td className="Bsecond">
                    <input></input>
                  </td>
                </tr>

                <tr>
                  <td className="Bfirst">Phone</td>
                  <td className="Bsecond">
                    <input></input>
                  </td>
                </tr>
              </table>
              <div className="Bbuttons">
                <div>
                  <Button
                    onClick={() => navigate("/Cus_page")}
                    customstyle={{
                      width: "130px",
                      height: "50px",
                      fontSize: "15px",
                      backgroundColor: "lightgreen",
                    }}
                    value="Back"
                  ></Button>
                </div>
                <div>
                  <Button
                    onClick={() => navigate("/BConfirm")}
                    customstyle={{
                      width: "130px",
                      height: "50px",
                      fontSize: "15px",
                      backgroundColor: "lightgreen",
                      marginBottom: "10%",
                    }}
                    value="Confirm"
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

export default Beneficiary;
