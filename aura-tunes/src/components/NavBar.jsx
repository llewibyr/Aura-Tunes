import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-violet-900 p-5  font-sans text-3xl shadow-md">
      <ul className="flex justify-between items-center space-x-4 ">
        <li className="text-white hover:text-red-400">
          <Link to="/">Home</Link>
        </li>
        <li className=" text-white hover:text-red-700">
          <Link to="/song-list">Song List</Link>
        </li>
        <li className="text-white hover:text-gray-400">
          <Link to="/songs/add">Add New Song</Link>
        </li>
        <li className="text-white hover:text-gray-400">
          <Link to="/artist-list">Artist List</Link>
        </li>
        <li className="text-white hover:text-gray-400">
          <Link to="/new-artist">Add Artist</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
