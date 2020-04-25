import React, { useState } from 'react'; 

const InputTodo = () => {
  const [description, setDescription] = useState(""); 

  const onSubmitForm = async (e) => {
    try {
      e.preventDefault(); 
      const body = { description }; 
      await fetch("http://localhost:5000/todos", {
        method: "POST", 
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify(body)
      }); 
      // clear input after new item has been successfully added
      setDescription(""); 
      window.location = "/"; 
    } catch (err) {
      console.error(err.message); 
    }
  }

  return (
    <>
      <form className="w-full flex justify-center" onSubmit={onSubmitForm}>
        <input 
          type="text" 
          className="border mr-4 p-2 rounded w-10/12" 
          value={description} 
          onChange={e => setDescription(e.target.value)}
        />
        <button className="block bg-green-600 hover:bg-green-800 uppercase text-lg p-2 rounded w-1/12 flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8  fill-current text-white">
            <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-9h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V9a1 1 0 0 1 2 0v2z"/>
          </svg>
        </button>
      </form>
    </>
  )
}

export default InputTodo; 