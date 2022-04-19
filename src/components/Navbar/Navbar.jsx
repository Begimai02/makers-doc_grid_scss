import React from "react";
import "./Navbar.scss";

import logo from "../../assets/images/navlogo.svg";
import burger from '../../assets/images/burger.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="nav">
          <div className="nav-left">
            <img src={logo} alt="logo" />
            <span>Documentation</span>
          </div>
          <div className="nav-right">
            <div className="nav-list">
              <div className="nav-item">Главная</div>
              <div className="nav-item">Документация</div>
              <div className="nav-item">Добавить</div>
              <div className="nav-item">
                <input type="text" placeholder="Поиск" />
              </div>
            </div>
            <div className="nav-btn">
                <img src={burger} alt="btn" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
