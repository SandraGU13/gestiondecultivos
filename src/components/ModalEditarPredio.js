import React from "react";
import ModalHeader from "./ModalHeader";
import { Link } from "react-router-dom";

function ModalEditarPredio() {
  return (
    <div className="modal fade" id="editarPredioModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="text-gray-800" id="exampleModalLabel">Editar predio</h5>
                <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div className="modal-body">

                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="nombre">Nombre</label>
                            <input type="text" className="form-control" id="nombre" placeholder=""/>
                            {/*<!--<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>-->*/}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="tipoUsuario">Usuario</label>
                            <select className="form-control" id="tipoUsuario">
                                <option value="0">Seleccione</option>
                                <option value="1">Sandra</option>
                                <option value="2">Keiny</option>
                                <option value="3">Nestor</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="latitud">Latitud</label>
                            <input type="text" className="form-control" id="latitud" placeholder=""/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="longitud">Longitud</label>
                            <input type="text" className="form-control" id="longitud" placeholder=""/>
                        </div>
                    </div>
                </div>

            </div>
            <div className="modal-footer">
                <a className="btn btn-warning" href="predios.html">Editar</a>
                <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancelar</button>
            </div>
        </div>
    </div>
</div>
  );
}

export default ModalEditarPredio;
