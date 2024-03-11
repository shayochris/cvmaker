import React from 'react'
import { NavLink } from 'react-router-dom'

//icons
import { AiFillHome } from 'react-icons/ai'
import { MdDashboard } from 'react-icons/md'
import { IoIosSettings } from 'react-icons/io'
import { IoIosAddCircle } from 'react-icons/io'
import { FaRegUserCircle } from 'react-icons/fa'


export default function Sidebar({ menu }) {
  const getIcon = (item) => {
    switch (item) {
      case 'home':
        return <MdDashboard className="sidebar-link-icon" />
      case 'settings':
        return <IoIosSettings className="sidebar-link-icon" />
      case 'create':
        return <IoIosAddCircle className="sidebar-link-icon" />
      default:
        return <p className='mr-1' ></p>
    }
  }
  return (
    <div className="sidebar relative">


      <div className="hidden lg:flex items-center justify-center p-2 border-b-2 border-[#00416A]">
        <p className='h3'>Logo</p>
      </div>

      <div className="lg:p-2">
        {menu.map(item => (
          <NavLink to={`/${item.link}`} className="sidebar-link" >
            {item.icon && getIcon(item.icon)}
            <p className='hidden lg:block'>{item.title}</p>
          </NavLink>
        ))}
      </div>
    </div>
  )
}
