import React from "react";
import ModalHeader from "../modalHeader";

function ModalAgregarSemilla({semAgr}) {
  var enviar = (e) => {
    e.preventDefault();
    const datos = {
      nombre: e.target.nombre.value,
      costoAgua: e.target.costoAgua.value,
      costoSemilla: e.target.costoSemilla.value,
      costoFertilizante: e.target.costoFertilizante.value,
    };
    semAgr(datos)
  };
  return (
    /*<!-- Agregar Modal-->*/
    <form onSubmit={enviar}>
      <div className="modal fade" id="agregarSemillaModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
          <ModalHeader titulo="Agregar semilla" />
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" className="form-control" name={"nombre"} placeholder="" required>
                      {/*<!--<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>-->*/}
                    </input>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="precio">Costo de Agua</label>
                    <input type="text" className="form-control" name={"costoAgua"} placeholder="" required></input>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="precio">Costo de Semilla</label>
                    <input type="text" className="form-control" name={"costoSemilla"} placeholder="" required></input>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="precio">Costo de Fertilizante</label>
                    <input type="text" className="form-control" name={"costoFertilizante"} placeholder="" required></input>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary">
                Agregar
              </button>
              <button className="btn btn-secondary" type="button" data-dismiss="modal" id="cancelModalAg">
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ModalAgregarSemilla;
