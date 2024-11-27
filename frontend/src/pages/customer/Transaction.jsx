import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Button from "../../component/Button";
import "./Transaction.css";

function Transaction({ Transactions }) {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="Theading">
        <b>Transaction Details</b>
      </h1>
      <div className="Tcontainer">
        <div className="Tcontainer-1">
          <div className="Tcontainer-2">
            <div className="Profile">
              <FontAwesomeIcon className="icon" icon={faUser} />
            </div>
            <div className="Tcontent">
              <table>
                <tr>
                  <td className="Tfirst">Date</td>
                  <td className="Tfirst">Receiver</td>
                  <td className="Tfirst">Amount</td>
                  <td className="Tfirst">Remaining</td>
                </tr>
                {Transactions != null ? (
                  Transactions.map((transaction) => {
                    <tr key={transaction.id}>
                      <td className="Tsecond">transaction.date</td>
                      <td className="Tsecond">transaction.receiver</td>
                      <td className="Tsecond">transaction.amount</td>
                      <td className="Tsecond">transaction.balance</td>
                    </tr>;
                  })
                ) : (
                  <tr>
                    <td colSpan={4} className="NTsecond">
                      NO Transactions were made
                    </td>
                  </tr>
                )}
              </table>
              <div className="Tbuttons">
                <div>
                  <Button
                    onClick={() => navigate("/Cus_page")}
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
                    value="Add Beneficiary"
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
                      marginBottom: "10%",
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

export default Transaction;
