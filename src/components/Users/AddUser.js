import { useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const usernameInputRef = useRef();
  const ageInputRef = useRef();

  const addUserHandler = (event) => {
    let errorMessage = "Please enter a valid name and age (non-empty values).";
    let errorTitle = "Invalid Input!";
    event.preventDefault();
    if (
      ageInputRef.current.value.trim().length === 0 ||
      usernameInputRef.current.value.trim().length === 0
    ) {
      props.onError(true, errorTitle, errorMessage);
      return;
    } else if (ageInputRef.current < 1) {
      errorTitle = "Invalid Age!";
      errorMessage = "Please enter a valid age (> 0).";
      props.onError(true, errorTitle, errorMessage);
      return;
    }

    props.onAddUser(usernameInputRef.current.value, ageInputRef.current.value);
    usernameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" ref={usernameInputRef} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" ref={ageInputRef} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
