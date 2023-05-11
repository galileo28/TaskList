const fixedInputClass = 'bg-gray-700 rounded-md appearance-none relative block w-full px-3 py-2 border-2 border-gray-500 placeholder-gray-500 text-white focus:outline-none focus:ring-purple-500 focus:border-blue-500 focus:z-10 sm:text-sm'
export default function Input ({
  heading,
  paragraph,
  linkName,
  linkUrl = '#',
  handleChange,
  value,
  labelText,
  labelFor,
  id,
  name,
  type,
  isRequired = false,
  placeholder,
  customClass
}) {
  return (
    <div>
      <label htmlFor={name} className='text-white'>{labelText}</label>
      <input
        onChange={handleChange}
        value={value}
        id={id}
        name={name}
        type={type}
        required={isRequired}
        className={fixedInputClass + customClass}
        placeholder={placeholder}
      />
    </div>
  )
}
