import React from "react";
import { useNavigate } from "react-router-dom";
import "./Add_branch.css";
import Button from "../../component/Button";

function Add_Branch() {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="ABheading">
        <b>Adding The Branch</b>
      </h1>
      <div className="ABcontainer">
        <div className="ABcontainer-1">
          <div className="ABcontainer-2">
            <div className="APtext_container">
              <p className="APtext">
                <b>Add Photo</b>
              </p>
              <p className="plus_text">+</p>
            </div>
            <div className="ABcontent">
              <table>
                <tr>
                  <td className="ABfirst">Branch ID</td>
                  <td className="ABsecond">
                    <input></input>
                  </td>
                </tr>
                <tr>
                  <td className="ABfirst">Area Name</td>
                  <td className="ABsecond">
                    <input></input>
                  </td>
                </tr>
              </table>
              <div className="buttons">
                <div>
                  <Button
                    onClick={() => navigate("/EAlogin")}
                    id="back"
                    customstyle={{
                      width: "130px",
                      height: "50px",
                      fontSize: "15px",
                      backgroundColor: "lightgreen",
                    }}
                    value="Back"
                  />
                </div>
                <div>
                  <Button
                    onClick={() => navigate("/Confirm")}
                    customstyle={{
                      width: "130px",
                      height: "50px",
                      fontSize: "15px",
                      backgroundColor: "lightgreen",
                    }}
                    value="Confirm"
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

export default Add_Branch;
