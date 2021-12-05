import React from "react";
import ModalHeader from "./ModalHeader";
import { Link } from "react-router-dom";

function ModalEliminarUsuario() {
  return (
    <div class="modal fade" id="eliminarUsuarioModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
        <ModalHeader titulo="Eliminar usuario"/>
          <div class="modal-body">Seguro que desea eliminar este usuario ?</div>
          <div class="modal-footer">
            <Link to="/usuarios" class="btn btn-danger">
              Eliminar
            </Link>
            <button class="btn btn-secondary" type="button" data-dismiss="modal">
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalEliminarUsuario;
