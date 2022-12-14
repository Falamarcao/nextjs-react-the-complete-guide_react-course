import style from "./Backdrop.module.css";

function Backdrop(props) {
  return <div className={style.backdrop} onClick={props.onCancel} />;
}

export default Backdrop;
