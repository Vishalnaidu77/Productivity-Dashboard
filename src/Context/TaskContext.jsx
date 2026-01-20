import React, { createContext, useEffect, useState } from 'react'

export const TaskContextData = createContext()

const TaskContext = ({ children }) => {

    const [allTask, setAllTask] = useState(JSON.parse(localStorage.getItem("all-task")) || [])

    useEffect(() => {
      localStorage.setItem("all-task", JSON.stringify(allTask))
    }, [allTask])

    const deleteTask = (id) => {
      console.log(id)
    }

  return (
    <TaskContextData.Provider value={[ allTask, setAllTask, deleteTask ]}>
      {children}
    </TaskContextData.Provider>
  )
}

export default TaskContext
