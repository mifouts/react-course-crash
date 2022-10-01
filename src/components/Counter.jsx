import React, {useState} from 'react';


/* function Counter() {
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
        <div className="counter">
            <span className="counter__output">{Counter}</span>
            <div className="button__container">
                <button className="control__btn" onClick={increase}>+</button>
                <button className="control__btn" onClick={decrease}>-</button>
                <button className="reset" onClick={reset}>Reset</button>
            </div>
        </div>
    );
} */



function Counter() {
  const [cart, setCart] = useState({ item: 'apple', quantity: 0 });
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
    <div>
      <button onClick={() => null}>-</button>
      {cart.quantity}
      <button onClick={() => null}>+</button>
    </div>
  )


export default Counter;
