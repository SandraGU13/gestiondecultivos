import React from "react";
import ModalHeader from "./ModalHeader";
import { Link } from "react-router-dom";

function ModalAgregarSemilla() {
  return (
    /*<!-- Agregar Modal-->*/
    <div class="modal fade" id="agregarSemillaModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="text-gray-800" id="exampleModalLabel">Agregar semilla</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">

                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="nombre">Nombre</label>
                                <input type="text" class="form-control" id="nombre" placeholder="">
                                {/*<!--<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>-->*/}</input>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="precio">Costo de Agua</label>
                                <input type="text" class="form-control" id="precio" placeholder=""></input>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="precio">Costo de Semilla</label>
                                <input type="text" class="form-control" id="precio" placeholder=""></input>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="precio">Costo de Fertilizante</label>
                                <input type="text" class="form-control" id="precio" placeholder=""></input>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="modal-footer">
                    <Link class="btn btn-primary" to="predios.html">Agregar</Link>
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancelar</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ModalAgregarSemilla;
