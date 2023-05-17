import React, { useState } from 'react'
import MenuIcon from './MenuIcon'

function TaskCard ({ task }) {
  const { nombre, descripcion, lista_id } = task
  const [completada, setCompletada] = useState(false)
  const handleCheckboxChange = () => {
    setCompletada(!completada)
  }

  return (
    <div className='bg-gray-700 rounded-lg shadow-lg p-8 py-2 flex justify-between items-center relative w-auto border-2 border-gray-500 mb-4'>
      <div className='flex items-center'>
        <input
          type='checkbox'
          className='rounded-full h-6 w-6 mr-8 accent-purple-600'
          checked={completada}
          onChange={handleCheckboxChange}
        />
        <div>
          <h3 className='text-lg font-semibold truncate'>{nombre}</h3>
          <p className='text-sm text-gray-600 truncate'>{descripcion}</p>
          <p className='text-xs text-gray-600'>List: {lista_id}</p>
        </div>
      </div>
      <MenuIcon />
      <p className='absolute bottom-0 right-2 text-xs text-gray-500'>
        22/01/2023
      </p>
      <div className='absolute top-0 left-0 right-0 h-2 bg-purple-500 rounded-t-lg' />
    </div>
  )
}

export default TaskCard
