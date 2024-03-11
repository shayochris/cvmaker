import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Guest() {
  return (
    <div className='font-Poppins text-sm'>
      <Outlet />
    </div>
  )
}
