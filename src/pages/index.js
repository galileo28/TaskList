import React, { useState, useEffect } from 'react'
import Container from '@/components/Container'
import Navbar from '@/components/Navbar'
import TaskList from '@/components/TaskList'
import TaskCard from '@/components/TaskCard'
import { useRouter } from 'next/router'
import ContainerList from '@/components/ContainerList'
export default function Home () {
  const [tasks, setTasks] = useState([])
  const [lists, setLists] = useState([])
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')
  const [filteredTasks, setFilteredTasks] = useState([])
  const router = useRouter()

  useEffect(() => {
    fetch('http://localhost:3001/api/v1/task')
      .then((response) => response.json())
      .then((data) => setTasks(data.results))
      .catch((error) => console.log(error))
  }, [])

  useEffect(() => {
    fetch('http://localhost:3001/api/v1/list')
      .then((response) => response.json())
      .then((data) => setLists(data.results))
      .catch((error) => console.log(error))
  }, [])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleMenuOptionClick = (option) => {
    setSelectedOption(option)
    const filteredTasks = tasks.filter((task) => task.lista_id === option)
    setFilteredTasks(filteredTasks)
    const data = filteredTasks
    const dataString = JSON.stringify(data)
    router.push(`/tasks?data=${encodeURIComponent(dataString)}`)
  }
  const handleAddTask = () => {
    router.push('/create')
  }

  return (
    <>
      <Navbar handleAddTask={handleAddTask} />
      <Container>
        <ContainerList>
          <button
            onClick={toggleMenu}
            className='justify-self-center font-bold text-3xl bg-gray-800 text-white  rounded-lg w-80 h-12'
          >
            Listas de tareas
          </button>

          {menuOpen && (
            <div className='bg-gray-700 rounded-lg shadow justify-self-center mt-0'>
              <ul className='bg-gray-700 rounded-lg'>
                {lists.map((list) => (
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
        </ContainerList>
      </Container>
    </>
  )
}
