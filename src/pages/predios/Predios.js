import React from "react";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import Footer from "../../components/Footer";
import ModalCerrarSesion from "../../components/ModalCerrarSesion";
import ModalAgregarPredio from "../../components/ModalAgregarPredio";
import ModalEditarPredio from "../../components/ModalEditarPredio";
import ModalEliminarPredio from "../../components/ModalEliminarPredio";

import { useState, useEffect } from "react";

function Predios() {
  const [prediosDB, setPrediosDB] = useState([]);
  const [valueEdit, setValueEdit] = useState('');

  let cargarDatos = () => {
    fetch("http://localhost:8000/api/predios")
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setPrediosDB(data);
      });
  };

  
  let pasarEditar = (e) => {
    setValueEdit(e.target.value)
  }

  let buscar = (e) => {
    let text = e.target.value
    if (text.length === 0) {
      cargarDatos();
    }else{
      fetch("http://localhost:8000/api/buscarPredio", {
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
        setPrediosDB(response);
      });
    }
  }

  var agregar = (datos) => {

    fetch("http://localhost:8000/api/agregarPredio", {
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

  var editarPredio = (datos) => {

    fetch(`http://localhost:8000/api/editarPredio/${valueEdit}`, {
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
            <h1 className="h3 mb-2 text-gray-800">Predios</h1>
            <p className="mb-4"></p>

            {/*<!-- DataTales Example -->*/}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <div className="">
                  <h6 className="m-0 font-weight-bold text-primary">Predios</h6>
                </div>
                <div className="row float-right">
                  <div className="">
                    <button to="#" className="btn btn-primary btn-icon-split float-right" data-toggle="modal" data-target="#agregarPredioModal">
                      <span className="icon text-white-50">
                        <i className="fas fa-plus"></i>
                      </span>
                      <span className="text">Agregar Predios</span>
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
                          <th scope="col">Latitud</th>
                          <th scope="col">Longitud</th>
                          <th scope="col">Usuario</th>
                          <th scope="col"></th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {prediosDB.map((predio) => {
                          return (
                            <tr key={predio._id}>
                              <td>{predio._id}</td>
                              <td>{predio.nombre}</td>
                              <td>{predio.latitud}</td>
                              <td>{predio.longitud}</td>
                              <td>{predio.usuario}</td>
                              <td>
                                <button className="btn btn-warning" data-toggle="modal" data-target="#editarPredioModal" value={predio._id} onClick={pasarEditar}>
                                  Editar
                                </button>
                              </td>
                              <td>
                                <button className="btn btn-danger" data-toggle="modal" data-target="#eliminarPredioModal"  value={predio._id}>
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
      <ModalAgregarPredio preAgr={agregar}/>
      <ModalEditarPredio valEdit={valueEdit} preEdit={editarPredio}/>
      <ModalEliminarPredio />
      <ModalCerrarSesion /> {/*<!-- Modal Cerrar-->*/}
    </div>
  );
}

export default Predios;