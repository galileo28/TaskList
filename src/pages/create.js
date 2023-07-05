import { useState } from 'react'
import ContainerList from '@/components/ContainerList'
import Navbar from '@/components/Navbar'
import Container from '@/components/Container'

export default function CreateTask () {
  const [nombre, setNombre] = useState('')
  const [description, setDescription] = useState('')
  const [listId, setListaId] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    // Realiza la llamada a la función fetch aquí
    try {
      const response = await fetch('http://localhost:3001/api/v1/task', {
        method: 'POST',
        body: JSON.stringify({ name: nombre, description, listId }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (response.ok) {
        setNombre('')
        setDescription('')
        setListaId(0)
        console.log('Task created')
      } else {
        alert('Ha ocurrido un error al crear la tarea, vuelva a intentarlo')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Navbar />
      <Container>
        <ContainerList>
          <button className='justify-self-center font-bold text-3xl bg-gray-800 text-white  rounded-lg w-80 h-12'>Create Task</button>
          <form onSubmit={handleSubmit} className='grid justify-items-stretch space-y-4 px-4'>
            <label htmlFor='nombre' className='text-white'>Nombre:</label>
            <input type='text' id='nombre' value={nombre} onChange={(e) => setNombre(e.target.value)} required maxLength='50' className='w-full py-2 px-4 rounded bg-gray-200 text-gray-800' />

            <label htmlFor='description' className='text-white'>Descripción:</label>
            <textarea id='description' value={description} onChange={(e) => setDescription(e.target.value)} rows='4' cols='50' maxLength='255' className='w-full py-2 px-4 rounded bg-gray-200 text-gray-800' />

            <label htmlFor='lista_id' className='text-white'>ID de lista:</label>
            <input type='number' id='lista_id' value={listId} onChange={(e) => setListaId(e.target.value)} required min='1' className='w-full py-2 px-4 rounded bg-gray-200 text-gray-800' />

            <input type='submit' value='Crear tarea' className='py-2 px-4 rounded bg-blue-500 text-white font-semibold cursor-pointer hover:bg-blue-400' />
          </form>
        </ContainerList>
      </Container>

    </>
  )
}
