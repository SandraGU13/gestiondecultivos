import React from "react";
import { useNavigate } from "react-router-dom";

function Login({sesion}) {

  let navegacion = useNavigate()
  var enviar = (e) => {
    e.preventDefault();

    const datos = {
      email: e.target.email.value,
      contrasena: e.target.contrasena.value,
    };
    sesion(datos,navegacion)
  };
  return (
    <form onSubmit={enviar}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/*<!-- Nested Row within Card Body -->*/}
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block">
                    <img src="img/imagen.png" alt="" />
                  </div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">¡Bienvenido!</h1>
                      </div>
                      <div className="form-group">
                        <input type="email" className="form-control form-control-user" aria-describedby="emailHelp" name="email" placeholder="Usuario..." required/>
                      </div>
                      <div className="form-group">
                        <input type="password" className="form-control form-control-user" name="contrasena" placeholder="Contraseña" required/>
                      </div>
                      <div className="form-group">
                        <div className="custom-control custom-checkbox small">
                          <input type="checkbox" className="custom-control-input" id="customCheck" />
                        </div>
                      </div>
                      <button className="btn btn-primary btn-user btn-block" type="submit">
                        Entrar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
