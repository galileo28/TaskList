export default function FormAction ({
  handleSubmit,
  type = 'Button',
  action = 'submit',
  text
}) {
  return (
    <>
      {type === 'Button'
        ? (
          <button
            type={action}
            className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ripple-bg-purple-600'
            onSubmit={handleSubmit}
          >
            {text}
          </button>
          )
        : (
          <></>
          )}
    </>
  )
}
