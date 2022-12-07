import {React, useState} from 'react'
import './App.css'

const products =[
   {id: 1, name: 'Constructor LEGO', price: 300, initial: 1, min: 0, max: 5},
   {id: 2, name:'Train Station', price: 200, initial: 1, min: 0, max: 6},
   {id: 3, name:'Hot Wheels Track', price: 150, initial: 2, min: 0, max: 4}
];

export default function Cart() {

const [counts, setCounters] = useState( products );
  //increase counter
  const increase = ( id ) => {
    const updatedCounters = counts.map( product =>
      ( product.id === id && product.initial > product.min)
        ? { ...product, initial: product.initial + 1 }
        : product);
    setCounters( updatedCounters );
  };

  //decrease counter
  const decrease = ( id ) => {
    const updatedCounters = counts.map( product => 
      (product.id === id && product.initial > product.min)
      ? { ...product, initial: product.initial - 1 }
      : product );
    setCounters( updatedCounters );
  };

let total_initial = 0;
let sum = 0;
  for(let i=0; i<products.length; i++){
   //Сума за кількістю продукції
   let total = products[i].price*products[i].initial;
   products[i].total = total;
   //Загальна кількість одиниць товару
   total_initial+=products[i].initial;
   //Загальна сума чеку
   sum+=products[i].total;
  }

  return (
    <div className="cart">
      <h1>Cart</h1>
      <table border='1' border-collapse = "collapse">
         <thead>
          <tr className='thead'>
          <td>Name</td>
          <td>Price</td>
          <td>Quantity</td>
          <td>Total</td>
       </tr>
       </thead>
       
      {products.map(product => (
         <tbody key={product.id}>
         <tr >
         <td >{product.name}</td>
         <td >{product.price}</td>
         <td >
         <button className="control__btn" onClick={() => increase(product.id)}>+</button>
         <span className="counter__output">{product.initial}</span>
         <button className="control__btn" onClick={() => decrease( product.id )}>-</button>
         </td>
         <td>{product.total}</td>
         </tr>
         </tbody>
      ))}
         <tfoot>
            <tr>
            <td colSpan='2'>Totals</td>
            <td>{total_initial}</td>
            <td>{sum}</td>
            </tr>
         </tfoot>
      </table>
    </div>
  )
}
