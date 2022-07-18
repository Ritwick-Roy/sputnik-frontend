import React from "react";
import { Link } from "react-router-dom";
import pic from './images/doctor-one.png'
const Home = () => {
  return (
    <div className="home">
      <h1>Home</h1>
      <div className="homeimage">
        <img src={pic} alt=""/>
      </div>
      <Link to="/create">Book Appointment</Link>
    </div>
  );
};

export default Home;