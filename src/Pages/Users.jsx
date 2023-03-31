import {useEffect, useState } from "react"
import {Link, useSearchParams} from "react-router-dom"

const getcurrentpage= (pagenum)=>{
    pagenum= Number(pagenum);
    if(typeof pagenum!=="number" || pagenum<=0){
        pagenum=1;
    }
    if(!pagenum){
        pagenum=1
    }
    return pagenum;
}
const User= () =>{
    const [data, setData]= useState({});
    //maintain page state
    const [seacrhparams, setsearchparams] = useSearchParams();
    const initialvalue=getcurrentpage(seacrhparams.get("page"));
    const [page, setPage]= useState( initialvalue);
    useEffect(()=>{
      fetch(`https://reqres.in/api/users?page=${page}`)
      .then((res)=>res.json())
      .then((res)=>setData(res))
      .catch((err)=>console.log(err));
    }, [page])
    useEffect( ()=>{
        setsearchparams({page:page})
    },[page]
         
    );
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