import React from "react";
import Inicio from './Inicio';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path={"/"} element={<Inicio/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
