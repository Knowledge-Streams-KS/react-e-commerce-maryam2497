import { useSelector, useDispatch } from "react-redux";


const CheckOut=()=>{
  const dispatch= useDispatch();
  const data= useSelector();

    return(<div>
    
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