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
  const [usuEmail, setusuEmail] = useState('usuario');
  const [datosUsu, setDatosUsu] = useState({});


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
      NotificationManager.info(`${response.mensaje} ${response.usuario}`)
      setDatosUsu(response)
      setToken(response.token)
      setusuEmail(response.usuario)
      navegacion('/')
    });

  }


  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path={"/login"} element={<Login sesion={iniciarSesion} token={token} />} />
        <Route path={"/"} element={<Bienvenido token={token} usuEmail={usuEmail}/>}  />
        <Route path={"/usuarios"} element={<Usuarios token={token} usuEmail={usuEmail}/>} />
        <Route path={"/perfil"} element={<Perfil token={token} datosUsu={datosUsu}/>} />
        <Route path={"/cultivos"} element={<Cultivos token={token} usuEmail={usuEmail}/>} />
        <Route path={"/semillas"} element={<Semillas token={token} usuEmail={usuEmail}/>} />
        <Route path={"/predios"} element={<Predios token={token} usuEmail={usuEmail}/>} />
      </Routes>
    </BrowserRouter>
    <NotificationContainer/>
    </div>
  );
}

export default App;
