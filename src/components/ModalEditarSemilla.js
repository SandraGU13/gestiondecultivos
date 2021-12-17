import React from "react";
import ModalHeader from "./ModalHeader";

function ModalEditarSemilla({ valEdit, semEdit }) {
  const nombre = React.createRef();
  const costoAgua = React.createRef();
  const costoSemilla = React.createRef();
  const costoFertilizante = React.createRef();

  const buscarSem = (val) => {
    fetch(`http://localhost:8000/api/semilla/${val}`)
      .then((response) => response.json())
      .then((data) => {
        nombre.current.value = data.nombre;
        costoAgua.current.value = data.costoAgua;
        costoSemilla.current.value = data.costoSemilla;
        costoFertilizante.current.value = data.costoFertilizante;
      });
  };

  if (valEdit) {
    buscarSem(valEdit);
  }

  var editar = (e) => {
    e.preventDefault();

    const datos = {
      nombre: e.target.nombre.value,
      costoAgua: e.target.costoAgua.value,
      costoSemilla: e.target.costoSemilla.value,
      costoFertilizante: e.target.costoFertilizante.value,
    };
    semEdit(datos);
  };
  return (
    <form onSubmit={editar}>
      <div className="modal fade" id="editarSemillaModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <ModalHeader titulo="Editar semilla" />
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" className="form-control" ref={nombre} name={"nombre"} placeholder="" />
                    {/*<!--<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>-->*/}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="precio">Costo de Agua</label>
                    <input type="text" className="form-control" ref={costoAgua} name={"costoAgua"} placeholder="" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="precio">Costo de Semilla</label>
                    <input type="text" className="form-control" ref={costoSemilla} name={"costoSemilla"} placeholder="" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="precio">Costo de Fertilizante</label>
                    <input type="text" className="form-control" ref={costoFertilizante} name={"costoFertilizante"} placeholder="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-warning" type="submit">
                Editar
              </button>
              <button className="btn btn-secondary" type="button" data-dismiss="modal" id="cancelModalEd">
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
