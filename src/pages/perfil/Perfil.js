import React from "react";
import Sidebar from "../../components/sidebar";
import Topbar from "../../components/topbar";
import Footer from "../../components/footer";
import ModalCerrarSesion from "../../components/modalCerrarSesion";
import ModalCambiarContrasena from "../../components/modalCambiarContrasena";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useState ,useEffect } from "react";

function Perfil({token,datosUsu}) {

  const [valueCamb, setValueCamb] = useState('');

  let navegacion = useNavigate()


  let pasarCamb= (e) => {
    setValueCamb(e.target.value)
  }

  useEffect(() => {
    if (!token){
      navegacion('/login')
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
          <Topbar usuEmail={datosUsu.usuario}/> {/*<!-- Topbar -->*/}
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
                    <h5 className="text">{datosUsu.usuario}</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xs-12">
                <div className="white-box">
                  
                    <br />
                    <div className="row">
                      <div className="col-sm-6">
                        <label className="col-md-12">
                          <b>Nombres:</b>
                        </label>
                      </div>
                      <div className="col-sm-6">
                        <label className="col-md-12">{datosUsu.nombre}</label>
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
                        <label className="col-md-12">{datosUsu.apellido}</label>
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
                        <label className="col-md-12">{datosUsu.usuario}</label>
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
                        <label className="col-md-12">{datosUsu.telefono}</label>
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
                        <label className="col-md-12">{datosUsu.tipoUsuario}</label>
                      </div>
                    </div>
                    <br />
                    <div className="col-md-10 d-flex justify-content-center">
                      <div className="form-group">
                        <button onClick={pasarCamb} value={datosUsu.id} className="btn btn-primary float-center" data-toggle="modal" data-target="#cambiarcontraseña">
                          Cambiar contraseña
                        </button>
                      </div>
                    </div>
                 
                </div>
              </div>
            </div>
          </div>
          {/*<!-->>> CONTENIDO DE PAGINA ARRIBA <<<-->*/}
        </div>
        <Footer /> {/*<!-- Footer -->*/}
      </div>
      <ModalCambiarContrasena valCamb={valueCamb} token={token}/>
      <ModalCerrarSesion /> {/*<!-- Modal Cerrar-->*/}
    </div>
  );
}

export default Perfil;
