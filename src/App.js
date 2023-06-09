import { useEffect, useState } from 'react';
import React from 'react';
import './App.css';
import Todolist from './components/Todolist';
import Header from './components/Header';
import Form from './components/Form';
const App = () => {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="container">
      <div className='app-wrapper'>
        <div>
          <Header />
        </div>

        <div>
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}


          />
        </div>
        <div>
          <Todolist
            todos={todos}
            setTodos={setTodos}

          />
        </div>
      </div>
    </div>
  );
}

export default App;
