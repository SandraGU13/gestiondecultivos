import React from "react";
import ModalHeader from "./ModalHeader";

function ModalAgregarCultivo(props) {
  var enviar = (e) => {
    e.preventDefault();

    const data = {
      semilla: e.target.semilla.children[e.target.semilla.value].text,
      area: e.target.area.value,
      cantidadSemillas: e.target.cantidadSemillas.value,
      tiempoCultivo: e.target.tiempoCultivo.value,
      agua: e.target.agua.value,
      cantidadFertilizante: e.target.cantidadFertilizante.value,
      tiempoRecoleccion: e.target.tiempoRecoleccion.value,
      kgRecolectados: e.target.kgRecolectados.value
    };

    fetch("http://localhost:8000/api/agregarCultivo", {
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
    <form onSubmit={enviar}>
      <div className="modal fade" id="agregarCultivoModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
          <ModalHeader titulo="Agregar cultivo" />
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="semilla">Semilla</label>
                    <select className="form-control" name="semilla">
                      <option value="0">Selecione</option>
                      <option value="1">Trigo</option>
                      <option value="2">Maiz</option>
                      <option value="3">Aguacate</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="area">Area (Hectáreas)</label>
                    <input type="text" className="form-control" name="area" placeholder="" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="cantidadSemillas">Cantidad de semillas por hectárea</label>
                    <input type="text" className="form-control" name="cantidadSemillas" placeholder="" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="tiempoCultivo">Tiempo de cultivo (Semanas)</label>
                    <input type="text" className="form-control" name="tiempoCultivo" placeholder="" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="agua">Metros cubicos de agua por semana</label>
                    <input type="text" className="form-control" name="agua" placeholder="" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="cantidadFertilizante">Cantidad de fertilizante por hectarea</label>
                    <input type="text" className="form-control" name="cantidadFertilizante" placeholder="" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="tiempoRecoleccion">Tiempo de recolección por hectarea</label>
                    <input type="text" className="form-control" name="tiempoRecoleccion" placeholder="" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="kgRecolectados">kilogramos recolectados por hectarea</label>
                    <input type="text" className="form-control" name="kgRecolectados" placeholder="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary" type="submit">
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

export default ModalAgregarCultivo;
