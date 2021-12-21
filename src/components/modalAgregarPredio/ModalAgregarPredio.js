import React from "react";
import ModalHeader from "../modalHeader";
import { useState, useEffect } from "react";

function ModalAgregarPredio({ preAgr, token }) {
  const [usuariosDB, setUsuariosDB] = useState([]);

  var enviar = (e) => {
    e.preventDefault();
    const datos = {
      nombre: e.target.nombre.value,
      usuario: e.target.usuario.value,
      latitud: e.target.latitud.value,
      longitud: e.target.longitud.value,
    };
    preAgr(datos);
  };

  useEffect(() => {
    fetch("https://gestiondecultivosnode.herokuapp.com/api/usuarios", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token-jwt": token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setUsuariosDB(data);
      });

    // eslint-disable-next-line
  }, []);

  return (
    <form onSubmit={enviar}>
      <div className="modal fade" id="agregarPredioModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <ModalHeader titulo="Agregar predio" />
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" className="form-control" id="nombre" name="nombre" placeholder="" required />
                    {/*<!--<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>-->*/}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="Usuario">Usuario</label>
                    <select className="form-control" name="usuario">
                      {usuariosDB.map((usuario, index) => {
                        return (
                          <option key={index} value={usuario.email}>
                            {usuario.email}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="latitud">Latitud</label>
                    <input type="text" className="form-control" id="latitud" name="latitud" placeholder="" required />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label htmlFor="longitud">Longitud</label>
                    <input type="text" className="form-control" id="longitud" name="longitud" placeholder="" required />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary" type="submit">
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

export default ModalAgregarPredio;
