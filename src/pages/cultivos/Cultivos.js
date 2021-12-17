import React from "react";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import Footer from "../../components/Footer";
import ModalCerrarSesion from "../../components/ModalCerrarSesion";
import ModalAgregarCultivo from "../../components/ModalAgregarCultivo";
import ModalEliminarCultivo from "../../components/ModalEliminarCultivo";
import ModalEditarCultivo from "../../components/ModalEditarCultivo";

import { useState, useEffect } from "react";

function Cultivos() {

  const [cultivosDB, setCultivosDB] = useState([]);
  const [valueEdit, setValueEdit] = useState('');
  const [valueElim, setValueElim] = useState('');

  let cargarDatos = () => {
    fetch("http://localhost:8000/api/cultivos")
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setCultivosDB(data);
      });
  };

  let pasarEditar = (e) => {
    //console.log(e.target.value)
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
      fetch("http://localhost:8000/api/buscarCultivo", {
        method: 'POST', 
        body: JSON.stringify({ buscar: text}),
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => {
        console.error('Error:', error)
      })
      .then(response => {
        console.log('Success:', response)
        setCultivosDB(response);
      });
    }
  }

  var agregar = (datos) => {

    fetch("http://localhost:8000/api/agregarCultivo", {
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
      cargarDatos()
    });
  };

  var editarCultivo = (datos) => {

    fetch(`http://localhost:8000/api/editarCultivo/${valueEdit}`, {
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
      //console.log('Success:', response)
      document.getElementById('cancelModalEd').click()
      cargarDatos();
    });
  };

  var eliminarCultivo = (id) => {

    fetch(`http://localhost:8000/api/eliminarCultivo/${id}`, {
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
    cargarDatos()
  },[])

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
            {/*<!-- Page Heading -->*/}
            <h1 className="h3 mb-2 text-gray-800">Cultivos</h1>
            <p className="mb-4"></p>

            {/*<!-- DataTales Example -->*/}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <div className="">
                  <h6 className="m-0 font-weight-bold text-primary">Cultivos</h6>
                </div>
                <div className="row float-right">
                  <div className="">
                    <button to="#" className="btn btn-primary btn-icon-split float-right" data-toggle="modal" data-target="#agregarCultivoModal">
                      <span className="icon text-white-50">
                        <i className="fas fa-plus"></i>
                      </span>
                      <span className="text">Agregar cultivos</span>
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
                          <th scope="col">Semilla</th>
                          <th scope="col">Area</th>
                          <th scope="col">Cantidad de semillas</th>
                          <th scope="col">Tiempo de cultivo</th>
                          <th scope="col">Metros cubicos de agua</th>
                          <th scope="col">Cantidad de fertilizante</th>
                          <th scope="col">Tiempo de recolección</th>
                          <th scope="col">kilogramos recolectados</th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {cultivosDB.map((cultivo) => {
                          return (
                            <tr key={cultivo._id}>
                              <td>{cultivo._id}</td>
                              <td>{cultivo.semilla}</td>
                              <td>{cultivo.area}</td>
                              <td>{cultivo.cantidadSemillas}</td>
                              <td>{cultivo.tiempoCultivo}</td>
                              <td>{cultivo.agua}</td>
                              <td>{cultivo.cantidadFertilizante}</td>
                              <td>{cultivo.tiempoRecoleccion}</td>
                              <td>{cultivo.kgRecolectados}</td>
                              <td>
                                <button className="btn btn-warning" data-toggle="modal" data-target="#editarCultivoModal" value={cultivo._id} onClick={pasarEditar}>
                                  Editar
                                </button>
                              </td>
                              <td>
                                <button className="btn btn-danger" data-toggle="modal" data-target="#eliminarCultivoModal"  value={cultivo._id} onClick={pasarEliminar}>
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
      <ModalAgregarCultivo culAgr={agregar}/> {/*<!-- Modal Agregar-->*/}
      <ModalEditarCultivo valEdit={valueEdit} culEdit={editarCultivo}/> {/*<!-- Modal Editar-->*/}
      <ModalEliminarCultivo valElim={valueElim} culElim={eliminarCultivo}/> {/*<!-- Modal Eliminar-->*/}
      <ModalCerrarSesion /> {/*<!-- Modal Cerrar-->*/}
    </div>
  );
}
export default Cultivos;
