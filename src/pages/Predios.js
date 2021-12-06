import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import ModalCerrarSesion from "../components/ModalCerrarSesion";
import ModalAgregarPredio from "../components/ModalAgregarPredio";
import ModalEditarPredio from "../components/ModalEditarPredio";
import ModalEliminarPredio from "../components/ModalEliminarPredio";
import { Link } from "react-router-dom";

function Predios() {
  return (
    <div id="wrapper"> {/*<!-- Page Wrapper -->*/}
      
      <Sidebar /> {/*<!-- Sidebar -->*/}

      <div id="content-wrapper" className="d-flex flex-column"> {/*<!-- Content Wrapper -->*/}
        
        <div id="content"> {/*<!-- Main Content -->*/}
          
          <Topbar /> {/*<!-- Topbar -->*/}

          {/*<!-->>> CONTENIDO DE LA PAGINA DENTRO DEL DIV CONTAINER-FLUID <<<-->*/}
          <div className="container-fluid"> 
            
            {/*<!-- Page Heading -->*/}
                    <h1 className="h3 mb-2 text-gray-800">Predios</h1>
                    <p className="mb-4"></p>

                    {/*<!-- DataTales Example -->*/}
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Predios</h6>
                            <Link to="#" className="btn btn-primary btn-icon-split float-right" data-toggle="modal" data-target="#agregarPredioModal">
                                <span className="icon text-white-50">
                                    <i className="fas fa-plus"></i>
                                </span>
                                <span className="text">Agregar predio</span>
                            </Link>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Nombre</th>
                                            <th>Latitud</th>
                                            <th>Longitud</th>
                                            <th>Usuario</th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>Id</th>
                                            <th>Nombre</th>
                                            <th>Latitud</th>
                                            <th>Longitud</th>
                                            <th>Usuario</th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        <tr>
                                            <td>0001</td>
                                            <td>Predio 01</td>
                                            <td>11,0084</td>
                                            <td>-74,8216</td>
                                            <td>Nestor</td>
                                            <td><button type="button" className="btn btn-warning" data-toggle="modal" data-target="#editarPredioModal">
                                                    <span className="icon text-white">
                                                    <i className="fas fa-edit"></i>
                                                    </span>
                                                </button>
                                            </td>
                                            <td><button type="button" className="btn btn-danger" data-toggle="modal" data-target="#eliminarPredioModal">
                                                    <span className="icon text-white">
                                                    <i className="fas fa-trash"></i>
                                                    </span>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>0002</td>
                                            <td>Predio 02</td>
                                            <td>11,0153</td>
                                            <td>-74,8279</td>
                                            <td>Keiny</td>
                                            <td><button type="button" className="btn btn-warning" data-toggle="modal" data-target="#editarPredioModal">
                                                    <span className="icon text-white">
                                                    <i className="fas fa-edit"></i>
                                                    </span>
                                                </button>
                                            </td>
                                            <td><button type="button" className="btn btn-danger" data-toggle="modal" data-target="#eliminarPredioModal">
                                                    <span className="icon text-white">
                                                    <i className="fas fa-trash"></i>
                                                    </span>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>0003</td>
                                            <td>Predio 03</td>
                                            <td>10.9903</td>
                                            <td>-74.7867</td>
                                            <td>Sandra</td>
                                            <td><button type="button" className="btn btn-warning" data-toggle="modal" data-target="#eliminarPredioModal">
                                                    <span className="icon text-white">
                                                    <i className="fas fa-edit"></i>
                                                    </span>
                                                </button>
                                            </td>
                                            <td><button type="button" className="btn btn-danger" data-toggle="modal" data-target="#eliminarPredioModal">
                                                    <span className="icon text-white">
                                                    <i className="fas fa-trash"></i>
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

      <ModalAgregarPredio/>
      <ModalEditarPredio/>
      <ModalEliminarPredio/>
      <ModalCerrarSesion /> {/*<!-- Modal Cerrar-->*/}

    </div>
  );
}

export default Predios;
