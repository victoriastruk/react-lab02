import {React, useEffect, useState} from 'react'
import './App.css'

const products =[
   {id: 1, name: 'Constructor LEGO', price: 300, quantity: 1, max: 7},
   {id: 2, name:'Train Station', price: 200, quantity: 1, max: 5},
   {id: 3, name:'Hot Wheels Track', price: 150, quantity: 2}
];

export default function Cart() {
  //Початкове значення загальної вартості
  let sum = 0;

 // Перевірка на наявність параметрів. Якщо немає -  додаємо по замовчуванню
 for(let i = 0; i<products.length; i++){
  if(products[i].hasOwnProperty('quantity') === false){
      products[i].quantity = 0;
  } else if(products[i].hasOwnProperty('min') === false){
    products[i].min = 0;
  } else if(products[i].hasOwnProperty('max') === false){
    products[i].max = 99999;
  }
}

const [prods, setProducts] = useState( products );
const [total, setTotal] = useState({
  quantity: prods.reduce((prev, curr)=>prev+curr.quantity,0),
  total_price: prods.map((el)=> sum +=(el.quantity * el.price)),
})

useEffect(()=>{
  setTotal({
    quantity: prods.reduce((prev, curr)=>prev+curr.quantity,0),
  });
},[prods])

  //Лічильник зростання
  const increase = ( id ) => {
    const updatedProducts = prods.map( el =>
      ( el.id === id && el.quantity < el.max )
        ? { ...el, quantity: el.quantity + 1}
        : el);
    setProducts( updatedProducts ); 
  };

  //Лічильник спадання
  const decrease = ( id ) => {
    const updatedProducts = prods.map( el => 
      (el.id === id && el.quantity > el.min)
      ? { ...el, quantity: el.quantity - 1}
      : el );
    setProducts( updatedProducts );
  };

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
    <tbody>
      {prods.map( el => (
        <tr key={el.id}>
           {console.log(typeof(el.id))}
           <td> {el.name}</td>
           {console.log(typeof(el.name))}
           <td>{el.price}</td>
           {console.log(typeof(el.price))}
            <td className="btn__container">
              <button className="control__btn" onClick={() => increase( el.id )}>+</button>
              <span className="counter__output">{el.quantity}</span>
              <button className="control__btn" onClick={() => decrease( el.id )}>-</button>
            </td>
            <td>{el.price*el.quantity}</td>
            </tr> ))}
    </tbody>
    <tfoot>
            <tr>
            <td colSpan='2'>Totals</td>
            <td>{total.quantity}</td>
            <td>{sum}</td>
            </tr>
         </tfoot>
      </table>
    </div>
  )
}
