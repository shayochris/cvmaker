import React, { useRef, useState } from 'react'

//icons
import { FaRegCalendarAlt } from "react-icons/fa";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';
import { PiLinkSimpleBold } from "react-icons/pi";


export default function Projects() {
  const projects = JSON.parse(localStorage.getItem("projects"))
  const navigate = useNavigate()
  const [title, settitle] = useState("")
  const [description, setdescription] = useState("")
  const [link, setlink] = useState("")

  const handlesubmit = (e) => {
    e.preventDefault()
    const formData = {
      title, description, link
    }

    if (!projects) {
      localStorage.setItem("projects", JSON.stringify([{ ...formData }]))
    } else {
      projects.push({ ...formData })
      localStorage.setItem("projects", JSON.stringify(projects))
    }

    settitle(""); setdescription(""); setlink("");
  }
  return (
    <div className='container-md'>

      <form onSubmit={handlesubmit} className=" bordered form px-4 py-2">
        <div className="my-2">
          <div className="h3 text-gray-400 flex-a">
            <div className="w-8 h-8 text-white flex-c bg-secondary mr-2 rounded-lg">5</div>
            projects
          </div>
          <p className="text-xs my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="my-3">
          <div className="input-group">
            <HiBuildingOffice2 className='input-group-icon' />
            <input type="text"
              className="input-group-input"
              placeholder='title'
              value={title}
              onChange={(e) => settitle(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="my-3">
          <textarea
            className="input"
            placeholder='Project Description'
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          ></textarea>
        </div>

        <div className="my-3">
          <div className="input-group">
            <PiLinkSimpleBold className='input-group-icon' />
            <input type="text"
              className="input-group-input"
              placeholder='Project Link'
              value={link}
              onChange={(e) => setlink(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="my-3">
          <button className="btn-primary w-full ">
            {projects ? "add projects" : "save"}
          </button>
        </div>
        <div className="my-3">
          <button
            onClick={(e) => {
              e.preventDefault()
              navigate("/create/languages")
            }
            }
            className="btn-secondary w-full ">
            Next
          </button>
        </div>
      </form>
    </div>
  )
}
