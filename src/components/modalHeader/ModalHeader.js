import React from "react";

function ModalHeader(props) {
  return (
    <div className="modal-header">
      <h5 className="text-gray-800" id="exampleModalLabel">
        {props.titulo}
      </h5>
      <button className="close" type="button" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">×</span>
      </button>
    </div>
  );
}

export default ModalHeader;
