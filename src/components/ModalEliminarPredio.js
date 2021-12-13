import React from "react";
import { Link } from "react-router-dom";

function ModalEliminarPredio() {
  return (
    <div className="modal fade" id="eliminarPredioModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Eliminar predio
            </h5>
            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">Seguro que desea eliminar este predio ?</div>
          <div className="modal-footer">
            <Link className="btn btn-danger" to="/predios.html">
              Eliminar
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

export default ModalEliminarPredio;
