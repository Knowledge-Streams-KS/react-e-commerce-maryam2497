import { Link, Outlet } from "react-router-dom";

const Cart=()=>{
    return(<div>
       <h1>Cart Page</h1>
       <Link to='/checkout/userDetailForm'>User Detail Form</Link>
       {/* <br />
       <Link to='/checkout/orderConfirmation'>order Confirmation</Link> */}
       <Outlet/>
    </div>)
}
export default Cart;