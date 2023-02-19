import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cart/action";
import './counter.css'
const Counter = ({ onCountChange,props }) => {
  const [count,setCount]=useState(props??1);
  const dispatch = useDispatch();
  const increment = () =>{
    const newCount = count+1;
    setCount(newCount);
    onCountChange(newCount);
  };
  
  const decrement = () =>{
    const newCount = count-1;
    setCount(newCount);
    onCountChange(newCount);
  };
  return (
    <div className="counter">
    <button className="counter-btn" onClick={decrement}>
      -
    </button>
    <h1 className="counter-value">{count}</h1>
    <button className="counter-btn" onClick={increment}>
      +
    </button>
  </div>
  );
};

export default Counter;