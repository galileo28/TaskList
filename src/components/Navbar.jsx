import Link from 'next/link'
export default function Navbar ({ handleAddTask }) {
  return (
    <>
      <header className='flex justify-between items-center bg-gray-800 px-28 py-3'>
        <Link href='/'>
          <h1 className='font-bold text-3xl text-white'>Task App</h1>
        </Link>

        <div>
          <button onClick={handleAddTask} className='bg-purple-600 hover:bg-purple-500 px-5 py-2 text-gray-50 rounded'>Add Task</button>
        </div>
      </header>

    </>
  )
}
