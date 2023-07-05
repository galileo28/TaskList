export default function ContainerList ({ children }) {
  return (
    <div className=' overflow-y-scroll bg-gray-800 py-8 grid justify-items-stretch mb-0 space-y-4 h-80 min-h-'>
      {children}
    </div>
  )
}
