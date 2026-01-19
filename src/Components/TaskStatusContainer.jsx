import React, { Children, useContext } from 'react'
import { TaskContextData } from '../Context/TaskContext'
import TaskHeading from './TaskHeading';
import { IoAdd } from 'react-icons/io5';
import Tasks from './Tasks';

const TaskStatusContainer = ({ children, heading, color }) => {

    const [allTask] = useContext(TaskContextData);
    console.log(allTask);
    

  return (
    <div className={`todo flex flex-col gap-4 w-1/3 bg-white/5 rounded-lg p-4`}>
        <div className="header flex justify-between">
        <TaskHeading heading={heading} color={color}/>
        {children}
        </div>

        <div className="all-task-list flex flex-col gap-2 overflow-auto">
        {allTask?.length > 0 && allTask?.map((todo, idx) => {
            return <Tasks 
                key={idx} 
                task={todo.task}
                description={todo.description}
                imp={todo.imp}
                />
        })}
        </div>
    </div>
  )
}

export default TaskStatusContainer
