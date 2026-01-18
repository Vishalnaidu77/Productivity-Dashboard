import React from 'react'
import BackButton from './BackButton'

const DynamicNav = ({ pageTitle }) => {
  return (
    <div className='w-full flex justify-between py-4 px-8'>
      <h1 className='text-4xl font-bold'>{pageTitle}</h1>
      <BackButton />
    </div>
  )
}

export default DynamicNav
