import React, { useState, useEffect } from 'react'
import Container from '@/components/Container'
import Navbar from '@/components/Navbar'
import TaskList from '@/components/TaskList'
import TaskCard from '@/components/TaskCard'

export default function Home () {
  const [tasks, setTasks] = useState([])
  const [lists, setLists] = useState([])
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')
  const [filteredTasks, setFilteredTasks] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/api/v1/task')
      .then(response => response.json())
      .then(data => setTasks(data.results))
      .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    fetch('http://localhost:3001/api/v1/list')
      .then(response => response.json())
      .then(data => setLists(data.results))
      .catch(error => console.log(error))
  }, [])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleMenuOptionClick = (option) => {
    setSelectedOption(option)
    const filteredTasks = tasks.filter(task => task.lista_id === option)
    setFilteredTasks(filteredTasks)
  }

  return (
    <>
      <Navbar />
      <Container>
        <button onClick={toggleMenu} className='bg-gray-700 text-white py-2 px-4 rounded-lg mb-4'>
          Listas de tareas
        </button>

        {menuOpen && (
          <div className='bg-gray-700 rounded-lg shadow mb-6 w-auto'>
            <ul>
              {lists.map(list => (
                <button
                  className='text-white block px-4 py-2 hover:bg-gray-600'
                  key={list.id}
                  onClick={() => handleMenuOptionClick(list.id)}
                >
                  {list.nombre}
                </button>
              ))}
            </ul>
          </div>

        )}
        <TaskList tasks={filteredTasks} />
      </Container>
    </>
  )
}
