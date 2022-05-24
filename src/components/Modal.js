import React from "react";
import "./Modal.css";
import Button from "@mui/material/Button";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h2>Are You Sure You Want to Submit?</h2>
        </div>
        <div className="footer">
          <Button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Dismiss
          </Button>
          <Button color="primary" variant="contained">Yes</Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
