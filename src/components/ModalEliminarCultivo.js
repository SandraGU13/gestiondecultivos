import React from "react";

function ModalEliminarCultivo() {
  return (
    <div className="modal fade" id="eliminarCultivoModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Eliminar cultivo
            </h5>
            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">Seguro que desea eliminar este cultivo ?</div>
          <div className="modal-footer">
            <button className="btn btn-danger" type="submit">
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

export default ModalEliminarCultivo;
