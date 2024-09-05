import React from "react";

const FavoritosScreen = ({ darkMode }) => {
  return (
    <div className={`container ${darkMode ? "text-light" : "text-dark"}`}>
      <div className="row">
        <div className="col text-center">
          <h3>✨Aqui van las notas Favoritas✨</h3>
        </div>
      </div>
    </div>
  );
};

export default FavoritosScreen;
