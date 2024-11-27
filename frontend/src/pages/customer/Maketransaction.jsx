import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../component/Button";
import "./Maketransaction.css";

function Maketransaction() {
  const navigate = useNavigate();
  const [receiver, setReceiver] = useState([]);
  const [select, setSelect] = useState(0);



  const handleSelectChange = (event) => {
    setSelect(event.target.value);
  };

  return (
    <>
      <h1 className="MTheading">
        <b>Make A Transaction</b>
      </h1>
      <div className="MTcontainer">
        <div className="MTcontainer-1">
          <div className="MTcontainer-2">
            <div className="MTcontent">
              <div>
                <div className="TO">
                  <h2>TO:</h2>
                  <select
                    className="select"
                    onChange={handleSelectChange}
                    value={select}
                  >
                    <option>Select a Receiver</option>
                    {receiver.length > 0 ? (
                      receiver.map((rec, index) => (
                        <option key={index}>{rec}</option>
                      ))
                    ) : (
                      <option disabled>There are no Receivers</option>
                    )}
                  </select>
                </div>
                {select != 0 && (
                  <>
                    <div className="Rselected">
                      <div className="texts">
                        <label>Amount</label>
                      </div>
                      <div>
                        <input type="number"></input>
                      </div>
                    </div>
                    <div className="divtable">
                      <table>
                        <tr>
                          <td className="MTfirst">Account Number</td>
                          <td className="MTsecond"></td>
                        </tr>
                        <tr>
                          <td className="MTfirst">IFSC Code</td>
                          <td className="MTsecond"></td>
                        </tr>
                        <tr>
                          <td className="MTfirst">Customer Name</td>
                          <td className="MTsecond"></td>
                        </tr>

                        <tr>
                          <td className="Bfirst">Phone</td>
                          <td className="Bsecond"></td>
                        </tr>
                      </table>
                    </div>
                  </>
                )}
              </div>
              <div className="MTbuttons">
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
                    value="Back"
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
                    value="Add Beneficiary"
                  ></Button>
                </div>
                <div>
                  <Button
                    onClick={() => navigate("/TConfirm")}
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

export default Maketransaction;
