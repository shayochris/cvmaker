import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

//icons
import { FaUser, FaBriefcase, FaRegCalendarAlt, FaPhone, FaFlag } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { HiBuildingOffice2 } from "react-icons/hi2";


export default function referees() {
  const referees = JSON.parse(localStorage.getItem("referees"))
  const navigate = useNavigate("")
  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [jobTitle, setJobTitle] = useState("")
  const [organization, setOrganization] = useState("")

  const handlesubmit = (e) => {
    e.preventDefault()
    const formData = {
      fullname, email, phone, jobTitle, organization
    }

    if (!referees) {
      localStorage.setItem("referees", JSON.stringify([{ ...formData }]))
    } else {
      referees.push({ ...formData })
      localStorage.setItem("referees", JSON.stringify(referees))
    }

    setFullname(""); setEmail(""); setPhone(""); setJobTitle(""); setOrganization("");
  }
  return (
    <div className='container-md'>

      <form onSubmit={handlesubmit} className=" bordered form px-4 py-2">
        <div className="my-2">
          <div className="h3 text-gray-400 flex-a">
            <div className="w-8 h-8 text-white flex-c bg-secondary mr-2 rounded-lg">8</div>
            Referees
          </div>
          <p className="text-xs my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>



        <div className="my-3">
          <div className="input-group">
            <FaUser className='input-group-icon' />
            <input type="text"
              className="input-group-input"
              placeholder='Full Name'
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="my-3">
          <div className="input-group">
            <IoMdMail className='input-group-icon'
            />
            <input type="text"
              className="input-group-input"
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="my-3">
          <div className="input-group">
            <FaPhone className='input-group-icon'
            />
            <input type="text"
              className="input-group-input"
              placeholder='Phone'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="my-3">
          <div className="input-group">
            <FaBriefcase className='input-group-icon' />
            <input type="text"
              className="input-group-input"
              placeholder='Job Title'
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              required
            />
          </div>
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
          <button className="btn-primary w-full ">
            {referees ? "Add Referee" : "save"}
          </button>
        </div>
        {referees &&
          <div className="my-3">
            <button
              onClick={(e) => {
                e.preventDefault()
                navigate("/create/links")
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
