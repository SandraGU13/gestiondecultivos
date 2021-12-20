import React from "react";
import ModalHeader from "../modalHeader";

function ModalEditarCultivo({ valEdit, culEdit, token }) {
  const semilla = React.createRef();
  const area = React.createRef();
  const cantidadSemillas = React.createRef();
  const tiempoCultivo = React.createRef();
  const agua = React.createRef();
  const cantidadFertilizante = React.createRef();
  const tiempoRecoleccion = React.createRef();
  const kgRecolectados = React.createRef();

  const buscarCul = (val) => {
    fetch(`http://localhost:8000/api/cultivo/${val}`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token-jwt": token
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          semilla.current.value = data.semilla;
          area.current.value = data.area;
          cantidadSemillas.current.value = data.cantidadSemillas;
          tiempoCultivo.current.value = data.tiempoCultivo;
          agua.current.value = data.agua;
          cantidadFertilizante.current.value = data.cantidadFertilizante;
          tiempoRecoleccion.current.value = data.tiempoRecoleccion;
          kgRecolectados.current.value = data.kgRecolectados;
        }
      });
  };

  if (valEdit) {
    //console.log(valEdit);
    buscarCul(valEdit);
  }

  var enviar = (e) => {
    e.preventDefault();

    const datos = {
      semilla: e.target.semilla.value,
      area: e.target.area.value,
      cantidadSemillas: e.target.cantidadSemillas.value,
      tiempoCultivo: e.target.tiempoCultivo.value,
      agua: e.target.agua.value,
      cantidadFertilizante: e.target.cantidadFertilizante.value,
      tiempoRecoleccion: e.target.tiempoRecoleccion.value,
      kgRecolectados: e.target.kgRecolectados.value,
    };
    culEdit(datos);
  };
  return (
    <form onSubmit={enviar}>
      <div className="modal fade" id="editarCultivoModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <ModalHeader titulo="Editar cultivo" />
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="semilla">Semilla</label>
                    <select className="form-control" ref={semilla} name="semilla">
                      <option value="Selecione">Selecione</option>
                      <option value="Trigo">Trigo</option>
                      <option value="Maiz">Maiz</option>
                      <option value="Aguacate">Aguacate</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="area">Area (Hectáreas)</label>
                    <input type="text" className="form-control" ref={area} name="area" placeholder="" required />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="cantidadSemillas">Cantidad de semillas por hectárea</label>
                    <input type="text" className="form-control" ref={cantidadSemillas} name="cantidadSemillas" placeholder="" required />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="tiempoCultivo">Tiempo de cultivo (Semanas)</label>
                    <input type="text" className="form-control" ref={tiempoCultivo} name="tiempoCultivo" placeholder="" required />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="agua">Metros cubicos de agua por semana</label>
                    <input type="text" className="form-control" ref={agua} name="agua" placeholder="" required />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="fertilizante">Cantidad de fertilizante por hectarea</label>
                    <input type="text" className="form-control" ref={cantidadFertilizante} name="cantidadFertilizante" placeholder="" required />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="tiempoHectarea">Tiempo de recolección por hectarea</label>
                    <input type="text" className="form-control" ref={tiempoRecoleccion} name="tiempoRecoleccion" placeholder="" required />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="kgHectarea">kilogramos recolectados por hectarea</label>
                    <input type="text" className="form-control" ref={kgRecolectados} name="kgRecolectados" placeholder="" required />
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

export default ModalEditarCultivo;
