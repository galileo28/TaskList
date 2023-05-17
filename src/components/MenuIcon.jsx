import { useState } from 'react'

export default function MenuIcon () {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button
        id='dropdownMenuIconHorizontalButton'
        data-dropdown-toggle='dropdownDotsHorizontal'
        className='inline-flex items-center p-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-500'
        type='button'
        onClick={toggleMenu}
      >
        <svg
          className='w-6 h-6'
          aria-hidden='true'
          fill='currentColor'
          viewBox='0 0 20 20'
        >
          <path d='M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z' />
        </svg>
      </button>

      {isOpen && (
        <div
          id='dropdownDotsHorizontal'
          className='z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600'
        >
          <ul className='py-2 text-sm text-gray-700 dark:text-gray-200' aria-labelledby='dropdownMenuIconHorizontalButton'>
            <li>
              <a href='#' className='block px-4 py-2 hover:bg-red-500 '>
                Eliminar
              </a>
            </li>
            <li>
              <a href='#' className='block px-4 py-2 hover:bg-gray-600'>
                Editar
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}
