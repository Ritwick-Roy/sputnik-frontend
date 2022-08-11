import { Link } from "react-router-dom";
const Navbar = () => {
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
