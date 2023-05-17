export default function Container ({ children }) {
  return (
    <div className='bg-gray-900 text-white h-screen flex items-center justify-center'>
      <div className='bg-gray-800 h-4/6 w-1/3 px-10 py-8'>
        {children}
      </div>
    </div>
  )
}
