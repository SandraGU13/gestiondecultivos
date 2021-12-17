import React from "react";
import ModalHeader from "./ModalHeader";

function ModalEditarUsuario({ valEdit, usuEdit }) {
  const nombre = React.createRef();
  const apellido = React.createRef();
  const email = React.createRef();
  const telefono = React.createRef();
  const tipoUsuario = React.createRef();

  const buscarUsu = (val) => {
    fetch(`http://localhost:8000/api/usuario/${val}`)
      .then((response) => response.json())
      .then((data) => {
        nombre.current.value = data.nombre;
        apellido.current.value = data.apellido;
        email.current.value = data.email;
        telefono.current.value = data.telefono;
        tipoUsuario.current.value = data.tipoUsuario;
      });
  };

  if (valEdit) {
    buscarUsu(valEdit);
  }

  var editar = (e) => {
    e.preventDefault();
    const datos = {
      nombre: e.target.nombre.value,
      apellido: e.target.apellido.value,
      email: e.target.email.value,
      telefono: e.target.telefono.value,
      tipoUsuario: e.target.tipoUsuario.value,
      //contrasena: e.target.contrasena.value,
      //confirmarContrasena: e.target.confirmarContrasena.value,
    };
    usuEdit(datos);
  };

  return (
    <form onSubmit={editar}>
      <div className="modal fade" id="editarUsuarioModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <ModalHeader titulo="Editar usuario" />
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input id="value" type="text" className="form-control" ref={nombre} name="nombre" placeholder="" defaultValue="" />
                    {/*<!--<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>-->*/}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="apellido">Apellido</label>
                    <input type="text" className="form-control" ref={apellido} name="apellido" placeholder="" defaultValue="" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="email">Correo electronico</label>
                    <input type="email" className="form-control" ref={email} name="email" placeholder="" defaultValue="" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="telefono">Telefono</label>
                    <input type="text" className="form-control" ref={telefono} name="telefono" placeholder="" defaultValue="" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="tipoUsuario">Tipo de usuario</label>
                    <select className="form-control" ref={tipoUsuario} name="tipoUsuario" defaultValue="">
                      <option value="Selecione">Selecione</option>
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
                    <input type="text" className="form-control" name="contrasena" placeholder="" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="confirmarContrasena">Repita la contraseña</label>
                    <input type="text" className="form-control" name="confirmarContrasena" placeholder="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="invisible">
              <input type="text" className="form-control" name="val" defaultValue="" />
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-warning">
                Editar
              </button>
              <button className="btn btn-secondary" type="button" data-dismiss="modal" id="cancelModalEd">
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ModalEditarUsuario;
