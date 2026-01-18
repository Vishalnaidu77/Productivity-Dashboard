import React from 'react'
import Info from '../Components/Info'
import Card from '../Components/Card'
import { NavLink } from 'react-router'

const Home = () => {
  return (
    <main className='w-[85vw] h-[100vh] flex flex-col gap-4 p-4'>
      <Info />
      <div className="elems h-[68vh] flex gap-4 ">
        <div className="left flex flex-wrap gap-4 p-4 bg-amber-800 w-2/3">
          <NavLink to='/todo'>
            <Card title="Todo"/>
          </NavLink>
          <NavLink to='dailyplanner'>
            <Card title="Daily Planner"/>
          </NavLink>
          <NavLink to='/pomodoro'>
            <Card title="Pomodoro"/>
          </NavLink>
          <NavLink to='dailygoals'>
            <Card title="Daily Goals"/>
          </NavLink>
          <NavLink to='dailygoals'>
            <Card title="Finance Track"/>
          </NavLink>
        </div>
        <div className="right bg-violet-50 w-2/6">
          Calender
        </div>
      </div>
    </main>
  )
}

export default Home
