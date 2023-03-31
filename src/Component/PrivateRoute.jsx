import { AuthContext } from "../Context/Authcontext";
import {useContext} from "react";
import { Navigate } from "react-router-dom";
function PrivateRoute({children}){
    const {isAuth} = useContext(AuthContext);
   if(!isAuth){
    return <Navigate to="/Login"/>
   
   }
   return children;

}
export default PrivateRoute;
