import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import ModalCerrarSesion from "../components/ModalCerrarSesion";
import ModalAgregarSemilla from "../components/ModalAgregarSemilla";
import ModalEditarSemilla from "../components/ModalEditarSemilla";
import { Link } from "react-router-dom";
import ModalEliminarSemilla from "../components/ModalEliminarSemilla";

function Semillas() {
  return (
    <div id="wrapper"> {/*<!-- Page Wrapper -->*/}
      
      <Sidebar /> {/*<!-- Sidebar -->*/}

      <div id="content-wrapper" className="d-flex flex-column"> {/*<!-- Content Wrapper -->*/}
        
        <div id="content"> {/*<!-- Main Content -->*/}
          
          <Topbar /> {/*<!-- Topbar -->*/}

          {/*<!-->>> CONTENIDO DE LA PAGINA DENTRO DEL DIV CONTAINER-FLUID <<<-->*/}
          <div className="container-fluid"> 

          {/*<!-- Page Heading -->*/}
                    <h1 class="h3 mb-2 text-gray-800">Semillas</h1>
                    <p class="mb-4"></p>

                    {/*<!-- DataTales Example -->*/}
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Semillas</h6>
                            <Link to="#" class="btn btn-primary btn-icon-split float-right" data-toggle="modal" data-target="#agregarSemillaModal">
                                <span class="icon text-white-50">
                                    <i class="fas fa-plus"></i>
                                </span>
                                <span class="text">Agregar semillas</span>
                            </Link>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Descripcion</th>
                                            <th>Costo de Agua (m^3)</th>
                                            <th>Costo de Semilla</th>
                                            <th>Costo de Fertilizante (Kg)</th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>Id</th>
                                            <th>Descripcion</th>
                                            <th>Costo de Agua (m^3)</th>
                                            <th>Costo de Semilla</th>
                                            <th>Costo de Fertilizante (Kg)</th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        <tr>
                                            <td>0001</td>
                                            <td>Cereales</td>
                                            <td>200</td>
                                            <td>350</td>
                                            <td>250</td>
                                            <td><button type="button" class="btn btn-warning" data-toggle="modal" data-target="#editarSemillaModal">
                                                    <span class="icon text-white">
                                                    <i class="fas fa-edit"></i>
                                                    </span>
                                                    
                                                </button>
                                            </td>
                                            <td><button type="button" class="btn btn-danger" data-toggle="modal" data-target="#eliminarSemillaModal">
                                                    <span class="icon text-white">
                                                    <i class="fas fa-trash"></i>
                                                    </span>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>0002</td>
                                            <td>Leguminosas</td>
                                            <td>150</td>
                                            <td>180</td>
                                            <td>250</td>
                                            <td><button type="button" class="btn btn-warning" data-toggle="modal" data-target="#editarSemillaModal">
                                                    <span class="icon text-white">
                                                    <i class="fas fa-edit"></i>
                                                    </span>
                                                </button>
                                            </td>
                                            <td><button type="button" class="btn btn-danger" data-toggle="modal" data-target="#eliminarSemillaModal">
                                                    <span class="icon text-white">
                                                    <i class="fas fa-trash"></i>
                                                    </span>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>0003</td>
                                            <td>Hortalizas</td>
                                            <td>180</td>
                                            <td>300</td>
                                            <td>230</td>
                                            <td><button type="button" class="btn btn-warning" data-toggle="modal" data-target="#editarSemillaModal">
                                                    <span class="icon text-white">
                                                    <i class="fas fa-edit"></i>
                                                    </span>
                                                </button>
                                            </td>
                                            <td ><button type="button" class="btn btn-danger" data-toggle="modal" data-target="#eliminarSemillaModal">
                                                    <span class="icon text-white">
                                                    <i class="fas fa-trash"></i>
                                                    </span>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
          </div>
          {/*<!-->>> CONTENIDO DE PAGINA ARRIBA <<<-->*/}

        </div>

        <Footer /> {/*<!-- Footer -->*/}

      </div>

      <ModalCerrarSesion /> {/*<!-- Modal Cerrar-->*/}
      <ModalAgregarSemilla /> {/*<!-- Modal Agregar Semilla-->*/}
      <ModalEditarSemilla /> {/*<!-- Modal Editar Semilla-->*/}
      <ModalEliminarSemilla /> {/*<!-- Modal Eliminar Semilla-->*/}
    </div>
  );
}

export default Semillas;
