import {useEffect, useState } from "react"


import {Link} from "react-router-dom"
const User= () =>{
    const [data, setData]= useState({});
    
    useEffect(()=>{
      fetch('https://reqres.in/api/users?page=1')
      .then((res)=>res.json())
      .then((res)=>setData(res))
      .catch((err)=>console.log(err));
    }, [])
    console.log(data);

    return (
        <>
            <h1>
                Users Page
            </h1>
            {data&&
            
            data?.data &&
    data?.data?.map((user)=>(<p key={user.id}><Link to={`/user/${user.id}`}>{user.first_name} {user.last_name}</Link></p>))}
        </>
    );
};
export default User;