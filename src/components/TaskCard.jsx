import MenuIcon from './MenuIcon'
// import { useDraggable } from '@dnd-kit/core'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
function TaskCard (props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition
  } = useSortable({ id: props.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  }

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className='bg-white rounded-md shadow-lg mt-3 mr-4 mb-2 ml-4 flex justify-between items-center relative w-auto border-2 border-gray-200'
    >
      <div className='flex items-center'>
        <div>
          <h3 className='text-lg text-gray-500 font-semibold truncate ml-4'>{props.name}</h3>
        </div>
      </div>
      <MenuIcon />
    </div>
  )
}

export default TaskCard
