import React from "react";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import Footer from "../../components/Footer";
import ModalCerrarSesion from "../../components/ModalCerrarSesion";
import ModalAgregarUsuario from "../../components/ModalAgregarUsuario";
import ModalEditarUsuario from "../../components/ModalEditarUsuario";
import ModalEliminarUsuario from "../../components/ModalEliminarUsuario";

import { useState, useEffect } from "react";

function Usuarios() {
  const [usuariosDB, setUsariosDB] = useState([]);
  const [valueEdit, setValueEdit] = useState('');
  const [valueElim, setValueElim] = useState('');

  let cargarDatos = () => {
    fetch("http://localhost:8000/api/usuarios")
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setUsariosDB(data);
      });
  };

  let pasarEditar = (e) => {
    setValueEdit(e.target.value)
  }

  let pasarEliminar = (e) => {
    setValueElim(e.target.value)
  }

  let buscar = (e) => {
    let text = e.target.value;
    if (text.length === 0) {
      cargarDatos();
    } else {
      fetch("http://localhost:8000/api/buscarUsuario", {
        method: "POST",
        body: JSON.stringify({ buscar: text }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .catch((error) => {
          console.error("Error:", error);
        })
        .then((response) => {
          //console.log("Success:", response);
          setUsariosDB(response);
        });
    }
  };

  var agregar = (datos) => {

    fetch("http://localhost:8000/api/agregarUsuario", {
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
      console.log('Success:', response)
      document.getElementById('cancelModalAg').click()
      cargarDatos();
    });
  };

  var editarUsuario = (datos) => {

    fetch(`http://localhost:8000/api/editarUsuario/${valueEdit}`, {
      method: 'PUT',
      body: JSON.stringify(datos),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => {
      console.error('Error:', error)
    })
    .then(response => {
      console.log('Success:', response)
      document.getElementById('cancelModalEd').click()
      cargarDatos();
    });
  };

  var eliminarUsuario = (id) => {

    fetch(`http://localhost:8000/api/eliminarUsuario/${id}`, {
      method: 'DELETE',
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => {
      console.error('Error:', error)
    })
    .then(response => {
      console.log('Success:', response)
      document.getElementById('cancelModalEl').click()
      cargarDatos();
    });
  };


  useEffect(() => {
    cargarDatos();
  }, []);

  return (
    <div id="wrapper">
      {" "}
      {/*<!-- Page Wrapper -->*/}
      <Sidebar /> {/*<!-- Sidebar -->*/}
      <div id="content-wrapper" className="d-flex flex-column">
        {/*<!-- Content Wrapper -->*/}
        <div id="content">
          {" "}
          {/*<!-- Main Content -->*/}
          <Topbar /> {/*<!-- Topbar -->*/}
          {/*<!-->>> CONTENIDO DE LA PAGINA DENTRO DEL DIV CONTAINER-FLUID <<<-->*/}
          <div className="container-fluid">
            {/*<!-- Page Heading -->*/}
            <h1 className="h3 mb-2 text-gray-800">Usuarios</h1>
            <p className="mb-4"></p>

            {/*<!-- DataTales Example -->*/}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <div className="">
                  <h6 className="m-0 font-weight-bold text-primary">Usuarios</h6>
                </div>
                <div className="row float-right">
                  <div className="">
                    <button className="btn btn-primary btn-icon-split float-right" data-toggle="modal" data-target="#agregarUsuarioModal">
                      <span className="icon text-white-50">
                        <i className="fas fa-plus"></i>
                      </span>
                      <span className="text">Agregar usuario</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <label htmlFor="search">
                    Buscar:&nbsp;
                    <input id="search" type="text" onChange={buscar} />
                  </label>
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col">Id</th>
                          <th scope="col">Nombre</th>
                          <th scope="col">Apellido</th>
                          <th scope="col">Email</th>
                          <th scope="col">Telefono</th>
                          <th scope="col">Tipo de usuario</th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {usuariosDB.map((usuario) => {
                          return (
                            <tr key={usuario._id}>
                              <td>{usuario._id}</td>
                              <td>{usuario.nombre}</td>
                              <td>{usuario.apellido}</td>
                              <td>{usuario.email}</td>
                              <td>{usuario.telefono}</td>
                              <td>{usuario.tipoUsuario}</td>
                              <td>
                                <button className="btn btn-warning" data-toggle="modal" data-target="#editarUsuarioModal" value={usuario._id} onClick={pasarEditar}>
                                    Editar
                                </button>
                              </td>
                              <td>
                                <button className="btn btn-danger" data-toggle="modal" data-target="#eliminarUsuarioModal" value={usuario._id} onClick={pasarEliminar}>
                                  Eliminar
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*<!-->>> CONTENIDO DE PAGINA ARRIBA <<<-->*/}
        </div>
        <Footer /> {/*<!-- Footer -->*/}
      </div>
      <ModalAgregarUsuario usuAgr={agregar}/>
      <ModalEditarUsuario valEdit={valueEdit} usuEdit={editarUsuario}/>
      <ModalEliminarUsuario valElim={valueElim} usuElim={eliminarUsuario}/>
      <ModalCerrarSesion /> {/*<!-- Modal Cerrar-->*/}
    </div>
  );
}

export default Usuarios;
