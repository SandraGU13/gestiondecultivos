import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import ModalCerrarSesion from "../components/ModalCerrarSesion";
import ModalAgregarSemilla from "../components/ModalAgregarSemilla";
import ModalEditarSemilla from "../components/ModalEditarSemilla";
import ModalEliminarSemilla from "../components/ModalEliminarSemilla";

import { Table, Header, HeaderRow, HeaderCell, Body, Row, Cell } from "@table-library/react-table-library/table";
import { usePagination } from "@table-library/react-table-library/pagination";
import { useRowSelect, HeaderCellSelect, CellSelect, SELECT_TYPES } from "@table-library/react-table-library/select";

import { useState, useEffect } from "react";

function Semillas() {

  const [semillasDB, setSemillasDB] = useState([]);

  //console.log(usuariosDB);

  useEffect(() => {
    fetch("http://localhost:8000/api/semillas")
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        setSemillasDB(data);
      });
  }, []);

  const [search, setSearch] = React.useState("");

  const handleSearch = (event) => {
    //console.log(event.target)
    setSearch(event.target.value);
  };

  const data = {
    nodes: semillasDB.filter((item) => {
      let todos;
      let ids, descripcion, CostoAgua, CostoSemilla, CostoFertilizante;
      ids = item.id;
      descripcion = item.descripcion;
      CostoAgua = item.CostoAgua;
      CostoSemilla = item.CostoSemilla;
      CostoFertilizante = item.CostoFertilizante;
      todos = ids + descripcion + CostoAgua + CostoSemilla + CostoFertilizante;
      return todos.includes(search);
    }),
  };

  const select = useRowSelect(
    data,
    {
      onChange: onSelectChange,
    },
    {
      rowSelect: SELECT_TYPES.SingleSelect,
      buttonSelect: SELECT_TYPES.MultiSelect,
    }
  );

  function onSelectChange(action, state) {
    console.log(action, state);
  }

  const pagination = usePagination(data, {
    state: {
      page: 0,
      size: 10,
    },
    onChange: onPaginationChange,
  });

  function onPaginationChange(action, state) {
    console.log(action, state);
  }
  return (
    <div id="wrapper">
      {" "}
      {/*<!-- Page Wrapper -->*/}
      <Sidebar /> {/*<!-- Sidebar -->*/}
      <div id="content-wrapper" className="d-flex flex-column">
        {" "}
        {/*<!-- Content Wrapper -->*/}
        <div id="content">
          {" "}
          {/*<!-- Main Content -->*/}
          <Topbar /> {/*<!-- Topbar -->*/}
          {/*<!-->>> CONTENIDO DE LA PAGINA DENTRO DEL DIV CONTAINER-FLUID <<<-->*/}
          <div className="container-fluid">
            {/*<!-- Page Heading -->*/}
            <h1 className="h3 mb-2 text-gray-800">Semillas</h1>
            <p className="mb-4"></p>

            {/*<!-- DataTales Example -->*/}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <div className="">
                  <h6 className="m-0 font-weight-bold text-primary">Semillas</h6>
                </div>
                <div className="row float-right">
                  <div className="">
                    <button to="#" className="btn btn-primary btn-icon-split float-right" data-toggle="modal" data-target="#agregarSemillaModal">
                      <span className="icon text-white-50">
                        <i className="fas fa-plus"></i>
                      </span>
                      <span className="text">Agregar semillas</span>
                    </button>
                  </div>
                  <div className="">
                    <button className="btn btn-warning btn-icon-split float-right" data-toggle="modal" data-target="#editarSemillaModal">
                      <span className="icon text-white-50">
                        <i className="fas fa-edit"></i>
                      </span>
                      <span className="text">Editar</span>
                    </button>
                  </div>
                  <div className="">
                    <button className="btn btn-danger btn-icon-split float-right" data-toggle="modal" data-target="#eliminarSemillaModal">
                      <span className="icon text-white-50">
                        <i className="fas fa-trash"></i>
                      </span>
                      <span className="text">Eliminar</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <label htmlFor="search">
                    Buscar:&nbsp;
                    <input id="search" type="text" onChange={handleSearch} />
                  </label>
                  <Table data={data} pagination={pagination} select={select}>
                    {(tableList) => (
                      <>
                        <Header>
                          <HeaderRow>
                            <HeaderCellSelect />
                            <HeaderCell>Id</HeaderCell>
                            <HeaderCell>Descripcion</HeaderCell>
                            <HeaderCell>Costo de Agua (m^3)</HeaderCell>
                            <HeaderCell>Costo de Semilla</HeaderCell>
                            <HeaderCell>Costo de Fertilizante (Kg)</HeaderCell>
                          </HeaderRow>
                        </Header>
                        <Body>
                          {tableList.map((item) => (
                            <Row key={item.id} item={item}>
                              <CellSelect item={item} />
                              <Cell>{item.id}</Cell>
                              <Cell>{item.descripcion}</Cell>
                              <Cell>{item.CostoAgua}</Cell>
                              <Cell>{item.CostoSemilla}</Cell>
                              <Cell>{item.CostoFertilizante}</Cell>
                            </Row>
                          ))}
                        </Body>
                      </>
                    )}
                  </Table>
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <span>Total Pages: {pagination.state.getTotalPages(data.nodes)}</span>

                    <span>
                      Page:{" "}
                      {pagination.state.getPages(data.nodes).map((_, index) => (
                        <button
                          key={index}
                          type="button"
                          style={{
                            fontWeight: pagination.state.page === index ? "bold" : "normal",
                          }}
                          onClick={() => pagination.fns.onSetPage(index)}
                        >
                          {index + 1}
                        </button>
                      ))}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*<!-->>> CONTENIDO DE PAGINA ARRIBA <<<-->*/}
        </div>
        <Footer /> {/*<!-- Footer -->*/}
      </div>
      <ModalCerrarSesion /> {/*<!-- Modal Cerrar-->*/}
      <ModalAgregarSemilla /> {/*<!-- Modal Agregar Semilla-->*/}
      <ModalEditarSemilla /> {/*<!-- Modal Editar Semilla-->*/}
      <ModalEliminarSemilla /> {/*<!-- Modal Eliminar Semilla-->*/}
    </div>
  );
}

export default Semillas;
