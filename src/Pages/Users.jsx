import {useEffect, useState } from "react"
import {Link, useNavigate} from "react-router-dom"


const User= () =>{
    const [data, setData]= useState({});
    //maintain page state
    const [page, setPage]= useState(1);
    useEffect(()=>{
      fetch(`https://reqres.in/api/users?page=${page}`)
      .then((res)=>res.json())
      .then((res)=>setData(res))
      .catch((err)=>console.log(err));
    }, [page])
    const handlepagechange= (val)=>{
        const changeBy=page+val;
        setPage(changeBy)
    }
    console.log(data);

    return (
        <>
            <h1>
                Users Page
            </h1>
            {data&&
            
            data?.data &&
    data?.data?.map((user)=>(<p key={user.id}><Link to={`/user/${user.id}`}>{user.first_name} {user.last_name}</Link></p>))}
    <button onClick={()=>handlepagechange(-1)}>Prev</button>
    <button disabled>{page}</button>
    <button onClick={()=>handlepagechange(1)} >Next</button>
        </>
    );
};
export default User;