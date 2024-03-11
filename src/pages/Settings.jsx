import React from 'react'
import Sidebar from '../components/Sidebar'
import TopNav from '../components/TopNav'

export default function Settings() {
  return (
    <div className="flex bg-gray-200">
      <Sidebar
        menu={[
          { title: "Home", icon: "home", link: "home" },
          { title: "Create CV", icon: "create", link: "create" },
          { title: "Settings", icon: "settings", link: "settings" },

        ]}
      />
      <div className="main">
        <TopNav />
        <p>Settings</p>
      </div>
    </div>
  )
}
