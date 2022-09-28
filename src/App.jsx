import './App.css';
import Todo from './components/Todo.jsx'
import Header from './components/Header.jsx';
import Modal from './components/Modal.jsx';
import React, { useState } from 'react';


function App() {

  const [showModal, setShowModal] = useState(false)
  const [Counter, setCounter] = useState(0)
    const increase = () => {
        setCounter(count => count + 1)
      }
      const decrease = () => {
        setCounter(count => count - 1)
      }
      const reset = () => {
        setCounter(0)
      }
  return (
    <>
      <Header />
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value);
        } } />
        <button onClick={() => setShowModal(true)}>Add todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo
          title="Finish Frontend Simplified" />
        <Todo
          title="Finish Interview Section" />
        <Todo
          title="Land a 100k Job" />
      </div>
      {showModal && <Modal
        paragraph="Confirm Delete?"
        buttonCancel="Cancel"
        buttonConfirm="Confirm" />}


     <div className="counter">
          <span className="counter__output">{Counter}</span>
          <div className="button__container">
              <button className="control__btn" onClick={increase}>+</button>
              <button className="control__btn" onClick={decrease}>-</button>
              <button className="reset" onClick={reset}>Reset</button>
          </div>
      </div>
    </>
      )
}

export default App;
