import React from "react";

function Header() {
  return (
    <div className="container d-flex bg-secondary align-items-center justify-content-center">
      <img src="logo.png" alt="logo"  width={"200px"}/>
      <h1 className="bg-warning mx-5 text-success fw-bold text-decoration-underline ">MUSTAFA</h1>
    </div>
  );
}

export default Header;