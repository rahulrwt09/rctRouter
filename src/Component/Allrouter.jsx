import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Singleuser from '../Pages/SingleUser';
import {Routes, Route } from "react-router-dom"
import Login from '../Pages/Login';
import User  from '../Pages/Users';
import PrivateRoute from './PrivateRoute';
function Allroute(){
  return (

    <Routes>
    <Route path="/" element={ <PrivateRoute><Home/> </PrivateRoute> }/>
    <Route path="/about" element={<PrivateRoute><About/></PrivateRoute>}/>
    <Route path="/contact" element={<PrivateRoute><Contact/></PrivateRoute>}/>
 
    <Route path="/User" element={<PrivateRoute><User/></PrivateRoute>}/>
    <Route path="/User/:id" element={<PrivateRoute><Singleuser/></PrivateRoute>}/>
    <Route path="/Login" element={<Login/>}/>
  </Routes>
  );
}
export default Allroute;