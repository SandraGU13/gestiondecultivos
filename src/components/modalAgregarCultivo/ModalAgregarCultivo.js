import React from "react";
import ModalHeader from "../modalHeader";
import { useState, useEffect } from "react";

function ModalAgregarCultivo({ culAgr, token }) {

  const [semillasDB, setSemillasDB] = useState([]);

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
          costoTotalSemilla: (e.target.cantidadSemillas.value * e.target.area.value) * data.costoSemilla,
          costoTotalAgua: (e.target.agua.value * e.target.tiempoCultivo.value) * data.costoAgua,
          costoTotalFertilizante: (e.target.cantidadFertilizante.value * e.target.area.value * e.target.tiempoCultivo.value) * data.costoFertilizante,
          tiempoTotalRecoleccion: (e.target.tiempoRecoleccion.value * e.target.area.value ) + parseInt(e.target.tiempoCultivo.value,10)
        }
        //console.log(datos);
        culAgr(datos);
      });
  };

  useEffect(() => {

    fetch("https://gestiondecultivosnode.herokuapp.com/api/semillas",{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token-jwt": token
      },
    })
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setSemillasDB(data);
      });
  
    // eslint-disable-next-line
  },[]);

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
                    <input type="text" className="form-control" name="area" placeholder="" required />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="cantidadSemillas">Cantidad de semillas por hectárea (Kg)</label>
                    <input type="text" className="form-control" name="cantidadSemillas" placeholder="" required />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="tiempoCultivo">Tiempo de cultivo (Semanas)</label>
                    <input type="text" className="form-control" name="tiempoCultivo" placeholder="" required />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="agua">Metros cubicos de agua (Semanas)</label>
                    <input type="text" className="form-control" name="agua" placeholder="" required />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="cantidadFertilizante">Cantidad de fertilizante por hectarea (Kg)</label>
                    <input type="text" className="form-control" name="cantidadFertilizante" placeholder="" required />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="tiempoRecoleccion">Tiempo de recolección por hectarea (Semanas)</label>
                    <input type="text" className="form-control" name="tiempoRecoleccion" placeholder="" required />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="kgRecolectados">kilogramos recolectados por hectarea</label>
                    <input type="text" className="form-control" name="kgRecolectados" placeholder="" required />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary" type="submit">
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

export default ModalAgregarCultivo;
