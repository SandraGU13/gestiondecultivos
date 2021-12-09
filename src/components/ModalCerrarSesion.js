import React from "react";
import ModalHeader from "./ModalHeader";
import { Link } from "react-router-dom";

function ModalCerrarSesion() {
  return (
    <div className="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <ModalHeader titulo="Cerrar sesion" />
          <div className="modal-body">Seguro que desea finalizar la sesion ?</div>
          <div className="modal-footer">
            <Link to="/login" className="btn btn-primary">
              Cerrar sesion
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

export default ModalCerrarSesion;
