import React from 'react'
import './Todo.css'
import {useState, useEffect} from 'react'
import edit from './edit-removebg-preview.png'
import del from './delete-forever-removebg-preview.png'
import ban from './todobanner1-removebg-preview.png'
import add from './add-removebg-preview.png'


const getLocalItems =()=>{
  let list =localStorage.getItem('todolist')
  if (list) {
    return JSON.parse(localStorage.getItem('todolist'))
  }else{
    return [];
  }
}

export default function Todo() {
  const [todo, setTodo] = useState('')
  const [alltodo, setalltodo] = useState(getLocalItems())
  const [count, setcount] = useState("no")
  
  useEffect(() => {
   localStorage.setItem('todolist',JSON.stringify(alltodo))
   setcount( JSON.parse(localStorage. getItem("todolist")).length);
  }, [alltodo])

  const Addtodo =()=>{
    if (todo==="") {
      alert("Input error")
    }else{
      let newtodos = {todo}
      setalltodo([...alltodo,newtodos])
      setTodo("")
    }
    }
    const deleteTodo=(todoIndex)=>{
      let newAllTodo =[...alltodo]
     let found= newAllTodo.filter((todo,index)=>(index!==todoIndex))
      setalltodo(found)
    }
    const editTodo=(index)=>{
      let edit =prompt("Edit your todo")
     if (prompt==="") {
       alert('error')
      }else{
       alltodo[index].todo=edit
       setalltodo([...alltodo,])
     }
    }

  return (
    <>
    <div className="container p-3 bg-dark col-lg-4 col-md-6 col-sm-4" >
        <div className="row">
        <img src={ban} alt="" />
            <div>
            <h3 className='text-light text-center'>Add todo</h3>
           <div className="d-flex">
           <input type="text" placeholder='Your todo' onChange={(e)=>setTodo(e.target.value)} className='form-control my-3' value={todo}/>
            <img src={add} className=' ms-2 h-50 m-auto imgg' onClick={Addtodo} alt="" />
           </div>
            </div>
        </div>
        <table className=' table text-center  bg-dark text-light ms-3 m-auto'>
    {alltodo.map((todos,index)=>(
        <tr key={index}>
          <td>{index+1}</td>
          <td>{todos.todo}</td>
          <td>
          <img className='imggg' src={edit} onClick={()=>editTodo(index)} alt="Edit" />
          <img className='imgg' src={del} onClick={()=>deleteTodo(index)} alt="Delete" />
          </td>
        </tr>
    ))}
    </table>
    <p className='text-light'> You have ({count}) pending task</p>
    </div>
    </>
  )
}
