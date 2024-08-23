import React, { useEffect, useState } from "react";
import "../css/navBar.css";
import { consultarClima } from "../helpers/climaApp";
import { NavLink, Link } from "react-router-dom";
const NavBar = () => {
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
      <nav className="navbar navbar-light bg-light d-flex justify-content-between">
        <div className="container d-flex justify-content-start cajaTitulo mx-0">
          <Link to="/" className="navbar-brand">
            NotasApp
          </Link>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/favs" className="nav-link mx-3">
            Favoritos
          </NavLink>
        </div>
        <div className="d-flex align-items-center cajaTiempo">
          <span>{tiempo.temperatura}°</span>
          <img src={tiempo.icono} alt="iconoTiempo" className="imagenTiempo" />
          {/* <h3 className="textoTiempo">{tiempo.temperatura}°</h3> */}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
