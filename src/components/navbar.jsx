import React, { useState } from "react";
import "./css/navbar.css";
import { Outlet, NavLink } from "react-router-dom";

export default function Navbar() {
  const [useNavLinks, setUseNavLinks] = useState(false);
  const toggleLinks = () => setUseNavLinks((prev) => !prev);
  const navigate = (baixar, planos) => {
    if (baixar) {
      null;
    }
    if (planos) {
      null;
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh", overflowX: "hidden" }}>
      <div className="navbarRoot">
        <div className="logoCont">
          <img src="vite.svg" />
        </div>
        <div className="buttonCont">
          {useNavLinks ? (
            <NavLink to="/" className="navButton" onClick={toggleLinks}>
              Baixar
            </NavLink>
          ) : (
            <div className="navButton" onClick={navigate}>
              Baixar
            </div>
          )}

          {useNavLinks ? (
            <NavLink to="/" className="navButton" onClick={toggleLinks}>
              Planos
            </NavLink>
          ) : (
            <div className="navButton" onClick={navigate}>
              Planos
            </div>
          )}

          {useNavLinks ? (
            <div className="navButton inLogin">
              <div className="loginText inLogin">Login</div>
            </div>
          ) : (
            <NavLink to="/login" className="navButton" onClick={toggleLinks}>
              <div className="loginText">Login</div>
            </NavLink>
          )}
        </div>
      </div>
      <div style={{ flexGrow: 1, width: "100vw", backgroundColor:"var(--preto)" }}>
        <Outlet />
      </div>
    </div>
  );
}
