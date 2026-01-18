import React from 'react'
import { IoReturnUpBack } from "react-icons/io5";
import { useNavigate } from 'react-router';

const BackButton = () => {

    const navigate = useNavigate()

  return (
    <button 
    className='w-fit flex gap-4 bg-amber-500 py-2 px-4 rounded-lg items-center'
    onClick={() => navigate('/')}
    >
        <IoReturnUpBack height={1}/> Go back
    </button>
  )
}

export default BackButton
