import './App.css'
import Navbar from './components/Navbar'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import All from './components/All'
import Done from './components/Done'
import Undone from './components/Undone'
import tasksData from './data/tasks.json'

export default function App() {
  const [tasks, setTasks] = useState(tasksData)
  const handleCheck = (id) => {
      setTasks([...tasks].map((task) => task.id === id ? {...task, done: !task.done} : task))
  }
  return(
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path='/' element={<Home tasks={tasks} setTasks={setTasks} />} />
          <Route path='/all' element={<All tasks={tasks} handleCheck={handleCheck} />} />
          <Route path='/done' element={<Done tasks={tasks} handleCheck={handleCheck} />} />
          <Route path='/undone' element={<Undone tasks={tasks} handleCheck={handleCheck} />} />
        </Routes>
      </div>
    </>
  )
}