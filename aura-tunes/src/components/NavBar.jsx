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
          <Link to="/song-list">
            Song List 
          </Link>
        </li>
        <li className="text-white hover:text-gray-400">
          <Link to="/new-song">
           Add A New Song
          </Link>
        </li>
        <li className="text-white hover:text-gray-400">
          <Link to="/artist-list">
            Artist List
          </Link>
            </li>
            <li className="text-white hover:text-gray-400">
              <Link to="/new-artist">
              Add A Artist
              </Link>
            </li>
      </ul>
    </nav>
  );
};

export default NavBar;





