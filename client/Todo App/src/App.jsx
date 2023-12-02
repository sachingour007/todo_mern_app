import React, { useState, useEffect } from 'react';
import './app.css';
import axios from 'axios';
import ShowTodoList from './components/ShowTodoList';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateTodo from './components/createTodo';
// import TodoWithID from './components/TodoWithID';

function App() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    axios.get('/api/todo')
      .then((res) => { setTodo(res.data) })
      .catch((err) => console.log(err))
  }, [todo])


  return (
    <BrowserRouter>
      <div className='main_app'>
        <h2>TODO LIST</h2>
        <Header />
        <Routes>
          <Route path='/' element={<ShowTodoList todo={todo} />} />
          <Route path='/new-todo' element={<CreateTodo />} />
          <Route path='/todo-edit/:id' element={<CreateTodo />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
