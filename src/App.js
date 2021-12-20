import { Fragment, useState } from "react";
import ReactDom from "react-dom";
import UserList from "./components/Users/UserList";
import AddUser from "./components/Users/AddUser";
import ErrorModal from "./components/UI/ErrorModal";

function App() {
  const [users, setUsers] = useState([]);
  const [errorState, setErrorState] = useState({
    error: false
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

  const displayModalHandler = (error, title, message) => {
    setErrorState({
      error: error,
      title: title,
      message: message
    });
  };

  const removeModalHandler = () => {
    setErrorState({
      error: false
    });
  };

  return (
    <Fragment>
      <AddUser onError={displayModalHandler} onAddUser={addUserHandler} />
      <UserList users={users} />
      {errorState.error &&
        ReactDom.createPortal(
          <ErrorModal
            title={errorState.title}
            message={errorState.message}
            buttonText="Okay"
            onClose={removeModalHandler}
          />,
          document.getElementById("modal")
        )}
    </Fragment>
  );
}

export default App;
