import React, { useEffect, useState } from "react";
import "../css/navBar.css";
import { consultarClima } from "../helpers/climaApp";
import { NavLink, Link } from "react-router-dom";
import { FaRegMoon, FaSun } from "react-icons/fa";

const NavBar = ({ darkMode, cambioTema }) => {
  const [tiempo, setTiempo] = useState({
    temperatura: "",
    icono: "",
  });

  useEffect(() => {
    clima();
  }, []);

  const clima = () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const coords = pos.coords;
      const lat = coords.latitude;
      const long = coords.longitude;

      consultarClima(lat, long).then((resultado) => {
        const { current } = resultado;
        setTiempo({
          temperatura: current.temp_c,
          icono: current.condition.icon,
        });
      });
    });
  };

  return (
    <div className="mb-2">
      <nav
        className={`navbar d-flex justify-content-between ${
          darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
        }`}
      >
        <div
          className={`container d-flex justify-content-start cajaTitulo ms-0 ${
            darkMode ? "text-light" : "text-dark"
          }`}
        >
          <Link to="/" className="navbar-brand">
            NotasApp
          </Link>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/favs" className="nav-link ms-3">
            Favoritos
          </NavLink>
          <div className="form-check form-switch ms-3">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="btnDarkMode"
              onChange={cambioTema}
            />
            {darkMode ? <FaRegMoon /> : <FaSun />}
          </div>
        </div>
        <div className="d-flex align-items-center cajaTiempo ">
          <NavLink to="/login" className="btn btn-primary btn-sm me-3">
            Ingresar
          </NavLink>
          <span className={`${darkMode ? "text-light" : "text-dark"}`}>
            {tiempo.temperatura}°
          </span>
          <img src={tiempo.icono} alt="iconoTiempo" className="imagenTiempo" />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
