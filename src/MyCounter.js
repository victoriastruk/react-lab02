import { React, useState } from 'react'
import './App.css'

export default function MyCounter( props ) {
  const [min] = useState( -10 );
  const [max] = useState( 10 );
  const [counter, setCounter] = useState( 0 );

  //increase counter
  const increase = () => {
    if ( counter < max )
      setCounter( count => count + 1 );
  };

  //decrease counter
  const decrease = () => {
    if ( counter > min )
      setCounter( count => count - 1 );
  };

  //reset counter
  const reset = () => {
    setCounter( 0 );
  }

  return (
    <div className="counter">
      Поточний рахунок:
      <span className="counter__output">{counter}</span>
      <div className="btn__container">
        <button className="control__btn" onClick={increase}>+</button>
        <button className="control__btn" onClick={decrease}>-</button>
        <button className="reset" onClick={reset}>Reset</button>
      </div>
    </div>
  )
}
