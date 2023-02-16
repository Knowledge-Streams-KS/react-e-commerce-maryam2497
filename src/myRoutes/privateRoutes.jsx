import { Navigate, useLocation } from "react-router-dom"

const PrivateRoutes= ({children})=>{
    const location = useLocation();
    const user= localStorage.getItem("token");
    if(!user){
        return <Navigate to='/loginForm' state={{redirectedForm: location}}></Navigate>
    }
    // console.log("location in pr: ",location)
        return children;
}
export default PrivateRoutes;