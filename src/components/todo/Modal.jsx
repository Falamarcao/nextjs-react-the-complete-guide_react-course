import Backdrop from "../layout/Backdrop";

import css from "./Modal.module.css";

function Modal(props) {
  function cancelHandler() {
    props.onCancel();
  }
  function confirmHandler() {
    props.onConfirm();
  }

  return (
    <div>
      <div className={css.modal}>
        <p>Are you sure?</p>
        <button className="btn btn-alt" onClick={cancelHandler}>
          Cancel
        </button>
        <button className="btn" onClick={confirmHandler}>
          Confirm
        </button>
      </div>
      <Backdrop onCancel={cancelHandler} />
    </div>
  );
}

export default Modal;
