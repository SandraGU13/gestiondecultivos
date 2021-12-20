import React from "react";
import ModalHeader from "../modalHeader";
import { NotificationManager } from "react-notifications";

function ModalAgregarUsuario({ usuAgr, token }) {
  var enviar = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8000/api/usuarioEmail/${e.target.email.value}`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token-jwt": token
      },
    })
      .then((response) => response.json())
      .then((data) => {
          if (data) {
            NotificationManager.warning("El correo ya existe");
          } else if (e.target.contrasena.value === e.target.confirmarContrasena.value) {
            const datos = {
              nombre: e.target.nombre.value,
              apellido: e.target.apellido.value,
              email: e.target.email.value,
              telefono: e.target.telefono.value,
              tipoUsuario: e.target.tipoUsuario.value,
              contrasena: e.target.contrasena.value,
            };
            usuAgr(datos);
          } else {
            NotificationManager.warning("Las contraseñas no coinciden");
          }
       
      });
  };

  return (
    <form onSubmit={enviar}>
      <div className="modal fade" id="agregarUsuarioModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <ModalHeader titulo="Agregar usuario" />
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" className="form-control" name="nombre" placeholder="" required />
                    {/*<!--<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>-->*/}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="apellido">Apellido</label>
                    <input type="text" className="form-control" name="apellido" placeholder="" required />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="email">Correo electronico</label>
                    <input type="email" className="form-control" name="email" placeholder="" required />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="telefono">Telefono</label>
                    <input type="text" className="form-control" name="telefono" placeholder="" required />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="tipoUsuario">Tipo de usuario</label>
                    <select className="form-control" name="tipoUsuario">
                      <option value="Selecione">Selecione</option>
                      <option value="Administrador">Administrador</option>
                      <option value="Configuracion">Configuracion</option>
                      <option value="Gestion">Gestion</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="contrasena">Contraseña</label>
                    <input type="password" className="form-control" id="contrasena" placeholder="" required />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="confirmarContrasena">Repita la contraseña</label>
                    <input type="password" className="form-control" id="confirmarContrasena" placeholder="" required />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary">
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

export default ModalAgregarUsuario;
