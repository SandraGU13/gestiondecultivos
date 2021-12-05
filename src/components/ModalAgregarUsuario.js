import React from "react";
import ModalHeader from "./ModalHeader";
import { Link } from "react-router-dom";

function ModalAgregarUsuario() {
  return (
    <div class="modal fade" id="agregarUsuarioModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
          <ModalHeader titulo="Agregar usuario"/>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="nombre">Nombre</label>
                  <input type="text" class="form-control" id="nombre" placeholder="" />
                  {/*<!--<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>-->*/}
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="apellido">Apellido</label>
                  <input type="text" class="form-control" id="apellido" placeholder="" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label for="email">Correo electronico</label>
                  <input type="email" class="form-control" id="email" placeholder="" />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="telefono">Telefono</label>
                  <input type="text" class="form-control" id="telefono" placeholder="" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="tipoUsuario">Tipo de usuario</label>
                  <select class="form-control" id="tipoUsuario">
                    <option value="0">Selecione</option>
                    <option value="1">Configuracion</option>
                    <option value="2">Gestion</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="form-group">
                  <label for="contrasena">Contraseña</label>
                  <input type="text" class="form-control" id="contrasena" placeholder="" />
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="repetirContrasena">Repita la contraseña</label>
                  <input type="text" class="form-control" id="repetirContrasena" placeholder="" />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <Link to="/usuarios" class="btn btn-primary">
              Agregar
            </Link>
            <button class="btn btn-secondary" type="button" data-dismiss="modal">
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalAgregarUsuario;
