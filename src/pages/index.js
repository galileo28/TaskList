import React, { useState, useEffect } from 'react'
import Container from '@/components/Container'
import Navbar from '@/components/Navbar'
import TaskList from '@/components/TaskList'
import TaskCard from '@/components/TaskCard'

export default function Home () {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/api/v1/tasks')
      .then(response => response.json())
      .then(data => setTasks(data.results))
      .catch(error => console.log(error))
  }, [])

  return (
    <>
      <Navbar />
      <Container>
        <TaskList tasks={tasks} />
      </Container>
    </>
  )
}
