import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import TopNav from '../components/TopNav'
import { useNavigate } from 'react-router-dom';
import Resumes from '../components/Resumes';

export default function Home() {
  const navigate = useNavigate()
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
        <div className="p-3">
          <Resumes />
        </div>
      </div>
    </div>
  )
}
