import React from "react";
import { useState } from "react";

const RegistroScreen = () => {
  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
    nombre: "",
  });

  const handleChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>Registro de usuario</h3>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <form onSubmit="">
              <label>Email</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                className="form-control"
                value={usuario.email}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegistroScreen;
