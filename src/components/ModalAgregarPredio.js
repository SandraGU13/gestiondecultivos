import React from "react";
import ModalHeader from "./ModalHeader";

function ModalAgregarPredio(props) {
  var enviar = (e) => {
    e.preventDefault();

    const data = {
      nombre: e.target.nombre.value,
      usuario: e.target.usuario.children[e.target.usuario.value].text,
      latitud: e.target.latitud.value,
      longitud: e.target.longitud.value,
    };

    fetch("http://localhost:8000/api/agregarPredio", {
      method: 'POST', 
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => {
      console.error('Error:', error)
    })
    .then(response => {
      console.log('Success:', response)
      document.getElementById('cancelModal').click()
      props.actDatos();
    });


    console.log(data);
  };

  return (
    <form onSubmit={enviar}>
      <div className="modal fade" id="agregarPredioModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
          <ModalHeader titulo="Agregar predio" />
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" className="form-control" id="nombre" name="nombre" placeholder="" />
                    {/*<!--<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>-->*/}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="Usuario">Usuario</label>
                    <select className="form-control" name="usuario">
                      <option value="0">Seleccione</option>
                      <option value="1">Sandra</option>
                      <option value="2">Keiny</option>
                      <option value="3">Nestor</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="latitud">Latitud</label>
                    <input type="text" className="form-control" id="latitud" name="latitud" placeholder="" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="longitud">Longitud</label>
                    <input type="text" className="form-control" id="longitud" name="longitud" placeholder="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary" type="submit">
                Agregar
              </button>
              <button className="btn btn-secondary" type="button" data-dismiss="modal" id="cancelModal">
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ModalAgregarPredio;
