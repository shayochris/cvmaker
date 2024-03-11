import React from 'react'
import ResumeProfile from '../../components/ResumeProfile'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/Sidebar'
import TopNav from '../../components/TopNav'

export default function Create() {
  return (
    <div className="flex">
      <Sidebar
        menu={[
          { title: "personal", icon: "personal", link: "create/personal" },
          { title: "education", icon: "education", link: "create/education" },
          { title: "skills", icon: "skills", link: "create/skills" },
          { title: "experience", icon: "experience", link: "create/experience" },
          { title: "projects", icon: "projects", link: "create/projects" },
          { title: "languages", icon: "languages", link: "create/languages" },
          { title: "hobbies", icon: "interest", link: "create/hobbies" },
          { title: "referees", icon: "referees", link: "create/referees" },
          { title: "links", icon: "links", link: "create/links" },
        ]}
      />
      <div className="main">
        <TopNav />
        <div className="p-2">
          <Outlet />
        </div>

      </div>
    </div>
  )
}
