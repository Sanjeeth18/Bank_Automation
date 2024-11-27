import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import "./confirm.css";
import { useState } from "react";
import { useEffect } from "react";
import Button from "../../component/Button";

function Confirm() {
  const navigate = useNavigate();
  const [count, setcount] = useState(10);

  useEffect(() => {
    if (count === 0) {
      navigate("/EALogin");
    }
    const timer = setTimeout(() => {
      setcount(count - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count]);

  return (
    <>
      <h1 className="CONheading">
        <b>Added Succesfully</b>
      </h1>
      <div className="CONcontainer">
        <div className="CONcontainer-1">
          <div className="CONcontainer-2">
            <div className="CONProfile">
              <FontAwesomeIcon className="CONicon" icon={faCircleCheck} />
            </div>
            <div className="CONcontent">
              <div>
                <p>Added Successfully</p>
                <p className="count">
                  The page will automatically close in {count}...
                </p>
              </div>
              <div className="CONbuttons">
                <div>
                  <Button
                    customstyle={{
                      width: "130px",
                      height: "50px",
                      fontSize: "15px",
                      backgroundColor: "lightgreen",
                    }}
                    value="OK"
                    onClick={() => navigate("/EALogin")}
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

export default Confirm;
