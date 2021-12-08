import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import ModalCerrarSesion from "../components/ModalCerrarSesion";
import ModalAgregarCultivos from "../components/ModalAgregarCultivos";
import ModalEliminarCultivos from "../components/ModalEliminarCultivos";
import ModalEditarCultivos from "../components/ModalEditarCultivos";
import { Link } from "react-router-dom";

import { Table, Header, HeaderRow, HeaderCell, Body, Row, Cell } from "@table-library/react-table-library/table";
import { usePagination } from "@table-library/react-table-library/pagination";
import { useRowSelect, HeaderCellSelect, CellSelect, SELECT_TYPES } from "@table-library/react-table-library/select";

function Cultivos() {
  let cultivosDB = [
    {
      id: "001",
      tipodecultivos: "arroz",
      area: "lo que sea",
      cantidadsemillas: "11",
      tiempodelcultivo: "14 dias",
      metroscubicosdeagua: "2m3",
      kgfertilizante: "40kg",
      tiempopararecoleccion:"5 dias",
      kgrecolectados: "70"
    },
    {
      id: "002",
      tipodecultivos: "Yuca",
      area: "lo que sea",
      cantidadsemillas: "11",
      tiempodelcultivo: "14 dias",
      metroscubicosdeagua: "2m3",
      kgfertilizante: "40kg",
      tiempopararecoleccion:"5 dias",
      kgrecolectados: "70"
    },
    {
      id: "003",
      tipodecultivos: "Limon",
      area: "lo que sea",
      cantidadsemillas: "11",
      tiempodelcultivo: "14 dias",
      metroscubicosdeagua: "2m3",
      kgfertilizante: "40kg",
      tiempopararecoleccion:"5 dias",
      kgrecolectados: "70"
    },
  ];

  const [search, setSearch] = React.useState("");

  const handleSearch = (event) => {
    //console.log(event.target)
    setSearch(event.target.value);
  };

  const data = {
    nodes: cultivosDB.filter((item) => {
      let todos;
      let ids,tipodecultivos,area,cantidadsemillas,tiempodelcultivo,metroscubicosdeagua, kgfertilizante,tiempopararecoleccion, kgrecolectados;
      ids = item.id;
      tipodecultivos = item.tipodecultivos;
      area = item.area;
      cantidadsemillas = item.cantidadsemillas;
      tiempodelcultivo = item.tiempodelcultivo;
      metroscubicosdeagua = item.metroscubicosdeagua;
      kgfertilizante = item.kgfertilizante;
      tiempopararecoleccion = item.tiempopararecoleccion;
      kgrecolectados = item. kgrecolectados;
      todos = ids + tipodecultivos + area + cantidadsemillas + tiempodelcultivo + metroscubicosdeagua + kgfertilizante + tiempopararecoleccion + kgrecolectados;
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
    <div id="wrapper"> {/*<!-- Page Wrapper -->*/}

      <Sidebar /> {/*<!-- Sidebar -->*/}

      <div id="content-wrapper" className="d-flex flex-column"> {/*<!-- Content Wrapper -->*/}

        <div id="content"> {/*<!-- Main Content -->*/}

          <Topbar /> {/*<!-- Topbar -->*/}

          {/*<!-->>> CONTENIDO DE LA PAGINA DENTRO DEL DIV CONTAINER-FLUID <<<-->*/}
          <div className="container-fluid">
            {/*<!-- Page Heading -->*/}
            <h1 className="h3 mb-2 text-gray-800">Cultivos</h1>
            <p className="mb-4"></p>

            {/*<!-- DataTales Example -->*/}
            <div className="card shadow mb-4">
              <div className="card-header py-3">
              <div className="">
                    <h6 className="m-0 font-weight-bold text-primary">Cultivos</h6>
                  </div>
                <div className="row float-right">
                  <div className="">
                    <button to="#" className="btn btn-primary btn-icon-split float-right" data-toggle="modal" data-target="#agregarCultivoModal">
                      <span className="icon text-white-50">
                        <i className="fas fa-plus"></i>
                      </span>
                      <span className="text">Agregar cultivos</span>
                    </button>
                  </div>
                  <div className="">
                    <button className="btn btn-warning btn-icon-split float-right" data-toggle="modal" data-target="#editarCultivoModal">
                      <span className="icon text-white-50">
                        <i className="fas fa-edit"></i>
                      </span>
                      <span className="text">Editar</span>
                    </button>
                  </div>
                  <div className="">
                    <button className="btn btn-danger btn-icon-split float-right" data-toggle="modal" data-target="#eliminarCultivoModal">
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
                            <HeaderCell>Tipo de Cultivos</HeaderCell>
                            <HeaderCell>Area</HeaderCell>
                            <HeaderCell>Cantidad Semillas</HeaderCell>
                            <HeaderCell>Tiempo del cultivo</HeaderCell>
                            <HeaderCell>Metros cubicos de agua</HeaderCell>
                            <HeaderCell>Kg Fertilizante (ha)</HeaderCell>
                            <HeaderCell>Tiempo necesario para la recoleccion (ha)</HeaderCell>
                            <HeaderCell>Kg recolectados (ha)</HeaderCell>
                          </HeaderRow>
                        </Header>
                        <Body>
                          {tableList.map((item) => (
                            <Row key={item.id} item={item}>
                              <CellSelect item={item} />
                              <Cell>{item.id}</Cell>
                              <Cell>{item.tipodecultivos}</Cell>
                              <Cell>{item.area}</Cell>
                              <Cell>{item.cantidadsemillas}</Cell>
                              <Cell>{item.tiempodelcultivo}</Cell>
                              <Cell>{item.metroscubicosdeagua}</Cell>
                              <Cell>{item.kgfertilizante}</Cell>
                              <Cell>{item.tiempopararecoleccion}</Cell>
                              <Cell>{item.kgrecolectados}</Cell>
                             
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
      <ModalAgregarCultivos /> {/*<!-- Modal Agregar-->*/}
      <ModalEliminarCultivos /> {/*<!-- Modal Eliminar-->*/}
      <ModalEditarCultivos /> {/*<!-- Modal Editar-->*/}
    </div>
  );
}
export default Cultivos;
