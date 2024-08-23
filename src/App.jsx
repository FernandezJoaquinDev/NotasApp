import { useState } from "react";
import NavBar from "./components/NavBar";
import Notas from "./components/Notas";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen";
import FavoritosScreen from "./pages/FavoritosScreen";
import NotFoundScreen from "./pages/NotFoundScreen";
// import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/favs" element={<FavoritosScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
      <Footer />

      {/* <del>{`${coso}`}</del> */}
    </>
  );
}

export default App;
