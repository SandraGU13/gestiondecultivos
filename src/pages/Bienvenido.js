import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import ModalCerrarSesion from "../components/ModalCerrarSesion";

function Bienvenido() {
  return (
    <div id="wrapper"> {/*<!-- Page Wrapper -->*/}
      
      <Sidebar /> {/*<!-- Sidebar -->*/}

      <div id="content-wrapper" className="d-flex flex-column"> {/*<!-- Content Wrapper -->*/}
        
        <div id="content"> {/*<!-- Main Content -->*/}
          
          <Topbar /> {/*<!-- Topbar -->*/}

          {/*<!-->>> CONTENIDO DE LA PAGINA DENTRO DEL DIV CONTAINER-FLUID <<<-->*/}
          <div className="container-fluid"> 
            
            <h1 className="h3 mb-2 text-gray-800">Bienvenido</h1> {/*<!-- Page Heading -->*/}
            <p className="mb-4"></p>
            <div className="col-lg-0 d-none d-lg-block">
              <img src="img/fondo.png" alt="" />
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
