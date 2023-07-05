import { useState } from 'react'
import { signupFields } from '@/constants/formFields'
import FormAction from '@/components/FormAction'
import FormExtra from './FormExtra'
import Input from '@/components/Input'
import AccountManagementLink from '@/components/AccountManagementLink'
const fields = signupFields
const fieldsState = {}

fields.forEach((field) => (fieldsState[field.id] = ''))

export default function Signup () {
  const [signupState, setSignupState] = useState(fieldsState)

  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(signupState)
    createAccount()
  }

  const createAccount = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signupState)
      })

      if (response.ok) {
        // El usuario se creó exitosamente
        console.log('Usuario creado correctamente')
      } else {
        // Ocurrió un error al crear el usuario
        console.log('Error al crear el usuario')
      }
    } catch (error) {
      console.error('Error en la solicitud:', error)
    }
  }
  return (
    <form className='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
      <div className='flex items-center'>
        <p className='mb-0 mr-4 text-lg text-white font-bold'>Create and account</p>
      </div>
      {fields.map((field) => (
        <Input
          key={field.id}
          handleChange={handleChange}
          value={signupState[field.id]}
          labelText={field.labelText}
          labelFor={field.labelFor}
          id={field.id}
          name={field.name}
          type={field.type}
          isRequired={field.isRequired}
          placeholder={field.placeholder}
        />
      ))}
      <FormExtra labelText='I accept the' textLink='Terms and Conditions' />
      <FormAction handleSubmit={handleSubmit} text='Signup' />
      <AccountManagementLink text='Already have an account?' textLink='Login here' href='/login' />
    </form>
  )
}
