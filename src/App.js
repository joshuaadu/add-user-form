import AddUser from "./components/Users/AddUser";
import Modal from "./components/UI/Modal";

function App() {
  return (
    <div>
      <AddUser />
      <Modal title="Modal" message="This is a modal!" buttonText="Okay" />
    </div>
  );
}

export default App;
