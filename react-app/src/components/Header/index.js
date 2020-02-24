import React from "react";

import "./header.scss";

function Header({ className = "header" }) {
  return (
    <header className={className}>
      <a href="#" className="header__label">
        <h1>Burda</h1>
      </a>
      <nav className="header__links">
        <a href="#" className="header__link">
          Home
        </a>
        <a href="#" className="header__link">
          About us
        </a>
        <a href="#" className="header__link">
          Contacts
        </a>
      </nav>
    </header>
  );
}

export default Header;
