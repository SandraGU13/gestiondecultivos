import React from "react";
import ModalHeader from "../modalHeader";
import {NotificationManager} from 'react-notifications';

function ModalCambiarContrasena({valCamb,token}) {

  let cambiar = (e) => {
    e.preventDefault();
    //console.log(valCamb)

    const datos = {
      contrasenaActual: e.target.contrasenaActual.value,
      contrasenaNueva: e.target.contrasenaNueva.value
    }

    fetch(`http://localhost:8000/api/verificarContrasena/${valCamb}`,{
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Content-Type": "application/json",
        "auth-token-jwt": token
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.mensaje !== "CORRECTA") {
          NotificationManager.warning(data.mensaje)
        }else if(e.target.contrasenaNueva.value !== e.target.confirmarContrasenaNueva.value){
        NotificationManager.warning('La nueva contraseña no coincide')
        }else{
          //console.log(data)
          fetch(`http://localhost:8000/api/actualizarContrasena/${valCamb}`, {
            method: 'PUT',
            body: JSON.stringify(datos),
            headers:{
              'Content-Type': 'application/json',
              "auth-token-jwt": token
            }
          }).then(res => res.json())
          .catch(error => {
            console.error('Error:', error)
          })
          .then(response => {
            document.getElementById('modalCambCont').click()
            NotificationManager.success('Contraseña actualizada')
            //console.log(response)
          });
        }
      });

  }
  
  return (
    <form onSubmit={cambiar}>
      <div className="modal fade" id="cambiarcontraseña" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <ModalHeader titulo="CambiarContrasena" />
            <div className="modal-body">
              <div className="form-group">
                <label className="col-md-12">*Contraseña actual</label>
                <div className="col-md-12">
                  <input type="password" className="form-control form-control-line" name="contrasenaActual" required/>
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-12">*Nueva contraseña</label>
                <div className="col-md-12">
                  <input type="password" className="form-control form-control-line" name="contrasenaNueva" required/>
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-12">*Confirmar nueva contraseña</label>
                <div className="col-md-12">
                  <input type="password" className="form-control form-control-line" name="confirmarContrasenaNueva" required/>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary" >
                Cambiar
              </button>
              <button className="btn btn-secondary" type="button" data-dismiss="modal" id="modalCambCont">
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ModalCambiarContrasena;
