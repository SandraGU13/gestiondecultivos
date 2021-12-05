import React from "react";

function ModalHeader(props) {
  return (
    <div class="modal-header">
      <h5 class="text-gray-800" id="exampleModalLabel">
        {props.titulo}
      </h5>
      <button class="close" type="button" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">×</span>
      </button>
    </div>
  );
}

export default ModalHeader;
