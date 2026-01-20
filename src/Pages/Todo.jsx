  import React, { useContext, useId, useState } from 'react'
  import BackButton from '../Components/BackButton'
  import DynamicNav from '../Components/DynamicNav'
  import Button from '../Components/Button'
  import { IoAdd } from "react-icons/io5";
  import TaskHeading from '../Components/TaskHeading';
  import AddTaskForm from '../Components/AddTaskForm';
  import Tasks from '../Components/Tasks';
  import { TaskContextData } from '../Context/TaskContext';
  import TaskStatusContainer from '../Components/TaskStatusContainer';

  const Todo = () => {
    const [addTask, setAddTask] = useState(false)
    const [, ,] = useContext(TaskContextData);

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
          <TaskStatusContainer heading="To do" status="todo" color="red">
            <button 
            className='flex items-center text-sm gap-1 py-1 px-3 bg-red-400 rounded-md'
            onClick={toggleTaskForm}
            >
                Add Task 
                <span className='text-lg'><IoAdd /></span>
            </button>
          </TaskStatusContainer>

          {/* In-progress Containter */}
          <TaskStatusContainer heading="In Progress" status="progress" color="yellow"/>

          {/* Done Containter */}
          <TaskStatusContainer heading="Done" status="done" color="green"/>

        </section>
      </div>
    )
  }

  export default Todo
