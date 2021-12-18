import classes from "./Modal.module.css";
import Button from "./Button";
import Card from "./Card";
const Modal = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.backdrop} onClick={props.onClose}></div>
      <Card className={classes.modalCard}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onClose}>{props.buttonText}</Button>
        </footer>
      </Card>
    </div>
  );
};

export default Modal;
