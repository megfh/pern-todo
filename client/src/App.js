import React from 'react';
import InputTodo from './components/InputTodo'; 
import ListTodos from './components/ListTodos'; 

function App() {
  return (
    <div className="container h-screen mx-auto px-6 flex flex-col items-center">
      <h1 className="py-8">PERN Todo List</h1>
      <InputTodo /> 
      <ListTodos /> 
    </div>
  );
}

export default App;
