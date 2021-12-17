import React from "react";
import ModalHeader from "./ModalHeader";

function ModalAgregarPredio({preAgr}) {
  
  var enviar = (e) => {
    e.preventDefault();
    const datos = {
      nombre: e.target.nombre.value,
      usuario: e.target.usuario.value,
      latitud: e.target.latitud.value,
      longitud: e.target.longitud.value,
    };
    preAgr(datos)
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
              <button className="btn btn-secondary" type="button" data-dismiss="modal" id="cancelModalAg">
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
