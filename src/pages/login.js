import LoginPage from '@/components/Login'

export default function Login () {
  return (
    <div className='flex items-center justify-center h-screen bg-gray-900'>
      <div className='bg-gray-800 shadow-md rounded border border-gray-500'>
        <div className='flex justify-center px-7 py-6'>
          <LoginPage />
        </div>
      </div>
    </div>
  )
}
