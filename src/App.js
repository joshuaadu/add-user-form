import { useState } from "react";
import UserList from "./components/Users/UserList";
import AddUser from "./components/Users/AddUser";
// import Modal from "./components/UI/Modal";

function App() {
  let [users, setUsers] = useState([]);

  return (
    <div>
      <AddUser setUsers={setUsers} />
      <UserList users={users} />
      {/* <Modal title="Modal" message="This is a modal!" buttonText="Okay" /> */}
    </div>
  );
}

export default App;
