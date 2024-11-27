import React from "react";
import customer from "../images/customer.jpg";
import background from "../images/background.jpg";
import "./Customer_login.css";
import { useNavigate } from "react-router-dom";
import Button from "../../component/Button";

function Customer_login() {
  const navigate = useNavigate();

  const change = () => {
    navigate("/Cus_page");
  };

  return (
    <>
      <div
        className="Cpadding"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          paddingTop: 0,
        }}
      >
        <h1>
          <b>Customer Login</b>
        </h1>
        <div className="Ccontainer">
          <div className="Ccontainer-1">
            <img
              onClick={() => navigate("/Clogin")}
              src={customer}
              alt="Customer"
              className="Cuimage"
            />
            <form onSubmit={() => change()}>
              <div>
                <h1>Login</h1>
                <label>Customer ID</label>
                <br></br>
                <input type="text" />
                <br></br>
                <label>Password </label>
                <br></br>
                <input type="password" />
                <Button
                  customstyle={{
                    width: "310px",
                    height: "50px",
                    fontSize: "15px",
                    backgroundColor: "lightgreen",
                    marginBottom: "10%",
                  }}
                  value="Submit"
                ></Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Customer_login;
