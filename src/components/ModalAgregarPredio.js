import React from "react";
import ModalHeader from "./ModalHeader";
import { Link } from "react-router-dom";

function ModalAgregarPredio() {

    var enviar = (e) => {

        e.preventDefault()
    
        const data = {
            nombre: e.target.nombre.value,
            Usuario: e.target.Usuario.children[e.target.Usuario.value].text,
            latitud: e.target.latitud.value,
            longitud: e.target.longitud.value

        }
    
        console.log(data)
    
      };

  return (
    <form onSubmit={enviar} >
        <div className="modal fade" id="agregarPredioModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="text-gray-800" id="exampleModalLabel">Agregar predio</h5>
                        <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label for="nombre">Nombre</label>
                                    <input type="text" className="form-control" id="nombre" name="nombre" placeholder=""/>
                                    {/*<!--<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>-->*/}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label for="Usuario">Usuario</label>
                                    <select className="form-control" name="Usuario">
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
                                    <input type="text" className="form-control" id="latitud" name="latitud" placeholder=""/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label for="longitud">Longitud</label>
                                    <input type="text" className="form-control" id="longitud" name="longitud" placeholder=""/>
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
  );
}

export default ModalAgregarPredio;
