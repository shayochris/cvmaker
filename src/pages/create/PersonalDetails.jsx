import React from 'react'
import { useNavigate } from 'react-router-dom';

//icons
import { FaUser, FaBriefcase, FaRegCalendarAlt, FaPhone, FaFlag } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useRef } from 'react';

export default function PersonalDetails() {
  const navigate = useNavigate()
  const fullname = useRef()
  const birthday = useRef()
  const email = useRef()
  const profession = useRef()
  const phone = useRef()
  const nationality = useRef()

  const handlesubmit = (e) => {
    e.preventDefault()
    const formData = {
      name: fullname.current.value,
      birthday: birthday.current.value,
      email: email.current.value,
      phone: phone.current.value,
      profession: profession.current.value,
      nationality: nationality.current.value,
    }
    localStorage.setItem("personal", JSON.stringify(formData))
    navigate("/create/education")
  }

  return (
    <div className='container-md'>

      <form onSubmit={handlesubmit} className=" bordered form px-4 py-2">
        <div className="my-2">
          <div className="h3 text-gray-400 flex-a">
            <div className="w-8 h-8 text-white flex-c bg-secondary mr-2 rounded-lg">1</div>
            Personal Details
          </div>
          <p className="text-xs my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="my-3">
          <div className="input-group">
            <FaUser className='input-group-icon' />
            <input ref={fullname} type="text"
              className="input-group-input"
              placeholder='Full Name'
              required
            />
          </div>
        </div>

        <div className="my-3">
          <div className="input-group">
            <IoMdMail className='input-group-icon'
            />
            <input ref={email} type="text"
              className="input-group-input"
              placeholder='Email'
              required
            />
          </div>
        </div>
        <div className="my-3">
          <p className="label my-1">Date of Birth</p>
          <div className="input-group">
            <FaRegCalendarAlt className='input-group-icon' />
            <input ref={birthday} type="date"
              className="input-group-input"
              placeholder='Date Of Birth'
              required
            />
          </div>
        </div>

        <div className="my-3">
          <div className="input-group">
            <FaBriefcase className='input-group-icon' />
            <input ref={profession} type="text"
              className="input-group-input"
              placeholder='Profession'
              required
            />
          </div>
        </div>

        <div className="my-3">
          <div className="input-group">
            <FaPhone className='input-group-icon'
            />
            <input ref={phone} type="text"
              className="input-group-input"
              placeholder='Phone'
              required
            />
          </div>
        </div>

        <div className="my-3">
          <div className="input-group">
            <FaFlag className='input-group-icon'
            />
            <input ref={nationality} type="text"
              className="input-group-input"
              placeholder='Nationality'
              required
            />
          </div>
        </div>

        <div className="my-3">
          <button className="btn-primary w-full ">Save</button>
        </div>
      </form>
    </div>
  )
}
