import React from "react";
import ModalHeader from "./ModalHeader";
import { Link } from "react-router-dom";

function ModalEditarCultivos(){
  return (
    <div class="modal fade" id="editarCultivoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="text-gray-800" id="exampleModalLabel">Editar cultivo</h5>
                <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="modal-body">

                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="semilla">Semilla</label>
                            <select class="form-control" id="tipoUsuario">
                                <option value="0">Selecione</option>
                                <option value="1">Trigo</option>
                                <option value="2">Maiz</option>
                                <option value="3">Aguacate</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="area">Area (Hectáreas)</label>
                            <input type="text" class="form-control" id="area" placeholder=""/>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="cantidadSemillas">Cantidad de semillas por hectárea</label>
                            <input type="text" class="form-control" id="cantidadSemillas" placeholder=""/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="tiempoCultivo">Tiempo de cultivo (Semanas)</label>
                            <input type="text" class="form-control" id="tiempoCultivo" placeholder=""/>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="agua">Metros cubicos de agua por semana</label>
                            <input type="text" class="form-control" id="agua" placeholder=""/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="fertilizante">Cantidad de fertilizante por hectarea</label>
                            <input type="text" class="form-control" id="fertilizante" placeholder=""/>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="tiempoHectarea">Tiempo de recolección por hectarea</label>
                            <input type="text" class="form-control" id="tiempoHectarea" placeholder=""/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="kgHectarea">kilogramos recolectados por hectarea</label>
                            <input type="text" class="form-control" id="kgHectarea" placeholder=""/>
                        </div>
                    </div>
                </div>


            </div>
            <div class="modal-footer">
                <a class="btn btn-warning" href="cultivos.html">Editar</a>
                <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancelar</button>
            </div>
        </div>
    </div>
</div>


  )
}

export default ModalEditarCultivos;
