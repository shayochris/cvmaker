import React from 'react'
import { NavLink } from 'react-router-dom'

//icons
import { MdDashboard } from 'react-icons/md'
import { IoIosSettings } from 'react-icons/io'
import { IoIosAddCircle } from 'react-icons/io'
import { FaUser, FaBriefcase, FaUserTie } from 'react-icons/fa'
import { IoIosArrowForward } from "react-icons/io";
import { IoSchool } from "react-icons/io5";
import { BsBriefcase, BsStars } from "react-icons/bs";
import { GiAchievement } from "react-icons/gi";
import { IoLanguageSharp } from "react-icons/io5";
import { MdInterests } from "react-icons/md";
import { PiLinkSimpleBold } from "react-icons/pi";



export default function MobileNav({ menu = "default" }) {

  const default_menu = [
    { title: "Dashboard", icon: "home", link: "home" },
    { title: "Create", icon: "create", link: "create" },
    { title: "Settings", icon: "settings", link: "settings" },
  ]

  const menu_items = menu == "default" ? [...default_menu] : menu;

  const getIcon = (item) => {
    switch (item) {
      case 'home':
        return <MdDashboard className="sidebar-link-icon" />
      case 'settings':
        return <IoIosSettings className="sidebar-link-icon" />
      case 'profile':
        return <MdDashboard className="sidebar-link-icon" />
      case 'education':
        return <IoSchool className="sidebar-link-icon" />
      case 'skills':
        return <BsStars className="sidebar-link-icon" />
      case 'experience':
        return <FaBriefcase className="sidebar-link-icon" />
      case 'projects':
        return <GiAchievement className="sidebar-link-icon" />
      case 'interest':
        return <MdInterests className="sidebar-link-icon" />
      case 'languages':
        return <IoLanguageSharp className="sidebar-link-icon" />
      case 'referees':
        return <FaUserTie className="sidebar-link-icon" />
      case 'create':
        return <IoIosAddCircle className="sidebar-link-icon" />
      case 'personal':
        return <FaUser className="sidebar-link-icon" />
      case 'links':
        return <PiLinkSimpleBold className="sidebar-link-icon" />
      default:
        return <p className='mr-1' ></p>
    }
  }


  return (
    <div className="mobile-nav relative">

      <div className="flex items-center justify-center p-2 border-b-2 border-[#00416A]">
        <p className='h3'>Logo</p>
      </div>

      <div className="p-2">
        {menu_items.map(item => (
          <NavLink to={`/${item.link}`} className="sidebar-link" >
            {item.icon && getIcon(item.icon)}
            <p className=''>{item.title}</p>
          </NavLink>
        ))}
      </div>
    </div>
  )
}
