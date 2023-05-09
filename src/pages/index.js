import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

export default function Home () {
  const [counter, setCounter] = useState(0)
  const [timeoutId, setTimeoutId] = useState(null)

  useEffect(() => {
    const id = setTimeout(
      () => setCounter(counter + 1),
      1000
    )
    setTimeoutId(id)

    return () => clearTimeout(id)
  }, [counter])

  const handleServerStopping = () => {
    clearTimeout(timeoutId)
  }

  useEffect(() => {
    window.addEventListener('beforeunload', handleServerStopping)

    return () => {
      window.removeEventListener('beforeunload', handleServerStopping)
      handleServerStopping()
    }
  }, [])

  return <div>{counter}</div>
}
