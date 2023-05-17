import React, { useState } from 'react'
function TaskCard ({ task }) {
  const { id, nombre, descripcion } = task
  const [completada, setCompletada] = useState(false)
  const handleCheckboxChange = () => {
    setCompletada(!completada)
  }
  return (
    <div className='bg-gray-700 rounded-lg shadow-lg p-8 flex justify-between items-center relative w-auto border-2 border-gray-500'>
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
        </div>
      </div>
      <div className='flex items-center'>
        <button className='bg-red-600 hover:bg-purple-500 px-5 py-2 text-gray-50 rounded-full'>Delete</button>
      </div>
      <p className='absolute bottom-0 right-2 text-xs text-gray-500'>
        22/01/2023
      </p>
      <div className='absolute top-0 left-0 right-0 h-2 bg-purple-500 rounded-t-lg' />
    </div>
  )
}

export default TaskCard
