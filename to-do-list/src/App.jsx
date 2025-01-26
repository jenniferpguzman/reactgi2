import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import List from './pages/List'
import Details from './pages/Details'

function App() {
  const [tasks, setTasks] = useState ([
    {id: 1, title: 'Learn React'},
    {id: 2, title: 'Make To Do List'},
    {id: 3, title: 'Go Running'}
  ]);
  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<List tasks={tasks} setTasks={setTasks} /> } />
    <Route path="details/:taskId" element={<Details tasks={tasks}/>} />
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
