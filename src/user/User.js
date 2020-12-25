import React, {useState,useEffect} from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom'



export default function User() {
 let {id} =useParams();
    const [user, setUser] = useState({})
      
    useEffect(
        ()=>{
       axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
       .then((res)=>{
           console.log(res.data)
           setUser(res.data)
       })
    .catch(err=>(console.log('my',err)))
        },[])
    
    return (
        <div className='user'>
           <p> {user.name}</p>
           <p> {user.email}</p>
           <p>  {user.website}</p>
        </div>
    )
}
