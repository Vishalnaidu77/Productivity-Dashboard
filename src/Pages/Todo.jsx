import React, { useContext, useState } from 'react'
import BackButton from '../Components/BackButton'
import DynamicNav from '../Components/DynamicNav'
import Button from '../Components/Button'
import { IoAdd } from "react-icons/io5";
import TaskHeading from '../Components/TaskHeading';
import AddTaskForm from '../Components/AddTaskForm';
import Tasks from '../Components/Tasks';
import { TaskContextData } from '../Context/TaskContext';

const Todo = () => {

  const [addTask, setAddTask] = useState(false)
  const updatedTasks = JSON.parse(localStorage.getItem("all-task"))
  console.log(updatedTasks);
  

  const toggleTaskForm = () => {
    addTask == false && setAddTask(true)
  }

  return (
    <div className='pages'>
      <DynamicNav pageTitle="Your Personalized Task List" />

      {/* Task Form Logic */}
      {addTask && <AddTaskForm setAddTask={setAddTask}/>}

      {/* Task Container */}
      <section className='w-full flex h-[90vh] p-4 gap-4'>

          {/* To do Containter */}
        <div className="todo flex flex-col gap-4 w-1/3 bg-red-300/5 rounded-lg p-4 ">
          <div className="header flex justify-between">
            <TaskHeading heading="To Do" color="red"/>
            <button 
            className='flex items-center text-sm gap-1 py-1 px-3 bg-red-400 rounded-md'
            onClick={toggleTaskForm}
            >
              Add Task 
              <span className='text-lg'><IoAdd /></span>
            </button>
          </div>

          <div className="all-task-list flex flex-col gap-2 overflow-auto">
            {updatedTasks?.length > 0 && updatedTasks.map((todo, idx) => {
              return <Tasks 
                    key={idx} 
                    task={todo.task}
                    description={todo.description}
                    imp={todo.imp}
                    />
            })}
          </div>
        </div>

        {/* In-progress Containter */}
        <div className="in-progress w-1/3 bg-yellow-300/5 rounded-lg p-4">;l</div>

        {/* Done Containter */}
        <div className="done w-1/3 bg-green-300/5 rounded-lg p-4">klj</div>
      </section>
    </div>
  )
}

export default Todo
