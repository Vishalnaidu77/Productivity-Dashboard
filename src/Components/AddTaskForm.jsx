import React, { useContext, useState } from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { TaskContextData } from '../Context/TaskContext';

const AddTaskForm = ({ setAddTask }) => {
  const [task, setTask] = useState('')
  const [description, setDescription] = useState('')
  const [imp, setImp] = useState(false)
  const [status, setStatus] = useState("done")
  const [ allTask, setAllTask ] = useContext(TaskContextData)
  

  const handleForm = (e) => {
    e.preventDefault()
    setAddTask(false)
    const id = crypto.randomUUID()
    setAllTask([...allTask, {id, task, description, imp, status}])
    console.log(allTask);

    setTask('')
    setDescription('')
  }
    
  return (
    <div className='w-full h-screen top-0 absolute bg-black/10 backdrop-blur-xl flex justify-center items-center'>
        <span 
        className='absolute top-10 right-10 text-2xl p-2 border-2 rounded-full hover:scale-105 duration-100 cursor-pointer active:scale-95'
        onClick={() => setAddTask(false)}
        >
            <AiOutlineClose />
        </span>
        <form 
        onSubmit={(e) => {
          handleForm(e)
        }}
        className='flex flex-col gap-3 h-96 w-96'>
            <input 
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className='border border-[#F1F8FF] py-2 px-4 rounded-lg '
            type="text" placeholder='Enter Task'/>

            <textarea 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder='Task desctiption'
            className='border border-[#F1F8FF] py-2 px-4 rounded-lg h-52'
            />

            <div className='flex gap-2 items-center text-md '>
              <input
              value={imp}
              onClick={(e) => setImp(e.target.checked)}
              className='cursor-pointer' 
              type="checkbox" 
              id='imp'
              />
              <label className='cursor-pointer' htmlFor="imp">Mark as important!</label>
            </div>
            <button className='bg-[#00499b] py-2 px-4 rounded-lg'>Add Task</button>
         </form>
    </div>
  )
}

export default AddTaskForm
