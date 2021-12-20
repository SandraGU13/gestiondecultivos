import React from "react";
import ModalHeader from "../modalHeader";

function ModalCambiarContrasena() {

  let cambiar = (e) => {
    e.preventDefault();
    console.log("AAA")
  }

  return (
    <form onSubmit={cambiar}>
      <div className="modal fade" id="cambiarcontraseña" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
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
              <button type="submit" className="btn btn-primary" to="/usuarios">
                Cambiar
              </button>
              <button className="btn btn-secondary" type="button" data-dismiss="modal" id="modalCambCont">
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ModalCambiarContrasena;
