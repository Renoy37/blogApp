import React, { useState } from "react";
import { IoSunny } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { MdMenuOpen } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

function Navbar({ handleSearchVisibility, handleHaburgerClick }) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isClose, setClose] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleToggleIcons = () => {
    setClose(!isClose);
  };

  return (
    <div
      className={`navbar-container ${isDarkMode ? "dark-mode" : "light-mode"}`}
    >
      <div className="logo">
        <h4>Renon</h4>
      </div>

      <div>
        <ul className="list-container ">
          <li className="elms">Home</li>
          <li className="elms">Categories</li>
          <li className="elms ">News</li>
          <li className="elms">Reviews</li>
          <li className="elms">Membership</li>
          <li className="elms">Contact</li>
        </ul>
      </div>

      <div className="btn-container">
        <button onClick={toggleTheme} className="btn-elms sunny">
          {isDarkMode ? <IoSunny /> : <FaMoon />}
        </button>
        <button className="btn-elms search">
          <FaSearch onClick={handleSearchVisibility} />
        </button>
        <button
          onClick={() => {
            handleHaburgerClick();
            handleToggleIcons();
          }}
          className="btn-elms menu"
        >
          {isClose ? <IoCloseOutline /> : <MdMenuOpen />}
        </button>

        <button className="btn-elms sign">Sign In</button>
        <button className="btn-elms sign">Sign Up</button>
      </div>
    </div>
  );
}

export default Navbar;
