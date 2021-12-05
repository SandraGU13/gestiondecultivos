import React from "react";
import Bienvenido from './pages/Bienvenido';
import Usuarios from './pages/Usuarios';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path={"/"} element={<Bienvenido/>}/>
          <Route path={"/usuarios"} element={<Usuarios/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
