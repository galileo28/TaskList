const loginFields = [
  {
    labelText: 'Email address',
    labelFor: 'email_address',
    id: 'email_address',
    name: 'email',
    type: 'email',
    autoComplete: 'email',
    isRequired: true,
    placeholder: 'name@company.com'
  },
  {
    labelText: 'Password',
    labelFor: 'password',
    id: 'password',
    name: 'password',
    type: 'password',
    autoComplete: 'current-password',
    isRequired: true,
    placeholder: 'Password'
  }
]

const signupFields = [
  {
    labelText: 'name',
    labelFor: 'name',
    id: 'name',
    name: 'user',
    type: 'user',
    autoComplete: 'user',
    isRequired: true,
    placeholder: 'User name'
  },
  {
    labelText: 'Email address',
    labelFor: 'email_address',
    id: 'email',
    name: 'email',
    type: 'email',
    autoComplete: 'email',
    isRequired: true,
    placeholder: 'Email address'
  },
  {
    labelText: 'Password',
    labelFor: 'password',
    id: 'password',
    name: 'password',
    type: 'password',
    autoComplete: 'current-password',
    isRequired: true,
    placeholder: 'Password'
  },
  {
    labelText: 'Confirm Password',
    labelFor: 'confirm-password',
    id: 'confirm-password',
    name: 'confirm-password',
    type: 'password',
    autoComplete: 'confirm-password',
    isRequired: true,
    placeholder: 'Confirm Password'
  }
]

export { loginFields, signupFields }
