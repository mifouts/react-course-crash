import './App.css';
import Todo from './components/Todo.jsx'
import Header from './components/Header.jsx';
import Modal from './components/Modal.jsx';


function App() {
let isModalOpen = false;

function toggleModal() {
  isModalOpen = !isModalOpen
  console.log(isModalOpen)
}

  return (
    <>
      <Header />
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value);
        } } />
        <button onClick={toggleModal}>Add todo</button>
      </div>
      <div className="todo__wrapper">
      <Todo 
      title="Finish Frontend Simplified"
      />
      <Todo 
      title="Finish Interview Section"
      />
      <Todo 
      title="Land a 100k Job"
      />
      </div>
      {isModalOpen && <Modal 
      paragraph="Confirm Delete?"
      buttonCancel="Cancel"
      buttonConfirm="Confirm"
  />}
      </>
      )
}

export default App;
