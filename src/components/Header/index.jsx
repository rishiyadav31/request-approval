import React from "react";
import logo from "./logo.png";
import "./index.css";

const Header = () => {
  return (
    <header className="app-header">
      <img src={logo} className="app-logo" alt="logo" />
    </header>
  );
};

export default Header;
