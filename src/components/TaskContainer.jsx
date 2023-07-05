import { useDroppable } from '@dnd-kit/core'
import {
  SortableContext,
  verticalListSortingStrategy
} from '@dnd-kit/sortable'

import TaskCard from './TaskCard'

// const containerStyle = {
//   background: '#dadada',
//   padding: 10,
//   margin: 10,
//   flex: 1
// }
export default function TaskContainer (props) {
  const { id, items } = props

  const { setNodeRef } = useDroppable({
    id
  })

  return (

    <SortableContext
      id={id}
      items={items}
      strategy={verticalListSortingStrategy}
    >

      <div ref={setNodeRef} className='bg-white'>
        {items.map((task) => (
          <TaskCard key={task.id} id={task.id} name={task.nombre} />
        ))}
      </div>
    </SortableContext>
  )
}
//
