import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ token, handleLogout }) => {
  return (
    <nav className="navbar">
      <ul>
     
        {token ? (
          <>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
          <Link to="/patient">Patient</Link>
        </li>
        <li>
          <Link to="/patients">Patients</Link>
        </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
