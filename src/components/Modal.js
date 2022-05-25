import React from "react";
import "./Modal.css";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { updateUser } from "../store/userActions";
import {useNavigate}  from "react-router-dom";


function Modal({ setOpenModal, review }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(review)
    dispatch(updateUser(review))
    navigate('/success')
  }

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
          <Button color="primary" variant="contained" onClick={handleClick}>Yes</Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
