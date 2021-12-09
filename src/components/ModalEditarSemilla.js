import React from "react";

function ModalEditarSemilla() {
  var enviar = (e) => {
    e.preventDefault();

    const data = {
      nombre: e.target.nombre.value,
      cost_agua: e.target.cost_agua.value,
      cost_semilla: e.target.cost_semilla.value,
      cost_fert: e.target.cost_fert.value,
    };
    console.log(data);
  };
  return (
    <form onSubmit={enviar}>
      <div className="modal fade" id="editarSemillaModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="text-gray-800" id="exampleModalLabel">
                Editar semilla
              </h5>
              <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label for="nombre">Nombre</label>
                    <input type="text" className="form-control" name={"nombre"} placeholder="" />
                    {/*<!--<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>-->*/}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label for="precio">Costo de Agua</label>
                    <input type="text" className="form-control" name={"cost_agua"} placeholder="" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label for="precio">Costo de Semilla</label>
                    <input type="text" className="form-control" name={"cost_semilla"} placeholder="" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label for="precio">Costo de Fertilizante</label>
                    <input type="text" className="form-control" name={"cost_fert"} placeholder="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-warning" type="submit">
                Editar
              </button>
              <button className="btn btn-secondary" type="button" data-dismiss="modal">
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ModalEditarSemilla;
