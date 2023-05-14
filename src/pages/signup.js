import SignupPage from '@/components/Signup'

export default function Signup () {
  return (
    <div className='flex items-center justify-center h-screen bg-gray-900'>
      <div className='bg-gray-800 shadow-md rounded border border-gray-500'>
        <div className='flex justify-center px-7 py-6'>
          <SignupPage />
        </div>
      </div>
    </div>
  )
}
