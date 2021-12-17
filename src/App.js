import { useState } from "react";
import UserList from "./components/Users/UserList";
import AddUser from "./components/Users/AddUser";
import Modal from "./components/UI/Modal";

function App() {
  const [users, setUsers] = useState([]);
  const [errorState, setErrorState] = useState({
    error: false,
    message: ""
  });

  const addUserHandler = (name, age) => {
    setUsers((prev) => [
      {
        name: name,
        age: age,
        id: Math.random().toString()
      },
      ...prev
    ]);
  };

  const displayModalHandler = (error, message) => {
    setErrorState({
      error: error,
      message: message
    });
  };

  const removeModalHandler = () => {
    setErrorState({
      error: false
    });
  };

  return (
    <div>
      <AddUser onError={displayModalHandler} onAddUser={addUserHandler} />
      <UserList users={users} />
      {errorState.error && (
        <Modal
          title="Invalid Input"
          message={errorState.message}
          buttonText="Okay"
          onClose={removeModalHandler}
        />
      )}
    </div>
  );
}

export default App;
