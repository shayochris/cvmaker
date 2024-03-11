import React, { useState } from 'react'
import Resumes from '../components/Resumes';
import Sidebar from '../components/Sidebar';
import TopNav from '../components/TopNav';
import { Outlet } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="main">
        <TopNav />
        <Resumes />
      </div>
    </div>
  )
}
