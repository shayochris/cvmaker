import React, { useState } from 'react'
import { HiBuildingOffice2 } from 'react-icons/hi2'
import { BsStarFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

export default function Skills() {
  const skills = JSON.parse(localStorage.getItem("skills"))
  const navigate = useNavigate()
  const [skill, setSkill] = useState("")
  const [description, setDescription] = useState("")

  const handlesubmit = (e) => {
    e.preventDefault()
    const formData = {
      skill, description
    }
    console.log(formData)
    if (!skills) {
      localStorage.setItem("skills", JSON.stringify([{ ...formData }]))
    } else {
      skills.push({ ...formData })
      localStorage.setItem("skills", JSON.stringify(skills))
    }

    setSkill(""); setDescription("");
  }
  return (
    <div className='container-md'>

      <form onSubmit={handlesubmit} className=" bordered form px-4 py-2">
        <div className="my-2">
          <div className="h3 text-gray-400 flex-a">
            <div className="w-8 h-8 text-white flex-c bg-secondary mr-2 rounded-lg">3</div>
            Skills
          </div>
          <p className="text-xs my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div className="my-3">
          <div className="input-group">
            <BsStarFill className='input-group-icon' />
            <input type="text"
              className="input-group-input"
              placeholder='skill'
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="my-3">
          <div className="input-group">
            <HiBuildingOffice2 className='input-group-icon' />
            <input type="text"
              className="input-group-input"
              placeholder='Description(optional)'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>

        <div className="my-3">
          <button className="btn-primary w-full ">
            {skills ? "add skill" : "save"}
          </button>
        </div>

        {skills &&
          <div className="my-3">
            <button
              onClick={(e) => {
                e.preventDefault()
                navigate("/create/experience")
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
