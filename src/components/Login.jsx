import { useState } from 'react'
import { loginFields } from '@/constants/formFields'
import FormExtra from './FormExtra'
import Input from './Input'
import FormAction from './FormAction'
const fields = loginFields
const fieldsState = {}
fields.forEach(field => fieldsState[field.id] = '')

export default function Login ({
  heading,
  paragraph,
  linkName,
  linkUrl = '#'
}) {
  const [loginState, setLoginState] = useState(fieldsState)

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    authenticateUser()
  }
  const authenticateUser = () => {

  }
  return (
    <div className='flex items-center justify-center h-screen bg-gray-900'>
      <div className='bg-gray-800 shadow-md rounded border border-gray-500'>
        <div className='flex justify-center px-7 py-6'>
          <form className='space-y-4 md:space-y-6' action='#'>
            <div className='flex items-center'>
              <p className='mb-0 mr-4 text-lg text-white font-bold'>Create and account</p>
            </div>
            {
              fields.map(field =>
                <Input
                  key={field.id}
                  handleChange={handleChange}
                  value={loginState[field.id]}
                  labelText={field.labelText}
                  labelFor={field.labelFor}
                  id={field.id}
                  name={field.name}
                  type={field.type}
                  isRequired={field.isRequired}
                  placeholder={field.placeholder}
                />

              )
            }
            <FormExtra />
            <FormAction handleSubmit={handleSubmit} text='Login' />
          </form>
        </div>
      </div>
    </div>

  )
}
