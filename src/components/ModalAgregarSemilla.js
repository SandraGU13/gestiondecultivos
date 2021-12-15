import React from "react";
import ModalHeader from "./ModalHeader";

function ModalAgregarSemilla(props) {
  var enviar = (e) => {
    e.preventDefault();

    const data = {
      nombre: e.target.nombre.value,
      costoAgua: e.target.costoAgua.value,
      costoSemilla: e.target.costoSemilla.value,
      costoFertilizante: e.target.costoFertilizante.value,
    };

    fetch("http://localhost:8000/api/agregarSemilla", {
      method: 'POST', 
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => {
      console.error('Error:', error)
    })
    .then(response => {
      console.log('Success:', response)
      document.getElementById('cancelModal').click()
      props.actDatos();
    });

    console.log(data);
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
                    <input type="text" className="form-control" name={"nombre"} placeholder="">
                      {/*<!--<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>-->*/}
                    </input>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="precio">Costo de Agua</label>
                    <input type="text" className="form-control" name={"costoAgua"} placeholder=""></input>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="precio">Costo de Semilla</label>
                    <input type="text" className="form-control" name={"costoSemilla"} placeholder=""></input>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="precio">Costo de Fertilizante</label>
                    <input type="text" className="form-control" name={"costoFertilizante"} placeholder=""></input>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary">
                Agregar
              </button>
              <button className="btn btn-secondary" type="button" data-dismiss="modal" id="cancelModal">
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
