import { useState } from 'react'
import { loginFields } from '@/constants/formFields'
import FormExtra from './FormExtra'
import Input from './Input'
import FormAction from './FormAction'
import AccountManagementLink from './AccountManagementLink'
const fields = loginFields
const fieldsState = {}
fields.forEach(field => fieldsState[field.id] = '')

export default function Login () {
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

    <form className='space-y-4 md:space-y-6' action='#'>
      <div className='flex items-center'>
        <p className='mb-0 mr-4 text-lg text-white font-bold'>Login to your account</p>
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
      <FormExtra labelText='Remember me' textLink=' Forgot your password ' />
      <FormAction handleSubmit={handleSubmit} text='Login' />
      <AccountManagementLink text='Don`t have an account yet?' textLink='Signup' href='/signup' />
    </form>

  )
}
