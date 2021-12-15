import React from "react";
import { useNavigate } from "react-router-dom";
import ModalHeader from "./ModalHeader";

function ModalAgregarUsuario() {

  const navigate = useNavigate()

  var enviar = (e) => {
    e.preventDefault();

    const datos = {
      nombre: e.target.nombre.value,
      apellido: e.target.nombre.value,
      email: e.target.email.value,
      telefono: e.target.telefono.value,
      tipoUsuario: e.target.tipoUsuario.children[e.target.tipoUsuario.value].text,
      //contrasena: e.target.contrasena.value,
      //confirmarContrasena: e.target.confirmarContrasena.value,
    };


    fetch("http://localhost:8000/api/agregarUsuario", {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(datos), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => {
      console.error('Error:', error)
    })
    .then(response => {
      console.log('Success:', response)
      document.getElementById('cancelModal').click()
      navigate('/usuarios')
    });

    console.log(datos);

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
                    <input type="text" className="form-control" name="nombre" placeholder="" />
                    {/*<!--<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>-->*/}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="apellido">Apellido</label>
                    <input type="text" className="form-control" name="apellido" placeholder="" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="email">Correo electronico</label>
                    <input type="email" className="form-control" name="email" placeholder="" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="telefono">Telefono</label>
                    <input type="text" className="form-control" name="telefono" placeholder="" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="tipoUsuario">Tipo de usuario</label>
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
                    <label htmlFor="contrasena">Contraseña</label>
                    <input type="text" className="form-control" id="contrasena" placeholder="" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="confirmarContrasena">Repita la contraseña</label>
                    <input type="text" className="form-control" id="confirmarContrasena" placeholder="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary">
                Agregar
              </button>
              <button className="btn btn-secondary" type="button" data-dismiss="modal" id="cancelModal"> 
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
