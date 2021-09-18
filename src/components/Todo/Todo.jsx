import React, { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";
import "../index.css";

const Todo = ({ text }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const deleteHandler = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="card">
      <h2>{text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal onCancel={closeModal} onConfirm={closeModal} />}
      {modalIsOpen && <Backdrop onCancel={closeModal} />}
    </div>
  );
};

export default Todo;
