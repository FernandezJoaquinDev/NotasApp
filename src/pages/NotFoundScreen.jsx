import React from "react";
import { Link } from "react-router-dom";

const NotFoundScreen = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="text-center">
        <h3>⛔No se encontro la pagina deseada⛔</h3>
        <h2>Por favor vuelva al inicio</h2>
        <Link to="/">
          <h4 className="btn btn-primary">Volver</h4>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundScreen;
