import { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import UserList from "./UserList";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState();
  // const [formInputsValid, setFormInputsValid] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredAge.trim().length === 0 || enteredUsername.trim().length === 0) {
      return;
    } else if (enteredAge < 1) {
      return;
    }
    props.setUsers((prev) => [
      {
        name: enteredUsername,
        age: enteredAge
      },
      ...prev
    ]);
    setEnteredUsername("");
    setEnteredAge("");
    console.log(enteredUsername, enteredAge);
  };

  // const checkFormInputs = () => {
  //   enteredAge.trim().length === 0 || enteredUsername.trim().length === 0
  //     ? setFormInputsValid(false)
  //     : setFormInputsValid(true);
  // };

  const inputChangeHandler = (event) => {
    event.target.id === "username" && setEnteredUsername(event.target.value);
    event.target.id === "age" && setEnteredAge(event.target.value);
    // checkFormInputs();
  };

  return (
    <div>
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={inputChangeHandler}
            value={enteredUsername}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            onChange={inputChangeHandler}
            value={enteredAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
