import React, {useState} from 'react';


function Counter() {
    const [cart, setCart] =useState({ item: 'apple', quantity: 10 });
    const increase = () => {
        setCart(count => count + 1)
      }
      const decrease = () => {
        setCart(count => count - 1)
      }
      const reset = () => {
        setCart(0)
      }
    return (
        <div className="counter">
            <span className="counter__output">{Counter}</span>
            <div className="button__container">
                <button className="control__btn" onClick={increase}>+</button>
                {cart.quantity}
                <button className="control__btn" onClick={decrease}>-</button>
                <button className="reset" onClick={reset}>Reset</button>
            </div>
        </div>
    );
}

export default Counter;
