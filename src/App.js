import React from "react";
import Login from "./pages/login";
import Bienvenido from "./pages/bienvenido";
import Usuarios from "./pages/usuarios";
import Perfil from "./pages/perfil";
import Cultivos from "./pages/cultivos";
import Predios from "./pages/predios";
import Semillas from "./pages/semillas";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Login />} />
        <Route path={"/bienvenido"} element={<Bienvenido />} />
        <Route path={"/usuarios"} element={<Usuarios />} />
        <Route path={"/perfil"} element={<Perfil />} />
        <Route path={"/cultivos"} element={<Cultivos />} />
        <Route path={"/semillas"} element={<Semillas />} />
        <Route path={"/predios"} element={<Predios />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
