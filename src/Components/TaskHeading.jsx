import React from 'react'

const TaskHeading = ({ heading, color }) => {
  return (
    <div className={`flex gap-1 items-center bg-${color}-300 py-0.5 px-2 rounded-full`}>
      <span className={`h-3 w-3 rounded-full bg-${color}-400`}></span>
      <h3 className='font-semibold'>{heading}</h3>
    </div>
  )
}

export default TaskHeading
