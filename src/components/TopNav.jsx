import React from 'react'
import { Link } from 'react-router-dom'

//icons
import { AiOutlineSearch } from 'react-icons/ai'

export default function TopNav() {
  return (
    <div className='bg-white p-2 flex-b sticky top-0 left-0 border-b shadow-sm'>
      <Link to="/" >Dashboard</Link>

      <div className='w-[40%]' >
        {/* <div className="input-group-pill">
          <AiOutlineSearch className='input-group-icon' />
          <input type="text"
            className="input-group-input"
            placeholder="Search"
          />
        </div> */}
      </div>

      <Link to="/login">Logout</Link>
    </div>
  )
}
