import React from "react";
import ModalHeader from "../modalHeader";
import { useNavigate } from "react-router-dom";

function ModalCerrarSesion() {

  let navegacion = useNavigate()

  let cerrar = () => {
    document.getElementById('logoutModal').click()
    navegacion('/login')
  }

  return (
    <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <ModalHeader titulo="Cerrar sesion" />
          <div className="modal-body">Seguro que desea finalizar la sesion ?</div>
          <div className="modal-footer">
            <button className="btn btn-primary" onClick={cerrar}>
              Cerrar sesion
            </button>
            <button className="btn btn-secondary" type="button" data-dismiss="modal" id="logoutModal">
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalCerrarSesion;
