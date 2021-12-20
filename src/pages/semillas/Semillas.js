import React from "react";
import Sidebar from "../../components/sidebar";
import Topbar from "../../components/topbar";
import Footer from "../../components/footer";
import ModalCerrarSesion from "../../components/modalCerrarSesion";
import ModalAgregarSemilla from "../../components/modalAgregarSemilla";
import ModalEditarSemilla from "../../components/modalEditarSemilla";
import ModalEliminarSemilla from "../../components/modalEliminarSemilla";
import {NotificationManager} from 'react-notifications';
import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";

function Semillas({token,usuEmail}) {

  let navegacion = useNavigate()

  const [semillasDB, setSemillasDB] = useState([]);
  const [valueEdit, setValueEdit] = useState('');
  const [valueElim, setValueElim] = useState('');

  let cargarDatos = () => {
    fetch("http://localhost:8000/api/semillas",{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token-jwt": token
      },
    })
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setSemillasDB(data);
      });
  };

  let pasarEditar = (e) => {
    setValueEdit(e.target.value)
  }

  let pasarEliminar = (e) => {
    setValueElim(e.target.value)
  }

  let buscar = (e) => {
    let text = e.target.value
    if (text.length === 0) {
      cargarDatos();
    }else{
      fetch("http://localhost:8000/api/buscarSemilla", {
        method: 'POST', 
        body: JSON.stringify({ buscar: text}),
        headers:{
          'Content-Type': 'application/json',
          "auth-token-jwt": token
        }
      }).then(res => res.json())
      .catch(error => {
        console.error('Error:', error)
      })
      .then(response => {
        console.log('Success:', response)
        setSemillasDB(response);
      });
    }
  }

  var agregar = (datos) => {

    fetch("http://localhost:8000/api/agregarSemilla", {
      method: 'POST', 
      body: JSON.stringify(datos),
      headers:{
        'Content-Type': 'application/json',
        "auth-token-jwt": token
      }
    }).then(res => res.json())
    .catch(error => {
      console.error('Error:', error)
    })
    .then(response => {
      NotificationManager.success(response.mensaje)
      document.getElementById('cancelModalAg').click()
      cargarDatos();
    });
  };

  var editarSemilla = (datos) => {

    fetch(`http://localhost:8000/api/editarSemilla/${valueEdit}`, {
      method: 'PUT',
      body: JSON.stringify(datos),
      headers:{
        'Content-Type': 'application/json',
        "auth-token-jwt": token
      }
    }).then(res => res.json())
    .catch(error => {
      console.error('Error:', error)
    })
    .then(response => {
      NotificationManager.success(response.mensaje)
      document.getElementById('cancelModalEd').click()
      cargarDatos();
    });
  };

  var eliminarSemilla = (id) => {

    fetch(`http://localhost:8000/api/eliminarSemilla/${id}`, {
      method: 'DELETE',
      headers:{
        'Content-Type': 'application/json',
        "auth-token-jwt": token
      }
    }).then(res => res.json())
    .catch(error => {
      console.error('Error:', error)
    })
    .then(response => {
      NotificationManager.success(response.mensaje)
      document.getElementById('cancelModalEl').click()
      cargarDatos();
    });
  };

  useEffect(() => {
    console.log('0')
    if (!token){
      navegacion('/login')
    }else{
      cargarDatos();
    }
    // eslint-disable-next-line
  },[]);

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
          <Topbar  usuEmail={usuEmail}/> {/*<!-- Topbar -->*/}
          {/*<!-->>> CONTENIDO DE LA PAGINA DENTRO DEL DIV CONTAINER-FLUID <<<-->*/}
          <div className="container-fluid">
            {/*<!-- Page Heading -->*/}
            <h1 className="h3 mb-2 text-gray-800">Semillas</h1>
            <p className="mb-4"></p>

            {/*<!-- DataTales Example -->*/}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <div className="">
                  <h6 className="m-0 font-weight-bold text-primary">Semillas</h6>
                </div>
                <div className="row float-right">
                  <div className="">
                    <button to="#" className="btn btn-primary btn-icon-split float-right" data-toggle="modal" data-target="#agregarSemillaModal">
                      <span className="icon text-white-50">
                        <i className="fas fa-plus"></i>
                      </span>
                      <span className="text">Agregar semillas</span>
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
                          <th scope="col">Costo de agua</th>
                          <th scope="col">Costo de semilla</th>
                          <th scope="col">Costo de fertilizante</th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {semillasDB.map((semilla) => {
                          return (
                            <tr key={semilla._id}>
                              <td>{semilla._id}</td>
                              <td>{semilla.nombre}</td>
                              <td>{semilla.costoAgua}</td>
                              <td>{semilla.costoSemilla}</td>
                              <td>{semilla.costoFertilizante}</td>
                              <td>
                                <button className="btn btn-warning" data-toggle="modal" data-target="#editarSemillaModal" value={semilla._id} onClick={pasarEditar}>
                                  Editar
                                </button>
                              </td>
                              <td>
                                <button className="btn btn-danger" data-toggle="modal" data-target="#eliminarSemillaModal" value={semilla._id} onClick={pasarEliminar}>
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
      <ModalAgregarSemilla semAgr={agregar}/> {/*<!-- Modal Agregar Semilla-->*/}
      <ModalEditarSemilla valEdit={valueEdit} semEdit={editarSemilla} token={token}/> {/*<!-- Modal Editar Semilla-->*/}
      <ModalEliminarSemilla valElim={valueElim} semElim={eliminarSemilla}/> {/*<!-- Modal Eliminar Semilla-->*/}
      <ModalCerrarSesion /> {/*<!-- Modal Cerrar-->*/}
    </div>
  );
}

export default Semillas;
