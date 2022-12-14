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



/* function Counter() {
  const [cart, setCart] = useState({ item: 'apple', quantity: 0 });
 /*  const increase = () => {
    setCart(count => count + 1)
  }
  const decrease = () => {
    setCart(count => count - 1)
  } */
/*   const reset = () => {
    setCart(0)
  }

  function addApple() {
    setCart(prevCart => ({...prevCart, quantity: 1,}))
  }
  function removeApple() {
    setCart(prevCart => ({...prevCart, quantity: 1,}))
  }
  return (
    <div>
      <button onClick={removeApple}>-</button>
      {cart.quantity}
      {cart.item}
      <button onClick={addApple}>+</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
  } */

  function Counter() {
    const [arr, setArr] = useState([])

    function addPlus (){
      setArr(prevArr => [...prevArr, "+"])
    }
    function addMinus (){
      setArr(prevArr => [...prevArr, "-"])
    }
    
  return (
    <div>
      <button onClick={addPlus}>+</button>
      <button onClick={addMinus}>-</button>
      {arr.toString()}
    </div>
  )
  }
export default Counter;
