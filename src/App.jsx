import path from 'path'
import { element } from 'prop-types'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AppLayout from './Components/AppLayout'
import Home from './Pages/Home'
import Todo from './Pages/Todo'
import DailyGoals from './Pages/DailyGoals'
import Pomodoro from './Pages/Pomodoro'
import DailyPlanner from './Pages/DailyPlanner'

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children : [
        {
          index: true,
          element: <Home />
        },
        {
          path: '/todo',
          element: <Todo />
        },
        {
          path: '/dailygoals',
          element: <DailyGoals />
        },
        {
          path: '/pomodoro',
          element: <Pomodoro />
        },
        {
          path: '/dailyplanner',
          element: <DailyPlanner />
        }
      ]
    }
  ])

  return (
    <main>
      <RouterProvider router={router} />
    </main>
  )
}

export default App
