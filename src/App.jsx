import { useState } from "react";
import NavBar from "./components/NavBar";
import Notas from "./components/Notas";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import FavoritosScreen from "./pages/FavoritosScreen";
import NotFoundScreen from "./pages/NotFoundScreen";
import LoginScreen from "./pages/LoginScreen";
import RegistroScreen from "./pages/RegistroScreen";

// import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const cambioTema = () => {
    setDarkMode(!darkMode);
  };

  const [login, setLogin] = useState(false);
  const loginControl = () => {
    setLogin(!login);
  };

  return (
    <div className={`${darkMode ? "bg-dark" : "bg-light"}`}>
      <NavBar cambioTema={cambioTema} darkMode={darkMode} />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/registro" element={<RegistroScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
        <Route path="/favs" element={<FavoritosScreen darkMode={darkMode} />} />
        <Route
          path="/login"
          element={<LoginScreen loginControl={loginControl} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
