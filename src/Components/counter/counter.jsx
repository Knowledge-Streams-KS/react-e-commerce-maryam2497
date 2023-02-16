import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cart/action";

const Counter = ({ onCountChange,props }) => {
  const [count,setCount]=useState(props??1);
  const dispatch = useDispatch();
  // const product = useSelector(state=>state)
  const increment = () =>{
    const newCount = count+1;
    setCount(newCount);
    onCountChange(newCount);
    // dispatch(addToCart({...product,count}));
  };
  
  const decrement = () =>{
    const newCount = count-1;
    setCount(newCount);
    onCountChange(newCount);
  };
  return (
    <>
      <button onClick={increment}>+</button>
      <h1>{count}</h1>
      <button onClick={decrement}>-</button>  
    </>
  );
};

export default Counter;