import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import ModalCerrarSesion from "../components/ModalCerrarSesion";
import ModalAgregarCultivos from "../components/ModalAgregarCultivos";
import ModalEliminarCultivos from "../components/ModalEliminarCultivos";
import ModalEditarCultivos from "../components/ModalEditarCultivos";

function Cultivos() {
  return (
    <div id="wrapper"> {/*<!-- Page Wrapper -->*/}

      <Sidebar /> {/*<!-- Sidebar -->*/}

      <div id="content-wrapper" className="d-flex flex-column"> {/*<!-- Content Wrapper -->*/}

        <div id="content"> {/*<!-- Main Content -->*/}

          <Topbar /> {/*<!-- Topbar -->*/}

          {/*<!-->>> CONTENIDO DE LA PAGINA DENTRO DEL DIV CONTAINER-FLUID <<<-->*/}
          <div className="container-fluid">
            {/* <!-- Page Heading --> */}
            <h1 className="h3 mb-2 text-gray-800">Cultivos</h1>
            <p className="mb-4"></p>

            {/*<!-- DataTales Example -->*/}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Cultivos</h6>
                <a to="" className="btn btn-primary btn-icon-split float-right" data-toggle="modal" data-target="#agregarCultivoModal">
                  <span className="icon text-white-50">
                    <i className="fas fa-plus"></i>
                  </span>
                  <span className="text">Agregar cultivo</span>
                </a>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Tipo de cultivo</th>
                        <th>Area (ha)</th>
                        <th>Cantidad Semillas (ha)</th>
                        <th>Tiempo del cultivo</th>
                        <th>Metros cubicos de agua</th>
                        <th>Kg Fertilizante (ha)</th>
                        <th>Tiempo necesario para la recoleccion (ha)</th>
                        <th>Kg recolectados (ha)</th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tfoot>
                      <tr>
                        <th>Id</th>
                        <th>Tipo de cultivo</th>
                        <th>Area (ha)</th>
                        <th>Cantidad Semillas (ha)</th>
                        <th>Tiempo del cultivo</th>
                        <th>Metros cubicos de agua</th>
                        <th>Kg Fertilizante (ha)</th>
                        <th>Tiempo necesario para la recoleccion (ha)</th>
                        <th>Kg recolectados (ha)</th>
                        <th></th>
                        <th></th>
                      </tr>
                    </tfoot>
                    <tbody>
                      <tr>
                        <td>0001</td>
                        <td>001</td>
                        <td>15</td>
                        <td>1500</td>
                        <td>6</td>
                        <td>1300</td>
                        <td>200</td>
                        <td>7</td>
                        <td>500</td>
                        <td><button type="button" className="btn btn-warning" data-toggle="modal" data-target="#editarCultivoModal">
                          <span className="icon text-white">
                            <i className="fas fa-edit"></i>
                          </span>
                        </button>
                        </td>
                        <td><button type="button" className="btn btn-danger" data-toggle="modal" data-target="#eliminarCultivoModal">
                          <span className="icon text-white">
                            <i className="fas fa-trash"></i>
                          </span>
                        </button>
                        </td>
                      </tr>
                      <tr>
                        <td>0002</td>
                        <td>002</td>
                        <td>7</td>
                        <td>1100</td>
                        <td>8</td>
                        <td>1800</td>
                        <td>300</td>
                        <td>8</td>
                        <td>450</td>
                        <td><button type="button" className="btn btn-warning" data-toggle="modal" data-target="#editarCultivoModal">
                          <span className="icon text-white">
                            <i className="fas fa-edit"></i>
                          </span>
                        </button>
                        </td>
                        <td><button type="button" className="btn btn-danger" data-toggle="modal" data-target="#eliminarCultivoModal">
                          <span className="icon text-white">
                            <i className="fas fa-trash"></i>
                          </span>
                        </button>
                        </td>
                      </tr>
                      <tr>
                        <td>0003</td>
                        <td>002</td>
                        <td>12</td>
                        <td>1300</td>
                        <td>6</td>
                        <td>1600</td>
                        <td>350</td>
                        <td>5</td>
                        <td>720</td>
                        <td><button type="button" className="btn btn-warning" data-toggle="modal" data-target="#editarCultivoModal">
                          <span className="icon text-white">
                            <i className="fas fa-edit"></i>
                          </span>
                        </button>
                        </td>
                        <td><button type="button" className="btn btn-danger" data-toggle="modal" data-target="#eliminarCultivoModal">
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

      <ModalCerrarSesion /> {/*<!-- Modal Cerrar-->*/}
      <ModalAgregarCultivos /> {/*<!-- Modal Agregar-->*/}
      <ModalEliminarCultivos /> {/*<!-- Modal Eliminar-->*/}
      <ModalEditarCultivos /> {/*<!-- Modal Editar-->*/}


    </div>
  );
}

export default Cultivos;
