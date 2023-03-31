import { useContext } from "react";
import { AuthContext } from "./Context/Authcontext";

import { NavLink} from "react-router-dom";
const   links= [
      {path:"/", text:"Home"},
      {path:"/about", text:"About"},
      {path:"/Contact", text:"Contact"},
      {path:"/User", text:"User"},
      {path:"/Login", text:"Login"},
];
function Navbar(){
  const {isAuth, logout}= useContext(AuthContext)
       const defaultcolor= {
            color:"black",
        
            textDecoration:"none",

       }

       const activecolor= {
            color:"green",
            backgroundColor:"Pink",
            textDecoration:"none",

       }
      return (

        <div style={
            {
              display:"flex",
              alignItem:"center",
              justifyContent:"space-around",
              textDecoration:"none",
      
            }}
            >
             {links.map((link)=>(
                
          <NavLink 
            style={({isActive})=>{return isActive?activecolor:defaultcolor}
            
            }
          
           
          key={link.path} to={link.path} >
           {link.text}
           
          </NavLink>
             ))}
    
            <p>IsAuth:{isAuth?"Yes":"No"}</p>
            <button disabled={!isAuth} onClick={logout}>Logout</button>
            
           </div>
      );

}
export default Navbar;