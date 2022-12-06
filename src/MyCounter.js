import { React, useState } from 'react'
import './App.css'

const counters = [
  { id: 1, initial: 6, min: -5, max: 10 },
  { id: 2, initial: 5, },
  { id: 3, },
];



export default function MyCounter() {
  for(let i = 0; i<counters.length; i++){
    if(counters[i].hasOwnProperty('initial') === false){
        counters[i].initial = 0;
    } else if(counters[i].hasOwnProperty('min') === false){
      counters[i].min = -10;
    } else if(counters[i].hasOwnProperty('max') === false){
      counters[i].max = 10;
    }
  }
  

const [counts, setCounters] = useState( counters );

  const increase = ( id ) => {
    const updatedCounters = counts.map( el =>
      ( el.id === id && el.initial < el.max )
        ? { ...el, initial: el.initial + 1 }
        : el);
    setCounters( updatedCounters );
  };

  //decrease counter
  const decrease = ( id ) => {
    const updatedCounters = counts.map( el => 
      (el.id === id && el.initial > el.min)
      ? { ...el, initial: el.initial - 1 }
      : el );
    setCounters( updatedCounters );
  };

  //reset counter
  const reset = ( id ) => {
    const updatedCounters = counts.map
    ( el => el.id === id
      ? { ...el, initial: 0 }
      : el );
    setCounters( updatedCounters );
  }

  return (
    <ul>
      {counts.map( el => (
        <li key={el.id}>
          <div className="counter">
            Поточний рахунок:
            <span className="counter__output">{el.initial}</span>
            <div className="btn__container">
              <button className="control__btn" onClick={() => increase( el.id )}>+</button>
              <button className="control__btn" onClick={() => decrease( el.id )}>-</button>
              <button className="reset" onClick={() => reset( el.id )}>Reset</button>
            </div></div></li> ))}
    </ul>
  )
} 
