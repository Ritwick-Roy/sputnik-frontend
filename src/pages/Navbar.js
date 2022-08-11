import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import signout from '../images/signout.png'
const Navbar = () => {
  const navigate = useNavigate();
  const [token,setToken]=useState(null);
  const [refresh, setRefresh] = useState();
  
  useEffect(()=>{
    const loggedin=localStorage.getItem("token");
    if(!loggedin)
    {
      navigate('/patient/login');
    }
    setToken(loggedin);
  },[]);

  return (
    <nav className="navbar">
      <Link to="/">
        <h1>Sputnik</h1>
      </Link>
      <div className="links">
        <Link
          to="/predict"
          style={{
            color: "white",
            backgroundColor: "#09a188",
            borderRadius: "8px",
          }}
        >
          Predict
        </Link>
        <Link to="/appointments">Appointments</Link>
        <Link to="/patient/upload">Prescriptions</Link>
        <Link to="/doctors">For doctors</Link>
      </div>
    </nav>
  );
};

export default Navbar;
