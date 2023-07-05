import Container from '@/components/Container'
import Navbar from '@/components/Navbar'
import TaskContainer from '@/components/TaskContainer'
import { useRouter } from 'next/router'
import TaskCard from '@/components/TaskCard'
import { useState } from 'react'
import {
  DndContext,
  DragOverlay,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core'
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable'

const wrapperStyle = {
  display: 'flex',
  flexDirection: 'row'
}

export default function Tasks () {
  const router = useRouter()
  const dataString = router.query.data
  const data = JSON.parse(dataString)
  const [items, setItems] = useState({
    root: data,
    container1: []
  })
  const [activeId, setActiveId] = useState()
  const [containerId, setContainerId] = useState()
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  )
  return (

    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <Navbar handleAddTask={handleAddTask} />
      <Container>

        <TaskContainer id='root' items={items.root} />
        <TaskContainer id='container1' items={items.container1} />

      </Container>
    </DndContext>

  )
  function handleAddTask () {
    router.push('/create')
  }
  function findContainer (id) {
    for (const container in items) {
      for (let i = 0; i < items[container].length; i++) {
        if (Object.values(items[container][i])[0] === id) {
          return container
        }
      }
    }

    return null
  }

  function handleDragStart (event) {
    const { active } = event
    const { id } = active
    const { containerId } = active.data.current.sortable
    setActiveId(id)
    setContainerId(containerId)
  }
  function handleDragOver (event) {
    const { active, over, draggingRect } = event
    const { id } = active
    const { id: overId } = over
    // Find the containers
    const activeContainer = findContainer(id)
    const overContainer = findContainer(overId)
    console.log(overContainer)
    if (
      !activeContainer ||
      !overContainer ||
      activeContainer === overContainer
    ) {
      return
    }
    setItems((prev) => {
      const activeItems = prev[activeContainer]
      const overItems = prev[overContainer]

      // Find the indexes for the items
      const activeIndex = activeItems.indexOf(id)
      const overIndex = overItems.indexOf(overId)

      let newIndex
      if (overId in prev) {
        // We're at the root droppable of a container
        newIndex = overItems.length + 1
      } else {
        const isBelowLastItem =
          over &&
          overIndex === overItems.length - 1 &&
          draggingRect.offsetTop > over.rect.offsetTop + over.rect.height

        const modifier = isBelowLastItem ? 1 : 0

        newIndex = overIndex >= 0 ? overIndex + modifier : overItems.length + 1
      }

      return {
        ...prev,
        [activeContainer]: [
          ...prev[activeContainer].filter((item) => item.id !== active.id)
        ],
        [overContainer]: [
          ...prev[overContainer].slice(0, newIndex),
          items[activeContainer][activeIndex],
          ...prev[overContainer].slice(newIndex, prev[overContainer].length)
        ]
      }
    })
  }
  function handleDragEnd (event) {
    const { active, over } = event
    const { id } = active
    const { id: overId } = over

    const activeContainer = findContainer(id)
    const overContainer = findContainer(overId)

    if (
      !activeContainer ||
      !overContainer ||
      activeContainer !== overContainer
    ) {
      return
    }
    const activeIndex = items[activeContainer].indexOf(active.id)
    const overIndex = items[overContainer].indexOf(overId)

    if (activeIndex !== overIndex) {
      setItems((items) => ({
        ...items,
        [overContainer]: arrayMove(items[overContainer], activeIndex, overIndex)
      }))
    }

    setActiveId(null)
  }
}
