import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import MobileNav from './MobileNav'

//icons
import { HiMenuAlt2 } from "react-icons/hi";
import { MdLogout } from "react-icons/md";



export default function TopNav({ menu }) {
  const [mobileMenu, setMobileMenu] = useState(false)
  return (
    <div className='bg-white p-3 flex-b sticky top-0 left-0 border-b shadow-sm z-10'>
      <div className="flex-a">
        <HiMenuAlt2 onClick={() => setMobileMenu(true)} className='w-6 h-6 mr-2 lg:hidden' />
        <Link to="/" className='flex-a'>
          <HiMenuAlt2 onClick={() => setMobileMenu(true)} className='hidden lg:block w-6 h-6 mr-2' />
          Dashboard
        </Link>
      </div>
      <Link to="/login">
        <MdLogout className='w-5 h-5' />
      </Link>

      {mobileMenu &&
        <div className="lg:hidden fixed w-full h-screen top-0 left-0">
          <div className="w-full flex h-full">
            <div className='w-[60%]' >
              <MobileNav menu={menu} />
            </div>
            <div onClick={() => setMobileMenu(false)} className="w-[40%] bg-black/40"></div>
          </div>
        </div>}

    </div>
  )
}
