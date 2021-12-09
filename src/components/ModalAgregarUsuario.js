import React from "react";
import ModalHeader from "./ModalHeader";

function ModalAgregarUsuario() {
  var enviar = (e) => {
    e.preventDefault();

    const datos = {
      nombre: e.target.nombre.value,
      apellido: e.target.nombre.value,
      email: e.target.email.value,
      telefono: e.target.telefono.value,
      tipoUsuario: e.target.tipoUsuario.children[e.target.tipoUsuario.value].text,
      contrasena: e.target.contrasena.value,
      confirmarContrasena: e.target.confirmarContrasena.value,
    };

    console.log(datos);

    //return fetch("http://localhost:8000/api/usuarios")
    //  .then(response => response.json())
    //  .then((data) => console.log(data) );
  };

  return (
    <form onSubmit={enviar}>
      <div className="modal fade" id="agregarUsuarioModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <ModalHeader titulo="Agregar usuario" />
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label for="nombre">Nombre</label>
                    <input type="text" className="form-control" name="nombre" placeholder="" />
                    {/*<!--<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>-->*/}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label for="apellido">Apellido</label>
                    <input type="text" className="form-control" name="apellido" placeholder="" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label for="email">Correo electronico</label>
                    <input type="email" className="form-control" name="email" placeholder="" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label for="telefono">Telefono</label>
                    <input type="text" className="form-control" name="telefono" placeholder="" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label for="tipoUsuario">Tipo de usuario</label>
                    <select className="form-control" name="tipoUsuario">
                      <option value="0">Selecione</option>
                      <option value="1">Configuracion</option>
                      <option value="2">Gestion</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label for="contrasena">Contraseña</label>
                    <input type="text" className="form-control" id="contrasena" placeholder="" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label for="confirmarContrasena">Repita la contraseña</label>
                    <input type="text" className="form-control" id="confirmarContrasena" placeholder="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary">
                Agregar
              </button>
              <button className="btn btn-secondary" type="button" data-dismiss="modal">
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ModalAgregarUsuario;
