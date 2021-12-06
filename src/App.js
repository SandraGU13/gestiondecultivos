import React from "react";
import Bienvenido from './pages/Bienvenido';
import Usuarios from './pages/Usuarios';
import Perfil from './pages/Perfil';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Semillas from "./pages/Semillas";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path={"/"} element={<Bienvenido/>}/>
          <Route path={"/usuarios"} element={<Usuarios/>}/>
          <Route path={"/perfil"} element={<Perfil/>}/>
          <Route path={"/semillas"} element={<Semillas/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
