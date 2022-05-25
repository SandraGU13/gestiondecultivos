import React from "react";
import ModalHeader from "../modalHeader";

function ModalEliminarPredio({valElim,preElim}) {

  var eliminar = (e) => {
    preElim(e.target.value)
  };



  return (
    <div className="modal fade" id="eliminarPredioModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <ModalHeader titulo="Eliminar predio" />
          <div className="modal-body">Seguro que desea eliminar este predio ?</div>
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

export default ModalEliminarPredio;
