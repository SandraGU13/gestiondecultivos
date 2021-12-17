import React from "react";
import ModalHeader from "./ModalHeader";

function ModalEditarPredio({ valEdit, preEdit }) {
  const nombre = React.createRef();
  const usuario = React.createRef();
  const latitud = React.createRef();
  const longitud = React.createRef();

  const buscarPre = (val) => {
    fetch(`http://localhost:8000/api/predio/${val}`)
      .then((response) => response.json())
      .then((data) => {
        nombre.current.value = data.nombre;
        usuario.current.value = data.usuario;
        latitud.current.value = data.latitud;
        longitud.current.value = data.longitud;
      });
  };

  if (valEdit) {
    buscarPre(valEdit);
  }

  var editar = (e) => {
    e.preventDefault();

    const datos = {
      nombre: e.target.nombre.value,
      usuario: e.target.usuario.value,
      latitud: e.target.latitud.value,
      longitud: e.target.longitud.value,
    };
    preEdit(datos);
  };

  return (
    <form onSubmit={editar}>
      <div className="modal fade" id="editarPredioModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <ModalHeader titulo="Editar predio" />
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" className="form-control" ref={nombre} name="nombre" placeholder="" />
                    {/*<!--<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>-->*/}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="tipoUsuario">Usuario</label>
                    <select className="form-control" ref={usuario} name="usuario">
                      <option value="Seleccione">Seleccione</option>
                      <option value="Sandra">Sandra</option>
                      <option value="Keiny">Keiny</option>
                      <option value="Nestor">Nestor</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="latitud">Latitud</label>
                    <input type="text" className="form-control" ref={latitud} name="latitud" placeholder="" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="longitud">Longitud</label>
                    <input type="text" className="form-control" ref={longitud} name="longitud" placeholder="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-warning" type="submit">
                Editar
              </button>
              <button className="btn btn-secondary" type="button" data-dismiss="modal" id="cancelModalEd">
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ModalEditarPredio;
