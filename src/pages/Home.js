import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import pic from "../images/doctor-one.png";
import { getBaseUrl } from "../utils";

const Home = () => {
  const navigate = useNavigate();
  const [refresh, setRefresh] = useState();
  const [token, setToken] = useState("");

  useEffect(() => {
    const loggedin = localStorage.getItem("token");
    setToken(loggedin);
    console.log(loggedin);
  }, [refresh]);

  const loginHandler = () => {
    navigate("/patient/login");
  };

  const signupHandler = () => {
    navigate("/patient/signup");
  };

  const signoutHandler = () => {
    localStorage.removeItem("token");
    setRefresh({});
  };

  return (
    <div className="home">
      <h1>Home</h1>

      <div class="row">
        <div class="column">
          {!token && <button onClick={loginHandler}>Login</button>}
          {!token && <button onClick={signupHandler}>Signup</button>}
          {token && <button onClick={signoutHandler}>Signout</button>}
        </div>
        <div class="column">
          <div className="homeimage">
            <img src={pic} alt="" />
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
