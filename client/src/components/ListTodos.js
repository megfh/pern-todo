import React, { useEffect, useState } from 'react'; 
import EditTodo from './EditTodo'; 

const ListTodos = () => {

  const [todos, setTodos] = useState([]); 

  const deleteTodo = async (id) => {
    try {
      // remove todo from database
      await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE"
      }); 
      // remove todo from state 
      setTodos(todos.filter(todo => todo.todo_id !== id)); 

    } catch (err) {
      console.error(err.message); 
    }
  }

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos"); 
      const jsonData = await response.json(); 
      setTodos(jsonData); 
    
    } catch (err) {
      console.error(err.message); 
    }
  }
  
  useEffect(() => {
    getTodos(); 
  }, [])
  
  return (
      <div className="mx-auto my-8 w-full">
        {todos.map((todo) => (
          <div key={todo.todo_id} className="flex justify-center">
            <div className="mx-2 px-2 py-2 w-10/12">
              <EditTodo todo={todo}/>
            </div>
            <div className="px-2 py-2 w-1/12 flex items-center justify-center">
              <button onClick={() => deleteTodo(todo.todo_id)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6  fill-current text-red-600"><path className="heroicon-ui" d="M8 6V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2h5a1 1 0 0 1 0 2h-1v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8H3a1 1 0 1 1 0-2h5zM6 8v12h12V8H6zm8-2V4h-4v2h4zm-4 4a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1z"/></svg>
              </button>
            </div>
          </div>
        ))}
      </div>
  ); 
}

export default ListTodos; 