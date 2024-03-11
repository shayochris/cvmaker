import React from 'react'
import Sidebar from '../components/Sidebar'
import TopNav from '../components/TopNav'
import { Link } from 'react-router-dom'
import ResumeProfile from '../components/ResumeProfile'

export default function Create() {
  return (
    <div className="flex">
      <Sidebar
        menu={[
          { title: "Home", icon: "home", link: "home" },
          { title: "Create CV", icon: "create", link: "create" },
          { title: "Settings", icon: "settings", link: "settings" },
        ]}
      />
      <div className="main">
        <TopNav />
        <div className="p-2">
          {/* sections */}
          <ResumeProfile />
        </div>
      </div>
    </div>
  )
}
