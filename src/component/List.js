import React from 'react';


function List(){
    
    let students = [
        {name: 'Umair', age:11, class:"LWF1"},
        {name: 'Abeer', age:12, class:"LWF1"},
        {name: 'Shozab', age:13, class:"LWF1"}
    ]
    return (

        <div>
          { students.map((item)=>(

          <h1>Name:{item.name}Age:{item.age}Class:{item.class}</h1>
              
          ))


          }



        </div>
    )
}
export default List