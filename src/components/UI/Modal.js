import classes from "./Modal.module.css";
import Button from "./Button";
import Card from "./Card";
const Modal = (props) => {
  return (
    <div className={classes.modal}>
      <Card className={classes.modalCard}>
        <h2>{props.title}</h2>
        <p>{props.message}</p>
        <Button onClick={props.onClose}>{props.buttonText}</Button>
      </Card>
    </div>
  );
};

export default Modal;
