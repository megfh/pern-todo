import React, { useState } from 'react'; 

const EditTodo = ({ todo }) => {
  const [description, setDescription] = useState(todo.description); 

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const body = { description }; 
      await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
        method: "PUT", 
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify(body)
      }); 
      window.location = "/"
    } catch (err) {
      console.error(err.message); 
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        className="w-full px-2 py-2 text-lg"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </form>
  )
}

export default EditTodo; 