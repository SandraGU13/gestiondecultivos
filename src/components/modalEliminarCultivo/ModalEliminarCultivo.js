import React from "react";
import ModalHeader from "../modalHeader";

function ModalEliminarCultivo({valElim,culElim}) {

  var eliminar = (e) => {
    culElim(e.target.value)
  };



  return (
    <div className="modal fade" id="eliminarCultivoModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <ModalHeader titulo="Eliminar cultivo" />
          <div className="modal-body">Seguro que desea eliminar este cultivo ?</div>
          <div className="modal-footer">
            <button className="btn btn-danger" value={valElim} onClick={eliminar}>Eliminar</button>
            <button className="btn btn-secondary" type="button" data-dismiss="modal"  id="cancelModalEl">
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalEliminarCultivo;
