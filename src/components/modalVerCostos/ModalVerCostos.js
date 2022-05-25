import React, { useRef } from "react";
import ModalHeader from "../modalHeader";

function ModalVerCostos({ valCosto, token }) {

    const totalKgSemilla = useRef('');
    const totalKgFertilizante = useRef('');
    const totalKgRecolectados = useRef('');
    const totalMetrosAgua = useRef('');
    const costoTotalSemilla = useRef('');
    const costoTotalFertilizante = useRef('');
    const costoTotalAgua = useRef('');
    const tiempoTotalRecoleccion = useRef('');
    
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
          //console.log(data);
          totalKgSemilla.current.innerHTML = `${(data.totalKgSemilla).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} Kg`
          totalKgFertilizante.current.innerHTML = `${(data.totalKgFertilizante).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} Kg`
          totalKgRecolectados.current.innerHTML = `${(data.totalKgRecolectados).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} Kg`
          totalMetrosAgua.current.innerHTML = `${(data.totalMetrosAgua).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} m3`
          costoTotalSemilla.current.innerHTML = `$ ${(data.costoTotalSemilla).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`
          costoTotalFertilizante.current.innerHTML = `$ ${(data.costoTotalFertilizante).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`
          costoTotalAgua.current.innerHTML = `$ ${(data.costoTotalAgua).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`
          tiempoTotalRecoleccion.current.innerHTML = `${(data.tiempoTotalRecoleccion).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} Semanas`
          
        }
      });
  };

  if (valCosto) {
    //console.log(valCosto);
    buscarCul(valCosto);
  }

  return (
    <div className="modal fade" id="verCostosModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <ModalHeader titulo="Ver costos" />
          <div className="modal-body">
            <div className="col-md-12 col-xs-12">
              <div className="white-box">
                <form className="form-horizontal form-material">
                  <br />
                  <div className="row">
                    <div className="col-sm-6">
                      <label className="col-md-12">
                        <b>Total kgs Semillas:</b>
                      </label>
                    </div>
                    <div className="col-sm-6">
                    
                      <label ref={totalKgSemilla} className="col-md-12"></label>
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-sm-6">
                      <label className="col-md-12">
                        <b>Total kgs Fertilizante:</b>
                      </label>
                    </div>
                    <div className="col-sm-6">
                      <label ref={totalKgFertilizante} className="col-md-12"></label>
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-sm-6">
                      <label className="col-md-12">
                        <b>Total kgs Recolectados:</b>
                      </label>
                    </div>
                    <div className="col-sm-6">
                      <label ref={totalKgRecolectados} className="col-md-12"></label>
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-sm-6">
                      <label className="col-md-12">
                        <b>Total metros cubicos de agua:</b>
                      </label>
                    </div>
                    <div className="col-sm-6">
                      <label ref={totalMetrosAgua} className="col-md-12"></label>
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-sm-6">
                      <label className="col-md-12">
                        <b>Costo total de Semilla:</b>
                      </label>
                    </div>
                    <div className="col-sm-6">
                      <label ref={costoTotalSemilla} className="col-md-12"></label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <label className="col-md-12">
                        <b>Costo total de Fertilizante:</b>
                      </label>
                    </div>
                    <div className="col-sm-6">
                      <label ref={costoTotalFertilizante} className="col-md-12"></label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <label className="col-md-12">
                        <b>Costo total de agua:</b>
                      </label>
                    </div>
                    <div className="col-sm-6">
                      <label ref={costoTotalAgua} className="col-md-12"></label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <label className="col-md-12">
                        <b>Tiempo para recoleccion:</b>
                      </label>
                    </div>
                    <div className="col-sm-6">
                      <label ref={tiempoTotalRecoleccion} className="col-md-12"></label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="submit" className="btn btn-primary" data-dismiss="modal">
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalVerCostos;
