import React from 'react'
import { useNavigate } from 'react-router-dom';

//icons
import { FaUser, FaBriefcase, FaRegCalendarAlt, FaPhone, FaFlag } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function PersonalDetails() {

  const navigate = useNavigate()

  const handlesubmit = (e) => {
    e.preventDefault()
    navigate("/create/education")
  }

  return (
    <div className='container-md'>

      <form onSubmit={handlesubmit} className=" bordered form px-4 py-2">
        <div className="my-2">
          <p className="h3 text-gray-400 flex-a">
            <div className="w-8 h-8 text-white flex-c bg-secondary mr-2 rounded-lg">1</div>
            Personal Details
          </p>
          <p className="text-xs my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="my-3">
          <div className="input-group">
            <FaUser className='input-group-icon' />
            <input type="text"
              className="input-group-input"
              placeholder='Full Name' />
          </div>
        </div>

        <div className="my-3">
          <div className="input-group">
            <IoMdMail className='input-group-icon' />
            <input type="text"
              className="input-group-input"
              placeholder='Email' />
          </div>
        </div>
        <div className="my-3">
          <div className="input-group">
            <FaRegCalendarAlt className='input-group-icon' />
            <input type="text"
              className="input-group-input"
              placeholder='Date Of Birth' />
          </div>
        </div>

        <div className="my-3">
          <div className="input-group">
            <FaBriefcase className='input-group-icon' />
            <input type="text"
              className="input-group-input"
              placeholder='Profession' />
          </div>
        </div>

        <div className="my-3">
          <div className="input-group">
            <FaPhone className='input-group-icon' />
            <input type="text"
              className="input-group-input"
              placeholder='Phone' />
          </div>
        </div>

        <div className="my-3">
          <div className="input-group">
            <FaFlag className='input-group-icon' />
            <input type="text"
              className="input-group-input"
              placeholder='Nationality' />
          </div>
        </div>

        <div className="my-3">
          <button className="btn-primary w-full ">Save</button>
        </div>
      </form>
    </div>
  )
}
