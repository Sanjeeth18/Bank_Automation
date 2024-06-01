import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./Add_branch.css";

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

export default Add_Branch;
