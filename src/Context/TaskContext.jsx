import React, { createContext, useState } from 'react'

export const TaskContextData = createContext()

const TaskContext = ({ children }) => {

    const [task, setTask] = useState('')
    const [description, setDescription] = useState('')
    const [imp, setImp] = useState(false)
    const [allTask, setAllTask] = useState([])

  return (
    <TaskContextData.Provider value={[ task, setTask, description, setDescription, imp, setImp, allTask, setAllTask ]}>
      {children}
    </TaskContextData.Provider>
  )
}

export default TaskContext
