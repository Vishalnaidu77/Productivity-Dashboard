import React, { useContext } from 'react'
import { TaskContextData } from '../Context/TaskContext'
import { AiOutlineClose } from 'react-icons/ai'

const Tasks = ({ task, description, imp }) => {

  const [ allTask, , deleteTask ] = useContext(TaskContextData)
  

  return (
    <div className="task-list flex items-center justify-between bg-[#262B32] p-4 rounded-lg">
        <div className="detail w-2/3">
            <h4 className='text-2xl font-semibold flex gap-2'>{task} {imp && <span className='text-red-600 text-sm items-start'>*</span>}</h4>
            <p className='text-sm text-[#7e8289]'>{description}</p>
        </div>
        <button 
        className='text-red-500'
        onClick={() => {
          console.log(allTask.map((task) => task.id))
        }}
        ><AiOutlineClose /></button>
    </div>
  )
}

export default Tasks