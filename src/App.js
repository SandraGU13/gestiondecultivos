import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'react-notifications/lib/notifications.css';

import Login from "./pages/login";
import Bienvenido from "./pages/bienvenido";
import Usuarios from "./pages/usuarios";
import Perfil from "./pages/perfil";
import Cultivos from "./pages/cultivos";
import Predios from "./pages/predios";
import Semillas from "./pages/semillas";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { useState } from "react/cjs/react.development";



function App() {

  const [token, setToken] = useState('');

  const iniciarSesion = (datos,navegacion) => {

    fetch("http://localhost:8000/api/login", {
      method: 'POST', 
      body: JSON.stringify(datos),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => {
      console.error('Error:', error)
    })
    .then(response => {
      console.log(response)
      NotificationManager.info(response.mensaje)
      setToken(response.token)
      navegacion('/')
    });

  }

  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path={"/login"} element={<Login sesion={iniciarSesion}/>} />
        <Route path={"/"} element={<Bienvenido token={token}/>} />
        <Route path={"/usuarios"} element={<Usuarios token={token} />} />
        <Route path={"/perfil"} element={<Perfil token={token} />} />
        <Route path={"/cultivos"} element={<Cultivos token={token} />} />
        <Route path={"/semillas"} element={<Semillas token={token} />} />
        <Route path={"/predios"} element={<Predios token={token} />} />
      </Routes>
    </BrowserRouter>
    <NotificationContainer/>
    </div>
  );
}

export default App;
