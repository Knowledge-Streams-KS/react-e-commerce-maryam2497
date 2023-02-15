import { useSelector, useDispatch } from "react-redux";
// import {
//   decrement,
//   increment,
//   reset,
//   logIn,
//   logOut,
// } from "./redux/actions/index";

const CheckOut=()=>{
  const dispatch= useDispatch();
  const data= useSelector();
  const quantity= data.quantity;

    return(<div>
        {/* <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button> */}
      <div>
        {data.product.map(product=>(
          <h1>
          <p>{product.id}</p>
          <p>{product.title}</p>
          </h1>
        ))}
      </div>
    </div>)
}
export default CheckOut;