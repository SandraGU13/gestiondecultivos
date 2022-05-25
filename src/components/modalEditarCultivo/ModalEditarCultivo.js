import React from "react";
import ModalHeader from "../modalHeader";
import { useState, useEffect } from "react";

function ModalEditarCultivo({ valEdit, culEdit, token }) {
  const semilla = React.createRef();
  const area = React.createRef();
  const cantidadSemillas = React.createRef();
  const tiempoCultivo = React.createRef();
  const agua = React.createRef();
  const cantidadFertilizante = React.createRef();
  const tiempoRecoleccion = React.createRef();
  const kgRecolectados = React.createRef();

  const [semillasDB, setSemillasDB] = useState([]);

  const buscarCul = (val) => {
    fetch(`https://gestiondecultivosnode.herokuapp.com/api/cultivo/${val}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token-jwt": token,
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

  useEffect(() => {
    fetch("https://gestiondecultivosnode.herokuapp.com/api/semillas", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token-jwt": token,
      },
    })
      .then((response) => response.json())
      .then((datos) => {
        //console.log(data);
        setSemillasDB(datos);
      });
    // eslint-disable-next-line
  }, []);

  var enviar = (e) => {
    e.preventDefault();

    fetch(`https://gestiondecultivosnode.herokuapp.com/api/semillaNombre/${e.target.semilla.value}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token-jwt": token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        
        const datos = {
          semilla: e.target.semilla.value,
          area: e.target.area.value,
          cantidadSemillas: e.target.cantidadSemillas.value,
          tiempoCultivo: e.target.tiempoCultivo.value,
          agua: e.target.agua.value,
          cantidadFertilizante: e.target.cantidadFertilizante.value,
          tiempoRecoleccion: e.target.tiempoRecoleccion.value,
          kgRecolectados: e.target.kgRecolectados.value,

          totalKgSemilla: e.target.cantidadSemillas.value * e.target.area.value,
          totalMetrosAgua: e.target.agua.value * e.target.tiempoCultivo.value,
          totalKgFertilizante: e.target.cantidadFertilizante.value * e.target.area.value * e.target.tiempoCultivo.value,
          totalKgRecolectados: e.target.kgRecolectados.value * e.target.area.value,
          costoTotalSemilla: e.target.cantidadSemillas.value * e.target.area.value * data.costoSemilla,
          costoTotalAgua: e.target.agua.value * e.target.tiempoCultivo.value * data.costoAgua,
          costoTotalFertilizante: e.target.cantidadFertilizante.value * e.target.area.value * e.target.tiempoCultivo.value * data.costoFertilizante,
          tiempoTotalRecoleccion: e.target.tiempoRecoleccion.value * e.target.area.value + parseInt(e.target.tiempoCultivo.value, 10),
        };
        culEdit(datos);
      });
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
                      {semillasDB.map((semi, index) => {
                        return (
                          <option key={index} value={semi.nombre}>
                            {semi.nombre}
                          </option>
                        );
                      })}
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
                    <label htmlFor="cantidadSemillas">Cantidad de semillas por hectárea (Kg)</label>
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
                    <label htmlFor="agua">Metros cubicos de agua (Semanas)</label>
                    <input type="text" className="form-control" ref={agua} name="agua" placeholder="" required />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="fertilizante">Cantidad de fertilizante por hectarea (Kg)</label>
                    <input type="text" className="form-control" ref={cantidadFertilizante} name="cantidadFertilizante" placeholder="" required />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="tiempoHectarea">Tiempo de recolección por hectarea (Semanas)</label>
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
