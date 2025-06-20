import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <style>{`
        .navbar {
          background-color: aqua;
          padding: 10px 0;
        }
        .navbar ul {
          list-style: none;
          display: flex;
          justify-content: space-between;
          margin: 0;
          padding: 0;
        }
        .navbar li {
          margin: 0 15px;
        }
        .navbar a {
          color: Black;
          text-decoration: underline;
          font-size: 18px;
        }
      `}</style>

      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
