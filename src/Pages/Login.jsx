import  {useContext } from 'react'
import { AuthContext } from '../Context/Authcontext';

function Login(){
const {login,isAuth} = useContext(AuthContext)
    return(
     <>
  <button  disabled={isAuth} onClick={login}>Login</button>
     </>
    );
}
export default Login