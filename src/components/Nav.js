import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaWindowClose } from "react-icons/fa";
import MenuData from "../data/MenuData";
import "./Nav.css";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <div>
      <div className="navbar">
        <div className="navbar-toggle">
          <Link to="#" className="menu-bar">
            <FaBars onClick={toggleMenu} />
          </Link>
        </div>
      </div>
      <nav className={showMenu ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-item" onClick={toggleMenu}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bar">
              <FaWindowClose />
            </Link>
          </li>
          {MenuData.map((menu, index) => {
            return (
              <li className="menu-text" key={index}>
                <Link to={menu.path}>
                  {menu.icon}
                  <span>{menu.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
