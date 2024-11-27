import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Button from "../../component/Button";
import "./Transaction_Confirm.css";

function Transaction_Confirm() {
  const navigate = useNavigate();
  const [count, setcount] = useState(10);

  useEffect(() => {
    if (count === 0) {
      navigate("/Cus_page");
    }
    const timer = setTimeout(() => {
      setcount(count - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count]);


  return (
    <>
      <h1 className="TCOheading">
        <b>Transaction Confirm</b>
      </h1>
      <div className="TCOcontainer">
        <div className="TCOcontainer-1">
          <div className="TCOcontainer-2">
            <div className="TCOProfile">
              <FontAwesomeIcon className="TCOicon" icon={faCircleCheck} />
            </div>

            <div className="TCOcontent">
              <div>
                <p>Your Transaction was Successful</p>
              </div>
              <div>
                <p className="count">
                  The page will automatically close in {count}...
                </p>
              </div>
              <table>
                <tr>
                  <td className="TCOfirst">Receiver name </td>
                  <td className="TCOsecond"></td>
                </tr>
                <tr>
                  <td className="TCOfirst">IFSC Code</td>
                  <td className="TCOsecond"></td>
                </tr>
                <tr>
                  <td className="TCOfirst">Amount</td>
                  <td className="TCOsecond"></td>
                </tr>
              </table>
              <div className="TCObuttons">
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
                    value="OK"
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

export default Transaction_Confirm;
