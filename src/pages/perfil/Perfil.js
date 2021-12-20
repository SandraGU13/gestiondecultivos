import React from "react";
import Sidebar from "../../components/sidebar";
import Topbar from "../../components/topbar";
import Footer from "../../components/footer";
import ModalCerrarSesion from "../../components/modalCerrarSesion";
import ModalCambiarContrasena from "../../components/modalCambiarContrasena";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";

function Perfil({token}) {

  let navegacion = useNavigate()

  const [perfilDB, setPerfilDB] = useState({});

  useEffect(() => {
    if (!token){
      navegacion('/login')
    }else{
      fetch("http://localhost:8000/api/perfil",{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token-jwt": token
      },
    })
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        for (const row of data) {
          setPerfilDB(row);
        }
      });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div id="wrapper">
      {" "}
      {/*<!-- Page Wrapper -->*/}
      <Sidebar /> {/*<!-- Sidebar -->*/}
      <div id="content-wrapper" className="d-flex flex-column">
        {" "}
        {/*<!-- Content Wrapper -->*/}
        <div id="content">
          {" "}
          {/*<!-- Main Content -->*/}
          <Topbar /> {/*<!-- Topbar -->*/}
          {/*<!-->>> CONTENIDO DE LA PAGINA DENTRO DEL DIV CONTAINER-FLUID <<<-->*/}
          <div className="container-fluid">
            <div className="row bg-title">
              <div className="col-lg-12">
                <h4 className="page-title">Perfil</h4>
              </div>
            </div>

            {/*<!-- copi-->*/}
            <div className="row">
              <div className="col-md-4 col-xs-12">
                <div className="overlay-box d-flex justify-content-center">
                  <div className="user-content ">
                    <Link to="#">
                      <img src="img/perfil.png" alt="" />
                    </Link>
                    <h4 className="text">Usuario</h4>
                    <h5 className="text">sgutierrez</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xs-12">
                <div className="white-box">
                  <form className="form-horizontal form-material">
                    <br />
                    <div className="row">
                      <div className="col-sm-6">
                        <label className="col-md-12">
                          <b>Nombres:</b>
                        </label>
                      </div>
                      <div className="col-sm-6">
                        <label className="col-md-12">{perfilDB.nombre}</label>
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col-sm-6">
                        <label className="col-md-12">
                          <b>Apellidos:</b>
                        </label>
                      </div>
                      <div className="col-sm-6">
                        <label className="col-md-12">{perfilDB.apellido}</label>
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col-sm-6">
                        <label className="col-md-12">
                          <b>Email:</b>
                        </label>
                      </div>
                      <div className="col-sm-6">
                        <label className="col-md-12">{perfilDB.email}</label>
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col-sm-6">
                        <label className="col-md-12">
                          <b>Telefono:</b>
                        </label>
                      </div>
                      <div className="col-sm-6">
                        <label className="col-md-12">{perfilDB.telefono}</label>
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col-sm-6">
                        <label className="col-md-12">
                          <b>Tipo de usuario:</b>
                        </label>
                      </div>
                      <div className="col-sm-6">
                        <label className="col-md-12">{perfilDB.tipoUsuario}</label>
                      </div>
                    </div>
                    <br />
                    <div className="col-md-10 d-flex justify-content-center">
                      <div className="form-group">
                        <Link to="#" className="btn btn-primary float-center" data-toggle="modal" data-target="#cambiarcontraseña">
                          <span className="icon text-white-50"></span>

                          <span className="text">Cambiar contraseña</span>
                        </Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/*<!-->>> CONTENIDO DE PAGINA ARRIBA <<<-->*/}
        </div>
        <Footer /> {/*<!-- Footer -->*/}
      </div>
      <ModalCambiarContrasena />
      <ModalCerrarSesion /> {/*<!-- Modal Cerrar-->*/}
    </div>
  );
}

export default Perfil;
