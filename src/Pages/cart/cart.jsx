import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { removeFromCart } from "../../redux/cart/action";
import { REMOVE_FROM_CART } from "../../redux/cart/cartType";

const Cart=()=>{
    const dispatch= useDispatch();
    const data= useSelector(store=>store);
    const quantity= data.quantity;
   
    return(<div>
       <h1>Cart Page</h1>
       <Link to='/checkout/userDetailForm'>User Detail Form</Link>
       {data.product.map(product=>(
          <div>
          {/* <p>{product.id}</p> */}
          <p>{product.title}</p>
          <p>{product.price}</p>
          <img src={product.image} alt={product.title} />
          <button onClick={()=>{
        dispatch(removeFromCart(product))
    }}>Remove</button>
    <button>-</button>
      <span>{quantity}</span>
      <span></span>
      <button>+</button>
          </div>
        ))}
       {/* <br />
       <Link to='/checkout/orderConfirmation'>order Confirmation</Link> */}
       <Outlet/>
    </div>)
}
export default Cart;