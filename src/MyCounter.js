import { React, useState } from 'react'
import './App.css'

const counters = [
  { id: 1, initial: 6, min: -5, max: 10 },
  { id: 2, initial: 5, },
  { id: 3, },
];



export default function MyCounter() {
  // Перевірка на наявність параметрів. Якщо немає -  додаємо по замовчуванню
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
  //Лічильник зростання
  const increase = ( id ) => {
    const updatedCounters = counts.map( el =>
      ( el.id === id && el.initial < el.max )
        ? { ...el, initial: el.initial + 1 }
        : el);
    setCounters( updatedCounters );
  };

  //Лічильник спадання
  const decrease = ( id ) => {
    const updatedCounters = counts.map( el => 
      (el.id === id && el.initial > el.min)
      ? { ...el, initial: el.initial - 1 }
      : el );
    setCounters( updatedCounters );
  };

  //Скасування
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
