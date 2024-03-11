import React, { useContext } from 'react'
import { Link, NavLink, Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'

//icons


export default function Protected() {
  const { token } = useContext(AuthContext)

  if (!token) {
    return <Navigate to="/login" />
  }

  return (
    <div className='font-Poppins text-sm wrapper'>
      <Outlet />
    </div>
  )
}
