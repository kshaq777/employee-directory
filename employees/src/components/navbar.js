import React from "react";
import "../public/styles.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-default">
      <a className="navbar-brand bg-default" href="/">
        Employee Directory
      </a>
    </nav>
  );
}

export default Navbar;
