import React from 'react'

 function Showusers() {
   let data=[];

   fetch('https://jsonplaceholder.typicode.com/users')
   .then((response)=>response.json())
   .then((response)=>{data=response;
   console.log(data)
}

   );
   
    return (
        <div>
            {data.map((item)=>(
              <p>Name{item.username}</p>))}
            
        </div>
    )
}
export default Showusers;         