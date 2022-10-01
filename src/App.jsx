import './App.css';
import Todo from './components/Todo.jsx'
import Header from './components/Header.jsx';
import Modal from './components/Modal.jsx';
import React, { useState } from 'react';


function App() {

  const [showModal, setShowModal] = useState(false)
 /*  const [Counter, setCounter] = useState(0)
    const increase = () => {
        setCounter(count => count + 1)
      }
      const decrease = () => {
        setCounter(count => count - 1)
      }
      const reset = () => {
        setCounter(0)
      } */

      const [cart, setCart] = useState({ item: 'apple', quantity: 0 });
    /*   const increase = () => {
        setCart(count => count + 1)
      }
      const decrease = () => {
        setCart(count => count - 1)
      } */

      function addApple() {
        setCart(prevCart => ({...prevCart, quantity: 1,}))
      }
      function removeApple() {
        setCart(prevCart => ({...prevCart, quantity: 1,}))
      }
      const reset = () => {
        setCart(0)
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


    <div>
      <button onClick={removeApple}>-</button>
      {cart.quantity}
      {cart.item}
      <button onClick={addApple}>+</button>
      <button onClick={reset}>Reset</button>
    </div>


     {/* <div className="counter">
          <span className="counter__output">{Counter}</span>
          <div className="button__container">
              <button className="control__btn" onClick={increase}>+</button>
              <button className="control__btn" onClick={decrease}>-</button>
              <button className="reset" onClick={reset}>Reset</button>
          </div>
      </div> */}
    </>
      )
}

export default App;
