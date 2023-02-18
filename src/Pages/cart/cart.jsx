import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import Counter from "../../Components/counter/counter";
import { removeFromCart } from "../../redux/cart/action";
import { REMOVE_FROM_CART } from "../../redux/cart/cartType";
import { updateCount } from "../../redux/cart/action";

const Cart=()=>{
    const dispatch= useDispatch();
    const data= useSelector(store=>store);
    const [count,setCount]= useState();
    console.log(data)
    
 
    
      const handCountChange = (count, id) => {
        dispatch(updateCount(id, count));
      };
    
    

    return(<div>
       <h1>Cart Page</h1>
       <Link to='/checkout/userDetailForm'>User Detail Form</Link>
       <table>
       {data.product.map((product)=>(
          <div>
         
          <tr>{product.title}</tr>
          <td>{product.price}</td>
          <td><img src={product.image} alt={product.title} /></td>
          <td><Counter props={product.count} onCountChange={(count) => handCountChange(count, product.id)}></Counter></td>
          <td>{product.count}</td>
          </div>
        ))}
        
         </table>
       <Outlet/>
    

    </div>)
}
export default Cart;