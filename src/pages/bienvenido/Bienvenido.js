import React, { useEffect,} from "react";
import Sidebar from "../../components/sidebar";
import Topbar from "../../components/topbar";
import Footer from "../../components/footer";
import ModalCerrarSesion from "../../components/modalCerrarSesion";
import { useNavigate } from "react-router-dom";

function Bienvenido({token,usuEmail}) {

  let navegacion = useNavigate()

  useEffect(() => {
    if (!token){
      navegacion('/login')
    }
  })

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
          <Topbar usuEmail={usuEmail}/> {/*<!-- Topbar -->*/}
          {/*<!-->>> CONTENIDO DE LA PAGINA DENTRO DEL DIV CONTAINER-FLUID <<<-->*/}
          <div className="container-fluid">
            <h1 className="h3 mb-2 text-gray-800">Bienvenido</h1> {/*<!-- Page Heading -->*/}
            <p className="mb-4"></p>
            <div className="d-none d-sm-block">
              <img src="img/fondo.png" alt="" />
            </div>
            <div className="d-block d-sm-none">
              <img src="img/cultivos.jpg" alt="" />
            </div>
          </div>
          {/*<!-->>> CONTENIDO DE PAGINA ARRIBA <<<-->*/}
        </div>
        <Footer /> {/*<!-- Footer -->*/}
      </div>
      <ModalCerrarSesion /> {/*<!-- Modal Cerrar-->*/}
    </div>
  );
}

export default Bienvenido;
