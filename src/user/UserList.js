import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

export default function UserList() {
  
    const [User, setUser] = useState([])
      
    useEffect(
        ()=>{
       axios.get('https://jsonplaceholder.typicode.com/users')
       .then  ((res)=>{
           console.log(res.data)
           setUser(res.data)
       } )
    .catch(err=>(console.log(err)))
        },[])
    
    return (
        <div className='list'>

             <Link to='/'> Home</Link>
            <h1>Users Name List</h1>
           
         { User.map((item)=>(
             <div>
                <Link to ={`/User/${item.id}`}>{item.name}</Link>
                 
             </div>

         ))



         }
        </div>
    )
}
