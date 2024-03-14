import React, { useRef, useState } from 'react'

//icons
import { FaBriefcase, FaRegCalendarAlt } from "react-icons/fa";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';


export default function Experience() {
  const experience = JSON.parse(localStorage.getItem("experience"))
  const navigate = useNavigate()
  const [organization, setOrganization] = useState("")
  const [jobTitle, setJobTitle] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")

  const handlesubmit = (e) => {
    e.preventDefault()
    const formData = {
      organization, jobTitle, startDate, endDate
    }

    if (!experience) {
      localStorage.setItem("experience", JSON.stringify([{ ...formData }]))
    } else {
      experience.push({ ...formData })
      localStorage.setItem("experience", JSON.stringify(experience))
    }

    setOrganization(""); setJobTitle(""); setStartDate(""); setEndDate("");
  }
  return (
    <div className='container-md'>

      <form onSubmit={handlesubmit} className=" bordered form px-4 py-2">
        <div className="my-2">
          <div className="h3 text-gray-400 flex-a">
            <div className="w-8 h-8 text-white flex-c bg-secondary mr-2 rounded-lg">4</div>
            Working Experience
          </div>
          <p className="text-xs my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="my-3">
          <div className="input-group">
            <HiBuildingOffice2 className='input-group-icon' />
            <input type="text"
              className="input-group-input"
              placeholder='organization'
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="my-3">
          <div className="input-group">
            <FaBriefcase className='input-group-icon' />
            <input type="text"
              className="input-group-input"
              placeholder='Job title'
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="my-3">
          <label htmlFor="" className="label block my-1">Start date</label>
          <div className="input-group">
            <FaRegCalendarAlt className='input-group-icon' />
            <input type="date"
              className="input-group-input"
              placeholder='start date'
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="my-3">
          <label htmlFor="" className="label block my-1">End date</label>
          <div className="input-group">
            <FaRegCalendarAlt className='input-group-icon' />
            <input type="date"
              className="input-group-input"
              placeholder='end date'
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="my-3">
          <button className="btn-primary w-full ">
            {experience ? "add experience" : "save"}
          </button>
        </div>
        {experience &&
          <div className="my-3">
            <button
              onClick={(e) => {
                e.preventDefault()
                navigate("/create/projects")
              }
              }
              className="btn-secondary w-full ">
              Next
            </button>
          </div>
        }
      </form>

    </div>
  )
}
