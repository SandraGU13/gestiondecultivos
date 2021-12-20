import React from "react";
import { Link } from "react-router-dom";

function Topbar({usuEmail}) {
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      {/*<!-- Sidebar Toggle (Topbar) -->*/}
      <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
        <i className="fa fa-bars"></i>
      </button>

      {/*<!-- Topbar Navbar -->*/}
      <ul className="navbar-nav ml-auto">
        {/*<!-- Nav Item - Search Dropdown (Visible Only XS) -->*/}
        <li className="nav-item dropdown no-arrow d-sm-none">
          <Link to="#" className="nav-link dropdown-toggle" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fas fa-search fa-fw"></i>
          </Link>
          {/*<!-- Dropdown - Messages -->*/}
          <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
            <form className="form-inline mr-auto w-100 navbar-search">
              <div className="input-group">
                <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button">
                    <i className="fas fa-search fa-sm"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </li>

        <div className="topbar-divider d-none d-sm-block"></div>

        {/*<!-- Nav Item - User Information -->*/}
        <li className="nav-item dropdown no-arrow">
          <Link to="#" className="nav-link dropdown-toggle" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">{usuEmail}</span>
            <img className="img-profile rounded-circle" src="img/undraw_profile.svg" alt="" />
          </Link>
          {/*<!-- Dropdown - User Information -->*/}
          <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
            <Link to="/perfil" className="dropdown-item">
              <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
              Perfil
            </Link>
            <div className="dropdown-divider"></div>
            <button className="dropdown-item" data-toggle="modal" data-target="#logoutModal">
              <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
              Cerrar sesion
            </button>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Topbar;
