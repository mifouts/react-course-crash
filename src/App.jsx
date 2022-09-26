import './App.css';
import Todo from './components/Todo.jsx'
import Header from './components/Header.jsx';
import Modal from './components/Modal.jsx';


function App() {
  return (
    <div>
      <Header></Header>
      <div className="todo__wrapper">
      <Todo></Todo>
      <Todo></Todo>
      <Todo></Todo>
      </div>
      <Modal />
      </div>
      )
}

export default App;
