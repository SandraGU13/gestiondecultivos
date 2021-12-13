import React from "react";
import ModalHeader from "./ModalHeader";
import { Link } from "react-router-dom";

function ModalCambiarContrasena() {
  return (
    <div className="modal fade" id="cambiarcontraseña" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <ModalHeader titulo="CambiarContrasena" />
          <div className="modal-body">
            <div className="form-group">
              <label className="col-md-12">*Contraseña antigua</label>
              <div className="col-md-12">
                <input type="text" className="form-control form-control-line" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-12">*Nueva contraseña</label>
              <div className="col-md-12">
                <input type="text" className="form-control form-control-line" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-12">*Confirmar nueva contraseña</label>
              <div className="col-md-12">
                <input type="text" className="form-control form-control-line" />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <Link className="btn btn-primary" to="/usuarios">
              Cambiar
            </Link>
            <button className="btn btn-secondary" type="button" data-dismiss="modal">
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalCambiarContrasena;
