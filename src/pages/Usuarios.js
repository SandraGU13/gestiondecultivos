import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import ModalCerrarSesion from "../components/ModalCerrarSesion";
import ModalAgregarUsuario from "../components/ModalAgregarUsuario";
import ModalEditarUsuario from "../components/ModalEditarUsuario";
import ModalEliminarUsuario from "../components/ModalEliminarUsuario";
import { Link } from "react-router-dom";

function Usuarios() {
  return (
    <div id="wrapper"> {/*<!-- Page Wrapper -->*/}
      
      <Sidebar /> {/*<!-- Sidebar -->*/}
      <div id="content-wrapper" className="d-flex flex-column"> {/*<!-- Content Wrapper -->*/}
        
        <div id="content"> {/*<!-- Main Content -->*/}
          
          <Topbar /> {/*<!-- Topbar -->*/}

          {/*<!-->>> CONTENIDO DE LA PAGINA DENTRO DEL DIV CONTAINER-FLUID <<<-->*/}
          <div className="container-fluid">
            {/*<!-- Page Heading -->*/}
            <h1 className="h3 mb-2 text-gray-800">Usuarios</h1>
            <p className="mb-4"></p>

            {/*<!-- DataTales Example -->*/}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Usuarios</h6>
                <Link to="#" className="btn btn-primary btn-icon-split float-right" data-toggle="modal" data-target="#agregarUsuarioModal">
                  <span className="icon text-white-50">
                    <i className="fas fa-plus"></i>
                  </span>
                  <span className="text">Agregar usuario</span>
                </Link>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                        <th>Telefono</th>
                        <th>Tipo de usuario</th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tfoot>
                      <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                        <th>Telefono</th>
                        <th>Tipo de usuario</th>
                        <th></th>
                        <th></th>
                      </tr>
                    </tfoot>
                    <tbody>
                      <tr>
                        <td>0001</td>
                        <td>Sandra</td>
                        <td>Gutierrez</td>
                        <td>SandraGutierrez@gmail.com</td>
                        <td>300-13465789</td>
                        <td>Configuracion</td>
                        <td>
                          <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#editarUsuarioModal">
                            <span className="icon text-white">
                              <i className="fas fa-edit"></i>
                            </span>
                          </button>
                        </td>
                        <td>
                          <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#eliminarUsuarioModal">
                            <span className="icon text-white">
                              <i className="fas fa-trash"></i>
                            </span>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>0002</td>
                        <td>Keyni</td>
                        <td>Salgado</td>
                        <td>KeyniSalgado@gmail.com</td>
                        <td>300-13465755</td>
                        <td>Gestion</td>
                        <td>
                          <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#editarUsuarioModal">
                            <span className="icon text-white">
                              <i className="fas fa-edit"></i>
                            </span>
                          </button>
                        </td>
                        <td>
                          <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#eliminarUsuarioModal">
                            <span className="icon text-white">
                              <i className="fas fa-trash"></i>
                            </span>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>0003</td>
                        <td>Nestor</td>
                        <td>Barrios</td>
                        <td>nestorBarrios@gmail.com</td>
                        <td>300-13465788</td>
                        <td>Gestion</td>
                        <td>
                          <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#editarUsuarioModal">
                            <span className="icon text-white">
                              <i className="fas fa-edit"></i>
                            </span>
                          </button>
                        </td>
                        <td>
                          <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#eliminarUsuarioModal">
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
      <ModalAgregarUsuario/>
      <ModalEditarUsuario/>
      <ModalEliminarUsuario/>
      <ModalCerrarSesion /> {/*<!-- Modal Cerrar-->*/}
    </div>
  );
}

export default Usuarios;
