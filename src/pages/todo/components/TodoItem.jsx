import { useState } from "react";

import Backdrop from "./Backdrop";
import Modal from "./Modal";

import style from "./TodoItem.module.css";

function TodoItem(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className={style.card}>
      <h2>{props.text}</h2>
      <div className={style.actions}>
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {/* {modalIsOpen ? <Modal /> : null} */}
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default TodoItem;
