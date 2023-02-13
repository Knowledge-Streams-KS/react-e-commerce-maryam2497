import { Link, Outlet } from "react-router-dom";

const Cart=()=>{
    return(<div>
         <h1>Cart Page</h1>
        
      <Link to="/checkout/userDetailForm">User Details Form</Link>
      {/* <br/>
      <Link to="/checkout/orderConfirmation">Order Complete</Link> */}
    <Outlet></Outlet>
    </div>)
}
export default Cart;