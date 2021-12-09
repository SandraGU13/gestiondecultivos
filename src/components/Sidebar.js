import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      {/*{/*<!-- Sidebar - Brand -->*/}
      <Link to="/bienvenido" className="sidebar-brand d-flex align-items-center justify-content-center">
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-tractor"></i>
        </div>
        <div className="sidebar-brand-text mx-3">Don Said S.A.S</div>
      </Link>
      {/*<!-- Divider -->*/}
      <hr className="sidebar-divider my-0" />
      {/*<!-- Nav Item - Dashboard -->*/}
      <li className="nav-item active">
        <Link to="/bienvenido" className="nav-link">
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
        <Link to="/semillas" className="nav-link">
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
  );
}

export default Sidebar;
