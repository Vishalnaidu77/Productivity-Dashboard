import React from 'react'

const Button = ({ text, color, icon="" }) => {
  return (
    <button
        className='py-1 px-4 rounded-lg flex items-center gap-2'
        style={{backgroundColor: color}}
    >
        {text}
        {icon}
    </button>
  )
}

export default Button
