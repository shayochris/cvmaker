import React from 'react'
import { Link } from 'react-router-dom'

//icons
import { FaUser, FaBriefcase, FaUserTie } from 'react-icons/fa'
import { IoIosArrowForward } from "react-icons/io";
import { IoSchool } from "react-icons/io5";
import { BsStars } from "react-icons/bs";
import { GiAchievement } from "react-icons/gi";
import { IoLanguageSharp } from "react-icons/io5";
import { MdInterests } from "react-icons/md";
import { PiLinkSimpleBold } from "react-icons/pi";

export default function ResumeProfile() {
  const sections = [
    { icon: <FaUser className='p-icon' />, title: "Profile Information", to: "/profile/personal" },
    { icon: <IoSchool className='p-icon' />, title: "Education", to: "/profile/education" },
    { icon: <BsStars className='p-icon' />, title: "skills", to: "/profile/skills" },
    { icon: <FaBriefcase className='p-icon' />, title: "Experience", to: "/profile/experience" },
    { icon: <GiAchievement className='p-icon' />, title: "Projects", to: "/profile/projects" },
    { icon: <IoLanguageSharp className='p-icon' />, title: "Language proeficiency", to: "/profile/languages" },
    { icon: <MdInterests className='p-icon' />, title: "Hobbies & interests", to: "/profile/hobbies" },
    { icon: <FaUserTie className='p-icon' />, title: "Referees", to: "/profile/referees" },
    { icon: <PiLinkSimpleBold className='p-icon' />, title: "Links", to: "/profile/links" },

  ]
  return (
    <div className="container-md mt-4">
      <p className="h3 text-gray-500">Profile</p>
      <p className="my-2 text-xs">Fill all the modules below to create your perfect resume</p>
      {sections.map((section, id) => (
        <Link key={id} to={`${section.to}`} className="card flex-b p-2 mb-2">
          <div className="flex-a">
            {section.icon}
            <p>{section.title}</p>
          </div>
          <IoIosArrowForward className='w-5 h-5 text-blue-500' />
        </Link>
      ))}
    </div>
  )
}
