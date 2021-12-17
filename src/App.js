import { useState } from "react";
import UserList from "./components/Users/UserList";
import AddUser from "./components/Users/AddUser";
// import Modal from "./components/UI/Modal";

function App() {
  let [users, setUsers] = useState([]);

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

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={users} />
      {/* <Modal title="Modal" message="This is a modal!" buttonText="Okay" /> */}
    </div>
  );
}

export default App;
