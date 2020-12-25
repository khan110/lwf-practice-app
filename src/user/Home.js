import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            
            <Link to='/'>Home</Link>
            <br/>
            <Link to='./UserList'>Users List</Link>
            <br/>
            <Link to='./User/:id'>User detail</Link>

           

        </div>
    )
}
