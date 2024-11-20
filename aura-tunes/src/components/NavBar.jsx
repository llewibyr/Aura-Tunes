import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-between items-center space-x-4">
        <li className="text-white hover:text-gray-400">
          <Link to="/" >
            Home
          </Link>
        </li>
        <li className=" text-white hover:text-gray-400">
          <Link to="/top-tracks">
            Top Tracks/Charts
          </Link>
        </li>
        <li className="text-white hover:text-gray-400">
          <Link to="/new-song">
           Create A New Song
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;





