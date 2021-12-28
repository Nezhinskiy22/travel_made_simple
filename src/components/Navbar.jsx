import React, { useState } from "react";
import "./Navbar.css";
import { FiLifeBuoy, FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ navbarLinks }) => {
  const [menuClicked, setMenuClicked] = useState(false);

  const toggleMenuClick = () => {
    setMenuClicked(!menuClicked);
  };

  return (
    <nav className="navbar">
      <span className="navbar__logo">travel</span>

      {menuClicked ? (
        <FiX size={25} className="navbar__menu" onClick={toggleMenuClick} />
      ) : (
        <FiMenu size={25} className="navbar__menu" onClick={toggleMenuClick} />
      )}
      <ul
        className={
          menuClicked ? "navbar__list navbar__list--active" : "navbar__list"
        }
      >
        {navbarLinks.map((item) => {
          return (
            <li className="navbar__item" key={item.title}>
              <a href={item.url} className="navbar__link">
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
