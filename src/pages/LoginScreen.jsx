import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import App from "../App";
const LoginScreen = ({ loginControl }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const usuario = {
    email: "usuario@usuario.com",
    pass: "12345",
  };

  const comparacion = (event) => {
    if (usuario.email === email && usuario.pass === password) {
      event.preventDefault();
      loginControl();
      alert("ingreso exitoso");
      <Navigate to="/" />;
    } else {
      alert("usuario o contraseña incorrectos");
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <h3>Ingreso</h3>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <form>
              <div className="mb-3 d-grid">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <button className="btn btn-success mt-2" onClick={comparacion}>
                  Ingresar
                </button>
                {/* <button className="btn btn-warning mt-1">Registrarse</button> */}
                <Link to="/registro" className="btn btn-warning mt-1">
                  Registrarse
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
