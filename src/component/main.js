import React,{useState} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';






export const Main = () => {
       const [task, settask] = useState([
          { title: 'buy milk' , id:1},
          {title: 'buy eggs', id:2},
          {title: 'buy bread', id:3}
       ])

       const [title, settitle] = useState('')
const handleChange = (e) =>{
    console.log(e.target.value)
    settitle(e.target.value)

}

const handleSubmit = (e) =>{
    e.preventDefault();
    let newObj ={
        title: title,
        id: task.length+1
    }
    settask([...task,newObj])
   console.log(e.target.value);
   e.target.firstChild.value ='';
}




    return (
        <div >
            <form onSubmit={handleSubmit} >
                  <TextField id="standard-basic" label="Add Task"  onChange={handleChange}/> <br/>
                   <Button  variant="contained"  color="primary" type="submit">Add</Button>            
            </form>
            <h2> To Do list </h2>
                {

                    task.map((item)=>(
                        <h3>
                           {item.title}

                        </h3>
                    ))
                }


        </div>
    )
}
