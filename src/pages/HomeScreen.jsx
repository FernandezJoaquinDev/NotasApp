import React from "react";
import Notas from "../components/Notas";
import { datos } from "../data/infoNotas";

const HomeScreen = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          {datos.map((nota, index) => (
            <div className="col-md-2 my-3 mx-3 " key={index}>
              <Notas nota={nota} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
