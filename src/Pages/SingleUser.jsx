import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function Singleuser(){
   const {id}= useParams();
   const[ useDetail, setDetail]= useState({});
   useEffect(()=>{
    fetch(`https://reqres.in/api/users/${id}`)
    .then((res)=>res.json())
    .then((res)=>setDetail(res.data))
    .catch((err)=>console.log(err));

   }, [id]);
   const {first_name, last_name, email, avatar}= useDetail;
   return (
    <>
        <div>
           <h1>single user</h1>
           <img src={avatar} alt="img"/>
           <p>
            {first_name}
            {"--"}
            {last_name}
         </p>
         <p>{email}</p>
        </div>
    </>
  );
}
export default Singleuser