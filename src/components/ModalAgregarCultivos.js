import React from "react";
import ModalHeader from "./ModalHeader";
import { Link } from "react-router-dom";

function ModalAgregarCultivos(){
    
    var enviar = (e) => {

        e.preventDefault()
    
        const data = {
            Semilla: e.target.Semilla.children[e.target.Semilla.value].text,
            area: e.target.area.value,
            cantidadSemillas: e.target.cantidadSemillas.value,
            tiempoCultivo: e.target.tiempoCultivo.value,
            agua: e.target.agua.value,
            fertilizante: e.target.fertilizante.value,
            tiempoHectarea: e.target.tiempoHectarea.value,
            kgHectarea: e.target.kgHectarea.value
            
        }
    
        console.log(data)
    
      }
    
  return (
    <form onSubmit={enviar} >
        <div className="modal fade" id="agregarCultivoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="text-gray-800" id="exampleModalLabel">Agregar cultivo</h5>
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body">

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="semilla">Semilla</label>
                                <select className="form-control" name="Semilla">
                                    <option value="0">Selecione</option>
                                    <option value="1">Trigo</option>
                                    <option value="2">Maiz</option>
                                    <option value="3">Aguacate</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="area">Area (Hectáreas)</label>
                                <input type="text" className="form-control" name="area" placeholder=""/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="cantidadSemillas">Cantidad de semillas por hectárea</label>
                                <input type="text" className="form-control" name="cantidadSemillas" placeholder=""/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="tiempoCultivo">Tiempo de cultivo (Semanas)</label>
                                <input type="text" className="form-control" name="tiempoCultivo" placeholder=""/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="agua">Metros cubicos de agua por semana</label>
                                <input type="text" className="form-control" name="agua" placeholder=""/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="fertilizante">Cantidad de fertilizante por hectarea</label>
                                <input type="text" className="form-control" name="fertilizante" placeholder=""/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="tiempoHectarea">Tiempo de recolección por hectarea</label>
                                <input type="text" className="form-control" name="tiempoHectarea" placeholder=""/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label for="kgHectarea">kilogramos recolectados por hectarea</label>
                                <input type="text" className="form-control" name="kgHectarea" placeholder=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-primary" type="submit">Agregar</button>
                    <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancelar</button>
                </div>
            </div>
        </div>
    </div>
    </form>
  )
}

export default ModalAgregarCultivos;
