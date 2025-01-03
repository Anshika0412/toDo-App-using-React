import React, { useState } from 'react'
import { v4 as uuidv4} from 'uuid'

export default function ToDoList() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange=(e)=>{
    setTodo(e.target.value)
  }
  
  const handleAdd=()=>{
    setTodos([...todos,{id:uuidv4(), todo , isCompleted:false}])
    setTodo(" ")
    
  }

  const handleCheckbox=(e)=>{
    let id = e.target.name;
    let index = todos.findIndex(item=>{
      return item.id===id;
    })
    let newTodos = [...todos]
    newTodos[index].isCompleted = ! newTodos[index].isCompleted;
    setTodos(newTodos);
    
  }

  const handleEdit=(e, id)=>{
    let t = todos.filter(i=>i.id===id)
    setTodo(t[0].todo)
    handleDelete(e,id)
    // saveToLS()
     }

    const handleDelete=(e, id)=>{
    let newTodos = todos.filter(item=>{return item.id !== id})
    setTodos(newTodos)
    // saveToLS()
      }

  return (
    <div className='bg-gray-600 w-full h-lvh  text-center'>
        <div>
            <input onChange={handleChange} value={todo} className='w-96 m-10 h-10 rounded-xl' type="text" />
            <button onClick={handleAdd} disabled={todo.length<=3} className='bg-slate-950 text-white h-10 w-20 rounded-xl font-bold hover:bg-teal-900'>Add</button>
        </div>
        <div className='bg-blue-400 w-7/12 ml-60  mb-20 rounded-xl text-left pl-20 pb-10'>
            <h2 className='text-white text-2xl py-6 '>Things to do :</h2>
            {todos.length ===0 && <div className="m-5 font-semibold"> Nothing to do , just enjoy </div>}
            {todos.map(item=>{
              return <> 
                <div key={item.id} className='todos flex gap-5 align-text-top my-2' >
                <input  name={item.id} onChange={handleCheckbox} type="checkbox"  id="" />
                <div className={item.isCompleted?"line-through":""}>{item.todo}</div>

                <div className='flex gap-3 ml-16' >
                  <button onClick={(e)=>{handleEdit(e,item.id)}} className='bg-slate-950 text-white h-10 w-20 rounded-xl font-bold hover:bg-teal-900'>Edit</button>
                  <button onClick={(e)=>{handleDelete(e,item.id)}} className='bg-slate-950 text-white h-10 w-20 rounded-xl font-bold hover:bg-teal-900'>Delete</button>
                </div> 
              </div> 
              </>
               } )
            }
        </div>
        
    </div>
  )
}
