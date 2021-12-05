import React from "react";
import { Link } from "react-router-dom";

function Inicio() {
  return (
    <div>
      <div id="wrapper">
        {/*<!-- Page Wrapper -->*/}

        {/*<!-- Sidebar -->*/}
        <ul
          className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
          id="accordionSidebar"
        >
          {/*{/*<!-- Sidebar - Brand -->*/}
          <Link to="/" className="sidebar-brand d-flex align-items-center justify-content-center">
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fas fa-tractor"></i>
            </div>
            <div className="sidebar-brand-text mx-3">Don Said S.A.S</div>
          </Link>
          {/*<!-- Divider -->*/}
          <hr className="sidebar-divider my-0" />
          {/*<!-- Nav Item - Dashboard -->*/}
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              <i className="fas fa-fw fa-door-open"></i>
              <span>Pagina de inicio</span>
            </Link>
          </li>
          {/*<!-- Divider -->*/}
          <hr className="sidebar-divider" />
          {/*<!-- Heading -->*/}
          <div className="sidebar-heading"></div>
          <li className="nav-item">
            <Link to="/usuarios" className="nav-link">
              <i className="fas fa-fw fa-users"></i>
              <span>Usuarios</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/predios" className="nav-link">
              <i className="fas fa-fw fa-map-marked-alt"></i>
              <span>Predios</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="semillas" className="nav-link">
              <i className="fas fa-fw fa-seedling"></i>
              <span>Semillas</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cultivos" className="nav-link">
              <i className="fas fa-fw fa-apple-alt"></i>
              <span>Cultivos</span>
            </Link>
          </li>{" "}
          {/*<!-- Divider -->*/}
          <hr className="sidebar-divider d-none d-md-block" />
          {/*<!-- Sidebar Toggler (Sidebar) -->*/}
          <div className="text-center d-none d-md-inline">
            <button className="rounded-circle border-0" id="sidebarToggle"></button>
          </div>
        </ul>
        {/*<!-- End of Sidebar -->*/}

        {/*<!-- Content Wrapper -->*/}
        <div id="content-wrapper" className="d-flex flex-column">
          {/*<!-- Main Content -->*/}
          <div id="content">
            {/*<!-- Topbar -->*/}
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
              {/*<!-- Sidebar Toggle (Topbar) -->*/}
              <button
                id="sidebarToggleTop"
                className="btn btn-link d-md-none rounded-circle mr-3"
              >
                <i className="fa fa-bars"></i>
              </button>

              {/*<!-- Topbar Navbar -->*/}
              <ul className="navbar-nav ml-auto">
                {/*<!-- Nav Item - Search Dropdown (Visible Only XS) -->*/}
                <li className="nav-item dropdown no-arrow d-sm-none">
                  <Link to="#"
                    className="nav-link dropdown-toggle"
                    id="searchDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    <i className="fas fa-search fa-fw"></i>
                  </Link>
                  {/*<!-- Dropdown - Messages -->*/}
                  <div
                    className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                    aria-labelledby="searchDropdown"
                  >
                    <form className="form-inline mr-auto w-100 navbar-search">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control bg-light border-0 small"
                          placeholder="Search for..."
                          aria-label="Search"
                          aria-describedby="basic-addon2"
                        />
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
                  <Link to="#"
                    className="nav-link dropdown-toggle"
                    id="userDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                      Usuario
                    </span>
                    <img
                      className="img-profile rounded-circle"
                      src="img/undraw_profile.svg"
                      alt=""
                    />
                  </Link>
                  {/*<!-- Dropdown - User Information -->*/}
                  <div
                    className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="userDropdown"
                  >
                    <Link to="/perfil" className="dropdown-item">
                      <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                      Perfil
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link to="#"
                      className="dropdown-item"
                      data-toggle="modal"
                      data-target="#logoutModal"
                    >
                      <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                      Cerrar sesion
                    </Link>
                  </div>
                </li>
              </ul>
            </nav>
            {/*<!-- End of Topbar -->*/}

            {/*<!-- Begin Page Content -->*/}
            <div className="container-fluid">
              {/*<!-- Page Heading -->*/}
              {/*<!--<h1 className="h3 mb-2 text-gray-800">Bienvenido!!</h1>-->*/}
              <p className="mb-4"></p>
              <div className="col-lg-0 d-none d-lg-block">
                <img src="img/fondo.png" alt="" />
              </div>
            </div>
            {/*<!-- /.container-fluid -->*/}
          </div>
          {/*<!-- End of Main Content -->*/}

          {/*<!-- Footer -->*/}
          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Equipo 08 &copy; Mintic 2021</span>
              </div>
            </div>
          </footer>
          {/*<!-- End of Footer -->*/}
        </div>
        {/*<!-- End of Content Wrapper -->*/}
      </div>
      {/*<!-- End of Page Wrapper -->*/}

      {/*<!-- Scroll to Top Button-->*/}
      <Link to="#page-top" className="scroll-to-top rounded">
        <i className="fas fa-angle-up"></i>
      </Link>

      {/*<!-- Logout Modal-->*/}
      <div
        className="modal fade"
        id="logoutModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Ready to Leave?
              </h5>
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              Select "Logout" below if you are ready to end your current
              session.
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                type="button"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <Link to="/login" className="btn btn-primary">
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
