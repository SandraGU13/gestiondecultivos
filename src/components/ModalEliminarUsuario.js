import React from "react";
import ModalHeader from "./ModalHeader";
import { Link } from "react-router-dom";

function ModalEliminarUsuario() {
  return (
    <div className="modal fade" id="eliminarUsuarioModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
        <ModalHeader titulo="Eliminar usuario"/>
          <div className="modal-body">Seguro que desea eliminar este usuario ?</div>
          <div className="modal-footer">
            <button className="btn btn-danger">
              Eliminar
            </button>
            <button className="btn btn-secondary" type="button" data-dismiss="modal">
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalEliminarUsuario;
